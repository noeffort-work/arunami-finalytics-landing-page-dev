const STATUS_COPY = {
  idle: {
    title: 'Provide your activation details',
    subtitle:
      "We'll guide you through verification, account setup, and plan assignment.",
    pill: 'Waiting for input',
    tone: 'neutral',
    icon: 'idle',
  },
  waiting_validation: {
    title: 'Activation queued for verification',
    subtitle:
      'We stored your activation request and are waiting for the backend to pick it up.',
    pill: 'Waiting for validation',
    tone: 'progress',
    icon: 'progress',
  },
  validating_code: {
    title: 'Validating activation code with Mayar',
    subtitle:
      'Hang tight while we confirm your purchase details and entitlement.',
    pill: 'Validating with Mayar',
    tone: 'progress',
    icon: 'progress',
  },
  waiting_password: {
    title: 'Create a password to continue',
    subtitle:
      'We could not find an existing Finalytics account with this email.',
    pill: 'Password required',
    tone: 'warning',
    icon: 'password',
  },
  waiting_create_account: {
    title: 'Creating your Finalytics account',
    subtitle:
      'Your password was received. We are creating the user profile now.',
    pill: 'Creating account',
    tone: 'progress',
    icon: 'progress',
  },
  creating_account: {
    title: 'Creating your Finalytics account',
    subtitle:
      'Finalising Firebase Auth user and security configuration.',
    pill: 'Creating account',
    tone: 'progress',
    icon: 'progress',
  },
  assigning_plan: {
    title: 'Assigning your membership plan',
    subtitle:
      'We are attaching the purchased plan and membership metadata.',
    pill: 'Assigning plan',
    tone: 'progress',
    icon: 'progress',
  },
  success: {
    title: 'Activation successful',
    subtitle:
      'You can now sign in on app.finalytics.id using your registered email.',
    pill: 'Activation complete',
    tone: 'success',
    icon: 'success',
  },
  invalid_code: {
    title: 'Activation code not recognised',
    subtitle:
      'Please verify the code from Mayar. You can try again if you still have attempts left.',
    pill: 'Invalid code',
    tone: 'error',
    icon: 'error',
  },
  failed: {
    title: 'Activation failed',
    subtitle:
      'An unrecoverable error occurred. Please reach out to support for assistance.',
    pill: 'Activation failed',
    tone: 'error',
    icon: 'error',
  },
};

const STATUS_ALIASES = {
  creating_account: 'waiting_create_account',
};

const TIMELINE_ORDER = [
  'waiting_validation',
  'validating_code',
  'waiting_password',
  'waiting_create_account',
  'assigning_plan',
  'success',
];

const state = {
  ready: false,
  id: null,
  email: '',
  activationCode: '',
  status: 'idle',
  retryCount: 0,
  metadata: null,
  activationExpiresAt: null,
  updatedAt: null,
  error: null,
  activationSubmitting: false,
  passwordSubmitting: false,
};

let activationService = null;
let unsubscribeCurrent = null;

const dom = {
  activationForm: document.getElementById('activation-form'),
  activationEmail: document.getElementById('activationEmail'),
  activationCode: document.getElementById('activationCode'),
  activationSubmit: document.getElementById('activationSubmit'),
  passwordForm: document.getElementById('password-form'),
  passwordInput: document.getElementById('activationPassword'),
  passwordConfirmInput: document.getElementById('activationPasswordConfirm'),
  passwordSubmit: document.getElementById('passwordSubmit'),
  alert: document.getElementById('alert'),
  statusTitle: document.getElementById('status-title'),
  statusSubtitle: document.getElementById('status-subtitle'),
  statusPill: document.getElementById('status-pill'),
  statusIcon: document.getElementById('status-icon'),
  statusBadge: document.getElementById('status-badge'),
  timeline: document.getElementById('timeline'),
  metadata: document.getElementById('metadata'),
  metadataList: document.getElementById('metadataList'),
  passwordToggles: Array.from(
    document.querySelectorAll('[data-toggle-password]')
  ),
};

const toneToClasses = {
  neutral: {
    pill:
      'inline-flex items-center self-start sm:self-center rounded-full border border-gray-200 bg-gray-100 text-sm font-medium text-gray-600 px-3 py-1',
    badge:
      'inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600',
    icon:
      'flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500',
  },
  progress: {
    pill:
      'inline-flex items-center self-start sm:self-center rounded-full border border-indigo-100 bg-indigo-50 text-sm font-medium text-indigo-600 px-3 py-1',
    badge:
      'inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600',
    icon:
      'flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-white text-indigo-500',
  },
  warning: {
    pill:
      'inline-flex items-center self-start sm:self-center rounded-full border border-amber-100 bg-amber-50 text-sm font-medium text-amber-600 px-3 py-1',
    badge:
      'inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-600',
    icon:
      'flex h-12 w-12 items-center justify-center rounded-full border border-amber-100 bg-white text-amber-500',
  },
  success: {
    pill:
      'inline-flex items-center self-start sm:self-center rounded-full border border-emerald-100 bg-emerald-50 text-sm font-medium text-emerald-600 px-3 py-1',
    badge:
      'inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600',
    icon:
      'flex h-12 w-12 items-center justify-center rounded-full border border-emerald-100 bg-white text-emerald-500',
  },
  error: {
    pill:
      'inline-flex items-center self-start sm:self-center rounded-full border border-red-100 bg-red-50 text-sm font-medium text-red-600 px-3 py-1',
    badge:
      'inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-600',
    icon:
      'flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-white text-red-500',
  },
};

const ICONS = {
  idle: `
    <span
      class="icon-mask"
      style="--icon-src: url('./assets/icons/document-text.svg');"
      aria-hidden="true"
    ></span>
  `,
  progress: `
    <span
      class="icon-mask animate-spin"
      style="--icon-src: url('./assets/icons/loader-circle.svg');"
      aria-hidden="true"
    ></span>
  `,
  password: `
    <span
      class="icon-mask"
      style="--icon-src: url('./assets/icons/lock-closed.svg');"
      aria-hidden="true"
    ></span>
  `,
  success: `
    <span
      class="icon-mask"
      style="--icon-src: url('./assets/icons/check-badge.svg');"
      aria-hidden="true"
    ></span>
  `,
  error: `
    <span
      class="icon-mask"
      style="--icon-src: url('./assets/icons/exclamation-triangle.svg');"
      aria-hidden="true"
    ></span>
  `,
};

function setState(update) {
  Object.assign(state, update);
  render();
}

function render() {
  const currentStatus = state.status || 'idle';
  const copy = STATUS_COPY[currentStatus] || STATUS_COPY.idle;
  const tone = toneToClasses[copy.tone] || toneToClasses.neutral;

  dom.statusTitle.textContent = copy.title;
  dom.statusSubtitle.textContent = copy.subtitle;
  dom.statusPill.className = tone.pill;
  dom.statusPill.textContent = copy.pill;
  dom.statusIcon.className = tone.icon;
  dom.statusIcon.innerHTML = ICONS[copy.icon] || ICONS.idle;

  dom.statusBadge.className = tone.badge;
  dom.statusBadge.textContent = copy.pill;

  dom.activationEmail.value = state.email || '';
  dom.activationCode.value = state.activationCode || '';

  const showActivationForm =
    currentStatus === 'idle' ||
    currentStatus === 'invalid_code' ||
    currentStatus === 'failed' ||
    (!state.id && currentStatus === 'waiting_validation');

  dom.activationForm.classList.toggle('hidden', !showActivationForm);
  dom.activationEmail.disabled =
    !state.ready || state.activationSubmitting || (state.id && currentStatus !== 'invalid_code' && currentStatus !== 'failed' && currentStatus !== 'idle');
  dom.activationCode.disabled = dom.activationEmail.disabled;

  const activationButtonDisabled =
    !state.ready || state.activationSubmitting;
  setButtonLoading(
    dom.activationSubmit,
    state.activationSubmitting,
    'Start activation',
    state.id ? 'Updating…' : 'Processing…'
  );
  dom.activationSubmit.disabled = activationButtonDisabled;

  const showPasswordForm = currentStatus === 'waiting_password';
  dom.passwordForm.classList.toggle('hidden', !showPasswordForm);
  dom.passwordInput.disabled = state.passwordSubmitting;
  dom.passwordConfirmInput.disabled = state.passwordSubmitting;
  setButtonLoading(
    dom.passwordSubmit,
    state.passwordSubmitting,
    'Save password & continue',
    'Saving…'
  );

  renderAlert();
  renderTimeline(currentStatus);
  renderMetadata();
  syncPasswordToggles();
}

function renderAlert() {
  const currentStatus = state.status || 'idle';
  let message = null;

  if (state.error) {
    message = state.error;
  } else if (currentStatus === 'invalid_code') {
    const attemptsLeft = Math.max(0, 3 - (state.retryCount || 0));
    message =
      attemptsLeft > 0
        ? `We could not validate that activation code. You can try again. Attempts remaining: ${attemptsLeft}.`
        : 'We could not validate that activation code. Attempts exhausted.';
  } else if (currentStatus === 'failed') {
    message =
      'Activation failed due to an unrecoverable error. Please contact support@finalytics.id.';
  }

  if (message) {
    dom.alert.textContent = message;
    dom.alert.classList.remove('hidden');
  } else {
    dom.alert.classList.add('hidden');
    dom.alert.textContent = '';
  }
}

function renderTimeline(status) {
  if (!dom.timeline) return;

  const comparableStatus = STATUS_ALIASES[status] || status;
  const currentIndex = TIMELINE_ORDER.indexOf(comparableStatus);

  Array.from(dom.timeline.querySelectorAll('[data-status-item]')).forEach(
    (item) => {
      const itemStatus = item.getAttribute('data-status-item');
      const dot = item.querySelector('div[aria-hidden]');
      const index = TIMELINE_ORDER.indexOf(itemStatus);
      item.classList.remove(
        'border-indigo-200',
        'bg-indigo-50',
        'shadow-sm',
        'border-gray-200/70',
        'bg-white',
        'opacity-60'
      );

      if (index === -1 || currentIndex === -1) {
        item.classList.add('border-gray-200/70', 'bg-white');
        if (dot) dot.className = 'h-2 w-2 rounded-full bg-gray-300 mt-2';
        return;
      }

      if (index < currentIndex) {
        item.classList.add('border-indigo-200', 'bg-indigo-50');
        if (dot) dot.className = 'h-2 w-2 rounded-full bg-indigo-400 mt-2';
      } else if (index === currentIndex) {
        item.classList.add('border-indigo-200', 'bg-white', 'shadow-sm');
        if (dot) dot.className = 'h-2 w-2 rounded-full bg-indigo-500 mt-2';
      } else {
        item.classList.add('border-gray-200/70', 'bg-white', 'opacity-60');
        if (dot) dot.className = 'h-2 w-2 rounded-full bg-gray-300 mt-2';
      }
    }
  );
}

function renderMetadata() {
  const pairs = [];

  if (state.email) {
    pairs.push(['Email', state.email]);
  }

  if (state.activationCode) {
    pairs.push(['Activation code', state.activationCode]);
  }

  if (state.retryCount != null && state.retryCount > 0) {
    pairs.push(['Retry count', String(state.retryCount)]);
  }

  if (state.activationExpiresAt) {
    const formatted = formatTimestamp(state.activationExpiresAt);
    if (formatted) pairs.push(['Activation expires', formatted]);
  }

  if (state.updatedAt) {
    const formatted = formatTimestamp(state.updatedAt);
    if (formatted) pairs.push(['Last updated', formatted]);
  }

  const metadata = state.metadata || {};
  const metadataPairs = [
    ['Plan', metadata.planType],
    ['Transaction ID', metadata.transactionId],
    ['Membership expires', formatTimestamp(metadata.membershipExpiresAt)],
    ['Product ID', metadata.productId],
    ['Customer ID', metadata.customerId],
    ['Customer name', metadata.customerName],
    ['Customer email', metadata.customerEmail],
    ['Membership tier ID', metadata.membershipTierId],
    ['Membership tier', metadata.membershipTierName],
  ].filter(([, value]) => Boolean(value));

  pairs.push(...metadataPairs);

  dom.metadataList.innerHTML = pairs
    .map(
      ([label, value]) => `
      <div>
        <dt class="text-xs uppercase tracking-wide text-gray-500">${label}</dt>
        <dd class="text-sm font-medium text-gray-800">${value}</dd>
      </div>
    `
    )
    .join('');

  if (pairs.length > 0 && state.status === 'success') {
    dom.metadata.classList.remove('hidden');
  } else if (metadataPairs.length > 0) {
    dom.metadata.classList.remove('hidden');
  } else {
    dom.metadata.classList.add('hidden');
  }
}

/**
 * Hide or shows HTML element
 *
 * @param {HTMLElement} element HTML element to be hidden or unhide
 * @param {boolean} isHidden Set to hide or show
 */
function setElementHidden(element, isHidden) {
  if (isHidden) element.setAttribute('hidden', 'true');
  else element.removeAttribute('hidden');
}

function syncPasswordToggles() {
  dom.passwordToggles.forEach((button) => {
    const targetId = button.dataset.togglePassword;
    if (!targetId) return;

    const input = document.getElementById(targetId);
    if (!input) return;

    const showLabel = button.dataset.labelShow || 'Show password';
    const hideLabel = button.dataset.labelHide || 'Hide password';
    const isPassword = input.type === 'password';

    const showIcon = button.querySelector('[data-toggle-password-icon="show"]');
    const hideIcon = button.querySelector('[data-toggle-password-icon="hide"]');

    if (showIcon && hideIcon) {
      setElementHidden(showIcon, !isPassword);
      setElementHidden(hideIcon, isPassword);
    }

    button.setAttribute('aria-label', isPassword ? showLabel : hideLabel);
    button.setAttribute('aria-pressed', String(!isPassword));
    button.disabled = state.passwordSubmitting || input.disabled;
  });
}

function togglePasswordVisibility(button) {
  const targetId = button.dataset.togglePassword;
  if (!targetId) return;

  const input = document.getElementById(targetId);
  if (!input) return;

  const isVisible = input.type === 'text';
  input.type = isVisible ? 'password' : 'text';
}

function setButtonLoading(button, isLoading, idleLabel, loadingLabel) {
  if (!button) return;
  if (isLoading) {
    button.innerHTML = `
      <span class="flex items-center gap-2">
        <span
          class="icon-mask icon-sm animate-spin"
          style="--icon-src: url('./assets/icons/loader-circle.svg');"
          aria-hidden="true"
        ></span>
        ${loadingLabel}
      </span>
    `;
  } else {
    button.textContent = idleLabel;
  }
}

function formatTimestamp(value) {
  if (!value) return null;

  if (typeof value.toDate === 'function') {
    return formatDate(value.toDate());
  }

  if (typeof value === 'object' && 'seconds' in value && 'nanoseconds' in value) {
    const millis = value.seconds * 1000 + value.nanoseconds / 1e6;
    return formatDate(new Date(millis));
  }

  if (typeof value === 'string') {
    const date = new Date(value);
    if (!Number.isNaN(date.getTime())) {
      return formatDate(date);
    }
  }

  if (typeof value === 'number') {
    const date = new Date(value);
    if (!Number.isNaN(date.getTime())) {
      return formatDate(date);
    }
  }

  return null;
}

function formatDate(date) {
  try {
    return date.toLocaleString(undefined, {
      dateStyle: 'medium',
      timeStyle: 'short',
    });
  } catch (error) {
    return date.toISOString();
  }
}

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validateActivationCode(value) {
  return /^[A-Za-z0-9-]{6,}$/.test(value);
}

function validatePassword(value) {
  const hasUpper = /[A-Z]/.test(value);
  const hasLower = /[a-z]/.test(value);
  const hasNumber = /[0-9]/.test(value);
  const hasSymbol = /[^A-Za-z0-9]/.test(value);
  return value.length >= 8 && hasUpper && hasLower && hasNumber && hasSymbol;
}

async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

function subscribeToActivation(id) {
  if (unsubscribeCurrent) {
    unsubscribeCurrent();
    unsubscribeCurrent = null;
  }

  unsubscribeCurrent = activationService.onActivationChange(id, (doc) => {
    if (!doc) {
      setState({
        status: 'failed',
        error:
          'Activation record was removed. Please start a new activation request.',
      });
      return;
    }

    const mappedStatus = doc.status || state.status;
    setState({
      id: doc.id,
      email: doc.email || state.email,
      activationCode: doc.activationCode || state.activationCode,
      status: mappedStatus,
      retryCount: doc.retryCount ?? state.retryCount,
      metadata: doc.metadata || null,
      activationExpiresAt: doc.activationExpiresAt || null,
      updatedAt: doc.updatedAt || null,
      error: doc.error || null,
    });
  });
}

dom.activationForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!state.ready) return;

  const email = dom.activationEmail.value.trim().toLowerCase();
  const activationCode = dom.activationCode.value.trim().toUpperCase();

  if (!validateEmail(email)) {
    setState({
      error: 'Please provide a valid email address.',
    });
    return;
  }

  if (!validateActivationCode(activationCode)) {
    setState({
      error:
        'Activation code should be at least 6 characters and contain only letters, numbers, or dashes.',
    });
    return;
  }

  setState({
    activationSubmitting: true,
    email,
    activationCode,
    error: null,
  });

  try {
    if (!state.id || state.status === 'failed') {
      const { id } = await activationService.createActivation({
        email,
        activationCode,
      });
      setState({ id, status: 'waiting_validation' });
      subscribeToActivation(id);
    } else {
      await activationService.updateActivation(state.id, {
        email,
        activationCode,
      });
    }
  } catch (error) {
    console.error('Activation submit failed', error);
    setState({
      error:
        error?.message ||
        'Failed to submit activation. Please try again or contact support.',
    });
  } finally {
    setState({ activationSubmitting: false });
  }
});

dom.passwordForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!state.ready || !state.id) return;

  const password = dom.passwordInput.value;
  const passwordConfirm = dom.passwordConfirmInput.value;

  if (password !== passwordConfirm) {
    setState({ error: 'Passwords do not match.' });
    return;
  }

  if (!validatePassword(password)) {
    setState({
      error:
        'Password must be at least 8 characters and include upper, lower, number, and symbol characters.',
    });
    return;
  }

  setState({ passwordSubmitting: true, error: null });

  try {
    const hashed = await hashPassword(password);
    await activationService.submitPassword(state.id, hashed);
    dom.passwordInput.value = '';
    dom.passwordConfirmInput.value = '';
    dom.passwordInput.type = 'password';
    dom.passwordConfirmInput.type = 'password';
  } catch (error) {
    console.error('Password submission failed', error);
    setState({
      error:
        error?.message ||
        'Failed to submit password. Please try again or contact support.',
    });
  } finally {
    setState({ passwordSubmitting: false });
  }
});

dom.passwordToggles.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.disabled) return;
    togglePasswordVisibility(button);
    syncPasswordToggles();
  });
});

class ActivationServiceFactory {
  static async create(config = {}) {
    if (config.firebaseConfig) {
      return FirebaseActivationService.init(config);
    }
    return new MockActivationService(config);
  }
}

class FirebaseActivationService {
  static async init(config) {
    try {
      const appModule = await import(
        'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js'
      );
      const firestoreModule = await import(
        'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js'
      );
      const { initializeApp, getApps } = appModule;
      const app = getApps().length
        ? getApps()[0]
        : initializeApp(config.firebaseConfig);
      const db = firestoreModule.getFirestore(app);
      return new FirebaseActivationService(app, db, firestoreModule, config);
    } catch (error) {
      console.error('Firebase initialisation failed', error);
      throw new Error('Unable to initialise Firebase for activation flow.');
    }
  }

  constructor(app, db, firestore, config) {
    this.app = app;
    this.db = db;
    this.fs = firestore;
    this.collectionPath = config.collectionPath || 'activations';
  }

  async createActivation({ email, activationCode }) {
    const {
      collection,
      doc,
      setDoc,
      serverTimestamp,
      Timestamp,
    } = this.fs;
    const colRef = collection(this.db, this.collectionPath);
    const docRef = doc(colRef);
    const expiresAt = Timestamp.fromMillis(Date.now() + 24 * 60 * 60 * 1000);

    await setDoc(docRef, {
      activationCode,
      email,
      status: 'waiting_validation',
      retryCount: 0,
      activationExpiresAt: expiresAt,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      error: null,
    });

    return { id: docRef.id };
  }

  async updateActivation(id, { email, activationCode }) {
    const { doc, updateDoc, serverTimestamp } = this.fs;
    const docRef = doc(this.db, this.collectionPath, id);
    await updateDoc(docRef, {
      activationCode,
      email,
      status: 'waiting_validation',
      error: null,
      updatedAt: serverTimestamp(),
    });
  }

  async submitPassword(id, hashedPassword) {
    const { doc, updateDoc, serverTimestamp } = this.fs;
    const docRef = doc(this.db, this.collectionPath, id);
    await updateDoc(docRef, {
      password: hashedPassword,
      status: 'waiting_create_account',
      updatedAt: serverTimestamp(),
      passwordSetAt: serverTimestamp(),
      error: null,
    });
  }

  onActivationChange(id, callback) {
    const { doc, onSnapshot } = this.fs;
    const docRef = doc(this.db, this.collectionPath, id);
    return onSnapshot(
      docRef,
      (snapshot) => {
        if (!snapshot.exists()) {
          callback(null);
          return;
        }
        const data = snapshot.data();
        callback({ id: snapshot.id, ...data });
      },
      (error) => {
        console.error('Firestore listener error', error);
        callback({
          id,
          status: 'failed',
          error:
            'Realtime updates are unavailable. Please refresh or contact support.',
        });
      }
    );
  }
}

class MockActivationService {
  constructor(config = {}) {
    this.config = config;
    this.docs = new Map();
    this.listeners = new Map();
  }

  async createActivation({ email, activationCode }) {
    const id =
      typeof crypto !== 'undefined' && crypto.randomUUID
        ? crypto.randomUUID()
        : `activation-${Date.now()}`;
    const now = new Date();
    const expiresAt = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    const doc = {
      id,
      email,
      activationCode,
      status: 'waiting_validation',
      retryCount: 0,
      createdAt: now.toISOString(),
      updatedAt: now.toISOString(),
      activationExpiresAt: expiresAt.toISOString(),
      metadata: null,
      error: null,
      timers: [],
    };

    this.docs.set(id, doc);
    this.emit(id);
    this.scheduleValidation(id);
    return { id };
  }

  async updateActivation(id, { email, activationCode }) {
    const doc = this.docs.get(id);
    if (!doc) throw new Error('Activation request not found.');

    doc.email = email;
    doc.activationCode = activationCode;
    doc.status = 'waiting_validation';
    doc.error = null;
    this.touch(doc);
    this.emit(id);
    this.scheduleValidation(id);
  }

  async submitPassword(id, hashedPassword) {
    const doc = this.docs.get(id);
    if (!doc) throw new Error('Activation request not found.');

    doc.password = hashedPassword;
    doc.status = 'waiting_create_account';
    doc.error = null;
    this.touch(doc);
    this.emit(id);

    doc.timers.push(
      setTimeout(() => {
        this.applyUpdate(id, { status: 'creating_account' });
      }, 600),
      setTimeout(() => {
        this.applyUpdate(id, { status: 'assigning_plan' });
        this.completeSuccess(id);
      }, 1600)
    );
  }

  onActivationChange(id, callback) {
    const listeners = this.listeners.get(id) || new Set();
    listeners.add(callback);
    this.listeners.set(id, listeners);

    const doc = this.docs.get(id);
    if (doc) {
      callback({ ...doc });
    }

    return () => {
      const set = this.listeners.get(id);
      if (!set) return;
      set.delete(callback);
      if (set.size === 0) {
        this.listeners.delete(id);
      }
    };
  }

  scheduleValidation(id) {
    const doc = this.docs.get(id);
    if (!doc) return;

    this.clearTimers(doc);

    doc.timers.push(
      setTimeout(() => {
        this.applyUpdate(id, { status: 'validating_code' });
      }, this.randomDelay(400, 800)),
      setTimeout(() => {
        if (/FAIL|ERROR/.test(doc.activationCode)) {
          const retryCount = (doc.retryCount || 0) + 1;
          this.applyUpdate(id, {
            status: retryCount >= 3 ? 'failed' : 'invalid_code',
            retryCount,
            error:
              retryCount >= 3
                ? 'Activation attempts exhausted.'
                : 'Activation code not recognised.',
          });
          return;
        }

        const domain = doc.email.split('@')[1] || '';
        if (/existing/i.test(doc.email) || /finalytics\.id$/i.test(domain)) {
          this.applyUpdate(id, { status: 'assigning_plan' });
          this.completeSuccess(id, { existingUser: true });
        } else {
          this.applyUpdate(id, { status: 'waiting_password' });
        }
      }, this.randomDelay(1400, 2000))
    );
  }

  completeSuccess(id, { existingUser = false } = {}) {
    const doc = this.docs.get(id);
    if (!doc) return;

    const now = new Date();
    const membershipExpiresAt = new Date(now.getTime() + 180 * 24 * 60 * 60 * 1000);

    doc.timers.push(
      setTimeout(() => {
        this.applyUpdate(id, {
          status: 'success',
          metadata: {
            planType: 'mayar:finalytics-pro',
            transactionId: `TX-${doc.activationCode}-${now.getTime()}`,
            membershipExpiresAt: membershipExpiresAt.toISOString(),
            productId: 'mayar-prod-001',
            customerId: `cust-${doc.email.replace(/[^a-z0-9]/gi, '').slice(0, 10)}`,
            customerName: doc.email.split('@')[0],
            customerEmail: doc.email,
            membershipTierId: 'tier-pro',
            membershipTierName: 'Finalytics Pro',
          },
          error: null,
        });
      }, this.randomDelay(existingUser ? 400 : 1200, existingUser ? 800 : 1800))
    );
  }

  applyUpdate(id, partial) {
    const doc = this.docs.get(id);
    if (!doc) return;

    Object.assign(doc, partial);
    this.touch(doc);

    if (partial.status === 'invalid_code' || partial.status === 'failed') {
      this.clearTimers(doc);
    }

    this.emit(id);
  }

  emit(id) {
    const doc = this.docs.get(id);
    if (!doc) return;
    const listeners = this.listeners.get(id);
    if (!listeners) return;
    const payload = { ...doc };
    listeners.forEach((callback) => {
      try {
        callback({ ...payload });
      } catch (error) {
        console.error('Listener error', error);
      }
    });
  }

  touch(doc) {
    const now = new Date().toISOString();
    doc.updatedAt = now;
  }

  clearTimers(doc) {
    if (!doc.timers) return;
    doc.timers.forEach((timer) => clearTimeout(timer));
    doc.timers = [];
  }

  randomDelay(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

(async () => {
  try {
    const firebaseConfig = {
      apiKey: 'AIzaSyB9_J1AZkSbCM9v3PeV4m33qojHX51bLwg',
      authDomain: 'finalytics-62350.firebaseapp.com',
      projectId: 'finalytics-62350',
      storageBucket: 'finalytics-62350.firebasestorage.app',
      messagingSenderId: '586305419053',
      appId: '1:586305419053:web:b94a325fd5b649340305a4',
    }
    const config = window.ACTIVATION_APP_CONFIG || { firebaseConfig };
    activationService = await ActivationServiceFactory.create(config);
    setState({ ready: true });
  } catch (error) {
    console.error(error);
    setState({
      ready: false,
      error:
        'Unable to start activation flow. Please refresh or contact support.',
    });
  } finally {
    render();
  }
})();
