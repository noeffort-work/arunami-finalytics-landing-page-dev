import { IS_PRODUCTION } from './app.mjs'

const DEVELOPMENT_FIREBASE_CONFIG = {
  apiKey: "AIzaSyAT81L_gsi3PWwxiz1FpoiUD54aYYhrkj8",
  authDomain: "finalytics-development.firebaseapp.com",
  projectId: "finalytics-development",
  storageBucket: "finalytics-development.firebasestorage.app",
  messagingSenderId: "334725384863",
  appId: "1:334725384863:web:69d07127690da125c630aa"
}
const PRODUCTION_FIREBASE_CONFIG = {
  apiKey: 'AIzaSyB9_J1AZkSbCM9v3PeV4m33qojHX51bLwg',
  authDomain: 'finalytics-62350.firebaseapp.com',
  projectId: 'finalytics-62350',
  storageBucket: 'finalytics-62350.firebasestorage.app',
  messagingSenderId: '586305419053',
  appId: '1:586305419053:web:b94a325fd5b649340305a4',
}

export const CURRENT_FIREBASE_CONFIG = IS_PRODUCTION
  ? PRODUCTION_FIREBASE_CONFIG
  : DEVELOPMENT_FIREBASE_CONFIG

console.debug(
  'Firebase is running in ' +
  (IS_PRODUCTION ? 'PRODUCTION' : 'DEVELOPMENT') +
  ' environment.',
);
