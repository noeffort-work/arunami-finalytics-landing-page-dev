# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a landing page for **Finalytics**, an AI-powered financial analytics platform. The site is built as a static website with vanilla HTML, CSS, and JavaScript, using Tailwind CSS v4 for styling. It includes:

- Main marketing landing page (`index.html`)
- Activation page for membership codes (`activation.html`)
- Bilingual support (English and Indonesian)

## Development Commands

### CSS Development
```bash
# Watch mode for development (auto-recompiles on changes)
pnpm css:dev

# Production build (minified with source map)
pnpm css:prod
```

### Package Manager
- **pnpm** is the package manager for this project (specified in `packageManager` field)
- Node version is managed by Volta (22.20.0)

## Architecture

### Styling System

The project uses **Tailwind CSS v4**:
- Source file: `style.css` (imports Tailwind and defines custom animations)
- Output file: `output.css` (generated, do not edit directly)
- Uses `@theme` directive for custom font configuration
- Custom animations: `.blinking-cursor` for typing effect

### Internationalization (i18n)

Both pages implement client-side i18n:

**Implementation pattern:**
- Translations stored in JavaScript objects with structure: `{ key: { en: "text", id: "text" } }`
- HTML elements marked with `data-translate-key` attribute
- Input placeholders marked with `data-translate-placeholder` attribute
- Language preference stored in `localStorage` with key `"language"`
- Default language is Indonesian (`id`)

**Key files:**
- `index.html`: Translations inline in `<script>` tag (lines 711-787)
- `activation.js`: Translations at top of file (lines 1-101)

### Typing Animation System

The landing page features a typing effect for dynamic text:

**Implementation (index.html:787-838):**
- `TypingAnimator` class manages typing/deleting animations
- Multiple instances for different sections (hero, features)
- Words array is language-specific and updated on language change
- Uses blinking cursor effect from CSS

### Activation Flow

The `activation.html` page implements a multi-step membership activation system:

**Architecture:**
- Firebase Firestore for production (real-time updates via `onSnapshot`)
- Mock service for development/testing (simulates async operations)
- Factory pattern: `ActivationServiceFactory.create()` selects implementation
- State-driven UI with reactive rendering

**Status flow:**
1. `idle` → User enters email and activation code
2. `waiting_validation` → Document created in Firestore
3. `validating_code` → Backend validates with Mayar gateway
4. `waiting_password` → New user must set password (hashed SHA-256 client-side)
5. `waiting_create_account` / `creating_account` → Firebase Auth user creation
6. `assigning_plan` → Membership metadata attached
7. `success` → Display membership details

**Key behaviors:**
- Real-time status updates via Firestore listener (`subscribeToActivation`)
- Password visibility toggles for UX
- Timeline visualization shows progress through steps
- Retry logic for invalid codes (max 3 attempts)

### Interactive Features

**Landing page (`index.html`):**
- Mobile menu toggle
- FAQ accordion (expand/collapse)
- Feature showcase (click to change preview image with fade transition)
- Language switcher dropdown

**Activation page (`activation.html`):**
- Password visibility toggles
- Form validation (email format, activation code format, password strength)
- Real-time status updates
- Query parameter prefill (`?email=...&code=...`)

## File Structure

```
.
├── index.html              # Main landing page
├── activation.html         # Membership activation page
├── activation.js           # Activation logic with Firebase/Mock services
├── style.css              # Tailwind source
├── output.css             # Generated CSS (do not edit)
├── package.json           # Dependencies and scripts
├── assets/                # Images, icons, logos
└── manifest.webmanifest   # PWA manifest
```

## Important Notes

### Firebase Configuration

The activation page connects to Firebase (activation.js:1143-1150):
- Project: `finalytics-62350`
- Uses Firestore collection: `activations`
- Credentials are public (web client credentials are safe to expose)

### Payment Integration

Activation codes are validated against the **Mayar payment gateway**. The backend service handles actual validation; the frontend only submits activation requests.

### CSS Workflow

Always run `pnpm css:dev` during development to watch for changes. The `style.css` file uses Tailwind v4 directives, and `output.css` is the compiled result that HTML files reference.

### Language Keys

When adding new UI text:
1. Add translation keys to the translations object
2. Use `data-translate-key` for element content
3. Use `data-translate-placeholder` for input placeholders
4. Ensure both `en` and `id` translations are provided
