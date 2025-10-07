// --- TRANSLATIONS OBJECT ---
const translations = {
  nav_dashboard: { en: "Go to Dashboard", id: "Ke Dashboard" },
  activation_badge: { en: "Membership Activation", id: "Aktivasi Keanggotaan" },
  activation_title: { en: "Activate your Finalytics access in minutes", id: "Aktifkan akses Finalytics Anda dalam hitungan menit" },
  activation_subtitle: { en: "Enter the activation code that you received after completing your Mayar payment. We'll validate it, help you create an account if needed, and attach the right plan automatically.", id: "Masukkan kode aktivasi yang Anda terima setelah menyelesaikan pembayaran Mayar. Kami akan memvalidasinya, membantu Anda membuat akun jika diperlukan, dan melampirkan paket yang tepat secara otomatis." },
  step1_title: { en: "Validate your purchase", id: "Validasi pembelian Anda" },
  step1_desc: { en: "We confirm the activation code against Mayar and prepare the membership details.", id: "Kami mengonfirmasi kode aktivasi dengan Mayar dan menyiapkan detail keanggotaan." },
  step2_title: { en: "Create or connect an account", id: "Buat atau hubungkan akun" },
  step2_desc: { en: "New to Finalytics? Set a secure password. Existing accounts go straight to plan assignment.", id: "Baru di Finalytics? Buat kata sandi yang aman. Akun yang sudah ada langsung ke penugasan paket." },
  step3_title: { en: "Activate your membership", id: "Aktifkan keanggotaan Anda" },
  step3_desc: { en: "We attach the purchased plan to your account, ready for you to sign in and start exploring insights.", id: "Kami melampirkan paket yang dibeli ke akun Anda, siap untuk Anda masuk dan mulai menjelajahi wawasan." },
  form_email_label: { en: "Email address", id: "Alamat email" },
  form_email_placeholder: { en: "you@example.com", id: "anda@contoh.com" },
  form_code_label: { en: "Activation code", id: "Kode aktivasi" },
  form_code_placeholder: { en: "ABC123", id: "ABC123" },
  form_code_hint: { en: "Use the code from Mayar. It is case insensitive and typically 6–10 characters.", id: "Gunakan kode dari Mayar. Tidak peka huruf besar-kecil dan biasanya 6–10 karakter." },
  form_submit_btn: { en: "Start activation", id: "Mulai aktivasi" },
  form_password_label: { en: "Create a password", id: "Buat kata sandi" },
  form_password_placeholder: { en: "Use at least 8 characters", id: "Gunakan minimal 8 karakter" },
  form_password_hint: { en: "Minimum 8 characters. Include a mix of upper & lower case letters, numbers, and symbols.", id: "Minimal 8 karakter. Sertakan campuran huruf besar & kecil, angka, dan simbol." },
  form_password_show: { en: "Show password", id: "Tampilkan kata sandi" },
  form_password_hide: { en: "Hide password", id: "Sembunyikan kata sandi" },
  form_password_confirm_label: { en: "Confirm password", id: "Konfirmasi kata sandi" },
  form_password_confirm_placeholder: { en: "Re-enter the password", id: "Masukkan ulang kata sandi" },
  form_password_confirm_show: { en: "Show password confirmation", id: "Tampilkan konfirmasi kata sandi" },
  form_password_confirm_hide: { en: "Hide password confirmation", id: "Sembunyikan konfirmasi kata sandi" },
  form_password_submit_btn: { en: "Save password & continue", id: "Simpan kata sandi & lanjutkan" },
  progress_label: { en: "Status", id: "Status" },
  timeline_waiting_validation_title: { en: "Waiting for validation", id: "Menunggu validasi" },
  timeline_waiting_validation_desc: { en: "Activation document queued for backend verification.", id: "Dokumen aktivasi antre untuk verifikasi backend." },
  timeline_validating_code_title: { en: "Validating code", id: "Memvalidasi kode" },
  timeline_validating_code_desc: { en: "Mayar gateway verification in progress.", id: "Verifikasi gateway Mayar sedang berlangsung." },
  timeline_waiting_password_title: { en: "Password required", id: "Kata sandi diperlukan" },
  timeline_waiting_password_desc: { en: "New user detected. Awaiting secure password creation.", id: "Pengguna baru terdeteksi. Menunggu pembuatan kata sandi yang aman." },
  timeline_creating_account_title: { en: "Creating account", id: "Membuat akun" },
  timeline_creating_account_desc: { en: "Account creation and claim assignment in progress.", id: "Pembuatan akun dan penugasan klaim sedang berlangsung." },
  timeline_assigning_plan_title: { en: "Assigning plan", id: "Menetapkan paket" },
  timeline_assigning_plan_desc: { en: "Membership data and billing metadata being attached.", id: "Data keanggotaan dan metadata penagihan sedang dilampirkan." },
  timeline_success_title: { en: "Activation complete", id: "Aktivasi selesai" },
  timeline_success_desc: { en: "Your Finalytics membership is ready to use.", id: "Keanggotaan Finalytics Anda siap digunakan." },
  metadata_title: { en: "Membership detail", id: "Detail keanggotaan" },
  metadata_synced: { en: "Synced", id: "Tersinkronisasi" },
  metadata_name: { en: "Name", id: "Nama" },
  metadata_email: { en: "Email", id: "Email" },
  metadata_plan: { en: "Plan", id: "Paket" },
  metadata_expires: { en: "Expires", id: "Kedaluwarsa" },
  metadata_activation_code: { en: "Activation code", id: "Kode aktivasi" },
  metadata_last_synced: { en: "Last synced", id: "Terakhir disinkronkan" },
  footer_help_text: { en: "Need help? Reach us at", id: "Butuh bantuan? Hubungi kami di" },
  footer_copyright: { en: "Finalytics. All rights reserved.", id: "Finalytics. Hak Cipta Dilindungi." },
  footer_home: { en: "Home", id: "Beranda" },
  footer_signin: { en: "Sign in", id: "Masuk" },
  // Status messages
  status_idle_title: { en: "Provide your activation details", id: "Berikan detail aktivasi Anda" },
  status_idle_subtitle: { en: "We'll guide you through verification, account setup, and plan assignment.", id: "Kami akan memandu Anda melalui verifikasi, pengaturan akun, dan penugasan paket." },
  status_idle_pill: { en: "Waiting for input", id: "Menunggu input" },
  status_waiting_validation_title: { en: "Activation queued for verification", id: "Aktivasi diantrikan untuk verifikasi" },
  status_waiting_validation_subtitle: { en: "We stored your activation request and are waiting for the backend to pick it up.", id: "Kami menyimpan permintaan aktivasi Anda dan menunggu backend untuk mengambilnya." },
  status_waiting_validation_pill: { en: "Waiting for validation", id: "Menunggu validasi" },
  status_validating_code_title: { en: "Validating activation code with Mayar", id: "Memvalidasi kode aktivasi dengan Mayar" },
  status_validating_code_subtitle: { en: "Hang tight while we confirm your purchase details and entitlement.", id: "Tunggu sebentar saat kami mengonfirmasi detail pembelian dan hak Anda." },
  status_validating_code_pill: { en: "Validating with Mayar", id: "Memvalidasi dengan Mayar" },
  status_waiting_password_title: { en: "Create a password to continue", id: "Buat kata sandi untuk melanjutkan" },
  status_waiting_password_subtitle: { en: "We could not find an existing Finalytics account with this email.", id: "Kami tidak dapat menemukan akun Finalytics yang ada dengan email ini." },
  status_waiting_password_pill: { en: "Password required", id: "Kata sandi diperlukan" },
  status_waiting_create_account_title: { en: "Creating your Finalytics account", id: "Membuat akun Finalytics Anda" },
  status_waiting_create_account_subtitle: { en: "Your password was received. We are creating the user profile now.", id: "Kata sandi Anda telah diterima. Kami sedang membuat profil pengguna sekarang." },
  status_waiting_create_account_pill: { en: "Creating account", id: "Membuat akun" },
  status_creating_account_title: { en: "Creating your Finalytics account", id: "Membuat akun Finalytics Anda" },
  status_creating_account_subtitle: { en: "Finalising Firebase Auth user and security configuration.", id: "Menyelesaikan pengguna Firebase Auth dan konfigurasi keamanan." },
  status_creating_account_pill: { en: "Creating account", id: "Membuat akun" },
  status_assigning_plan_title: { en: "Assigning your membership plan", id: "Menetapkan paket keanggotaan Anda" },
  status_assigning_plan_subtitle: { en: "We are attaching the purchased plan and membership metadata.", id: "Kami sedang melampirkan paket yang dibeli dan metadata keanggotaan." },
  status_assigning_plan_pill: { en: "Assigning plan", id: "Menetapkan paket" },
  status_success_title: { en: "Activation successful", id: "Aktivasi berhasil" },
  status_success_subtitle: { en: "You can now sign in on app.finalytics.id using your registered email.", id: "Anda sekarang dapat masuk di app.finalytics.id menggunakan email terdaftar Anda." },
  status_success_pill: { en: "Activation complete", id: "Aktivasi selesai" },
  status_invalid_code_title: { en: "Activation code not recognised", id: "Kode aktivasi tidak dikenali" },
  status_invalid_code_subtitle: { en: "Please verify the code from Mayar. You can try again if you still have attempts left.", id: "Harap verifikasi kode dari Mayar. Anda dapat mencoba lagi jika masih memiliki percobaan tersisa." },
  status_invalid_code_pill: { en: "Invalid code", id: "Kode tidak valid" },
  status_failed_title: { en: "Activation failed", id: "Aktivasi gagal" },
  status_failed_subtitle: { en: "An unrecoverable error occurred. Please reach out to support for assistance.", id: "Terjadi kesalahan yang tidak dapat dipulihkan. Silakan hubungi dukungan untuk bantuan." },
  status_failed_pill: { en: "Activation failed", id: "Aktivasi gagal" },
  // Button states
  btn_start_activation: { en: "Start activation", id: "Mulai aktivasi" },
  btn_processing: { en: "Processing…", id: "Memproses…" },
  btn_updating: { en: "Updating…", id: "Memperbarui…" },
  btn_save_password: { en: "Save password & continue", id: "Simpan kata sandi & lanjutkan" },
  btn_saving: { en: "Saving…", id: "Menyimpan…" },
  // Error messages
  error_invalid_email: { en: "Please provide a valid email address.", id: "Harap berikan alamat email yang valid." },
  error_invalid_code: { en: "Activation code should be at least 6 characters and contain only letters, numbers, or dashes.", id: "Kode aktivasi harus minimal 6 karakter dan hanya berisi huruf, angka, atau tanda hubung." },
  error_password_mismatch: { en: "Passwords do not match.", id: "Kata sandi tidak cocok." },
  error_password_weak: { en: "Password must be at least 8 characters and include upper, lower, number, and symbol characters.", id: "Kata sandi harus minimal 8 karakter dan menyertakan karakter huruf besar, kecil, angka, dan simbol." },
  error_activation_failed: { en: "Failed to submit activation. Please try again or contact support.", id: "Gagal mengirim aktivasi. Silakan coba lagi atau hubungi dukungan." },
  error_password_failed: { en: "Failed to submit password. Please try again or contact support.", id: "Gagal mengirim kata sandi. Silakan coba lagi atau hubungi dukungan." },
  error_attempts_left: { en: "We could not validate that activation code. You can try again. Attempts remaining:", id: "Kami tidak dapat memvalidasi kode aktivasi tersebut. Anda dapat mencoba lagi. Percobaan tersisa:" },
  error_attempts_exhausted: { en: "We could not validate that activation code. Attempts exhausted.", id: "Kami tidak dapat memvalidasi kode aktivasi tersebut. Percobaan habis." },
  error_activation_failed_contact: { en: "Activation failed due to an unrecoverable error. Please contact support@finalytics.id.", id: "Aktivasi gagal karena kesalahan yang tidak dapat dipulihkan. Silakan hubungi support@finalytics.id." },
};

let currentLang = localStorage.getItem('language') || 'id';

const STATUS_COPY = {
  idle: {
    title: 'status_idle_title',
    subtitle: 'status_idle_subtitle',
    pill: 'status_idle_pill',
    tone: 'neutral',
    icon: 'idle',
  },
  waiting_validation: {
    title: 'status_waiting_validation_title',
    subtitle: 'status_waiting_validation_subtitle',
    pill: 'status_waiting_validation_pill',
    tone: 'progress',
    icon: 'progress',
  },
  validating_code: {
    title: 'status_validating_code_title',
    subtitle: 'status_validating_code_subtitle',
    pill: 'status_validating_code_pill',
    tone: 'progress',
    icon: 'progress',
  },
  waiting_password: {
    title: 'status_waiting_password_title',
    subtitle: 'status_waiting_password_subtitle',
    pill: 'status_waiting_password_pill',
    tone: 'warning',
    icon: 'password',
  },
  waiting_create_account: {
    title: 'status_waiting_create_account_title',
    subtitle: 'status_waiting_create_account_subtitle',
    pill: 'status_waiting_create_account_pill',
    tone: 'progress',
    icon: 'progress',
  },
  creating_account: {
    title: 'status_creating_account_title',
    subtitle: 'status_creating_account_subtitle',
    pill: 'status_creating_account_pill',
    tone: 'progress',
    icon: 'progress',
  },
  assigning_plan: {
    title: 'status_assigning_plan_title',
    subtitle: 'status_assigning_plan_subtitle',
    pill: 'status_assigning_plan_pill',
    tone: 'progress',
    icon: 'progress',
  },
  success: {
    title: 'status_success_title',
    subtitle: 'status_success_subtitle',
    pill: 'status_success_pill',
    tone: 'success',
    icon: 'success',
  },
  invalid_code: {
    title: 'status_invalid_code_title',
    subtitle: 'status_invalid_code_subtitle',
    pill: 'status_invalid_code_pill',
    tone: 'error',
    icon: 'error',
  },
  failed: {
    title: 'status_failed_title',
    subtitle: 'status_failed_subtitle',
    pill: 'status_failed_pill',
    tone: 'error',
    icon: 'error',
  },
};

function t(key) {
  return translations[key] && translations[key][currentLang] !== undefined
    ? translations[key][currentLang]
    : key;
}

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

function getActivationPrefillFromQuery() {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const email = params.get('email');
  const licenseCode =
    params.get('licenseCode') ||
    params.get('activationCode') ||
    params.get('code');

  const normalizedEmail = email ? email.trim().toLowerCase() : '';
  const normalizedCode = licenseCode ? licenseCode.trim().toUpperCase() : '';

  const result = {};
  if (normalizedEmail) result.email = normalizedEmail;
  if (normalizedCode) result.activationCode = normalizedCode;
  return result;
}

const queryPrefill = getActivationPrefillFromQuery();

const state = {
  ready: false,
  id: null,
  email: queryPrefill.email || '',
  activationCode: queryPrefill.activationCode || '',
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

if (queryPrefill.email && dom.activationEmail) {
  dom.activationEmail.value = queryPrefill.email;
}

if (queryPrefill.activationCode && dom.activationCode) {
  dom.activationCode.value = queryPrefill.activationCode;
}

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

  dom.statusTitle.textContent = t(copy.title);
  dom.statusSubtitle.textContent = t(copy.subtitle);
  dom.statusPill.className = tone.pill;
  dom.statusPill.textContent = t(copy.pill);
  dom.statusIcon.className = tone.icon;
  dom.statusIcon.innerHTML = ICONS[copy.icon] || ICONS.idle;

  dom.statusBadge.className = tone.badge;
  dom.statusBadge.textContent = t(copy.pill);

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
    t('btn_start_activation'),
    state.id ? t('btn_updating') : t('btn_processing')
  );
  dom.activationSubmit.disabled = activationButtonDisabled;

  const showPasswordForm = currentStatus === 'waiting_password';
  dom.passwordForm.classList.toggle('hidden', !showPasswordForm);
  dom.passwordInput.disabled = state.passwordSubmitting;
  dom.passwordConfirmInput.disabled = state.passwordSubmitting;
  setButtonLoading(
    dom.passwordSubmit,
    state.passwordSubmitting,
    t('btn_save_password'),
    t('btn_saving')
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
        ? `${t('error_attempts_left')} ${attemptsLeft}.`
        : t('error_attempts_exhausted');
  } else if (currentStatus === 'failed') {
    message = t('error_activation_failed_contact');
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
  const metadata = state.metadata || {};
  const pairs = [
    [t('metadata_name'), metadata.customerName],
    [t('metadata_email'), state.email],
    [t('metadata_plan'), metadata.planType],
    [t('metadata_expires'), formatTimestamp(metadata.membershipExpiresAt)],
    [t('metadata_activation_code'), state.activationCode],
    [t('metadata_last_synced'), formatTimestamp(state.updatedAt)],
  ].filter(([, value]) => Boolean(value));

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

    const showLabelKey = button.dataset.labelShowKey;
    const hideLabelKey = button.dataset.labelHideKey;
    const showLabel = showLabelKey ? t(showLabelKey) : 'Show password';
    const hideLabel = hideLabelKey ? t(hideLabelKey) : 'Hide password';
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
      error: t('error_invalid_email'),
    });
    return;
  }

  if (!validateActivationCode(activationCode)) {
    setState({
      error: t('error_invalid_code'),
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
        t('error_activation_failed'),
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
    setState({ error: t('error_password_mismatch') });
    return;
  }

  if (!validatePassword(password)) {
    setState({
      error: t('error_password_weak'),
    });
    return;
  }

  setState({ passwordSubmitting: true, error: null });

  try {
    await activationService.submitPassword(state.id, password);
    dom.passwordInput.value = '';
    dom.passwordConfirmInput.value = '';
    dom.passwordInput.type = 'password';
    dom.passwordConfirmInput.type = 'password';
  } catch (error) {
    console.error('Password submission failed', error);
    setState({
      error:
        error?.message ||
        t('error_password_failed'),
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

// --- LANGUAGE SWITCHER ---
const langSwitcher = document.getElementById('lang-switcher');
const langBtn = document.getElementById('lang-btn');
const langMenu = document.getElementById('lang-menu');
const langText = document.getElementById('lang-text');

if (langBtn && langMenu) {
  langBtn.addEventListener('click', () => {
    langMenu.classList.toggle('hidden');
  });

  document.addEventListener('click', (event) => {
    if (langSwitcher && !langSwitcher.contains(event.target)) {
      langMenu.classList.add('hidden');
    }
  });

  langMenu.addEventListener('click', (e) => {
    e.preventDefault();
    const selectedLang = e.target.getAttribute('data-lang');
    if (selectedLang) {
      setLanguage(selectedLang);
    }
  });
}

function setLanguage(lang) {
  currentLang = lang;

  // Update all elements with data-translate-key
  document.querySelectorAll('[data-translate-key]').forEach((el) => {
    const key = el.getAttribute('data-translate-key');
    if (translations[key] && translations[key][lang] !== undefined) {
      el.innerHTML = translations[key][lang];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-translate-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-translate-placeholder');
    if (translations[key] && translations[key][lang] !== undefined) {
      el.placeholder = translations[key][lang];
    }
  });

  // Update lang text
  if (langText) {
    langText.textContent = lang.toUpperCase();
  }

  // Save to localStorage
  localStorage.setItem('language', lang);

  // Hide menu
  if (langMenu) {
    langMenu.classList.add('hidden');
  }

  // Re-render the UI with new language
  render();
}

// Initialize language
setLanguage(currentLang);

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
