window.FIREBASE_CONFIGS = window.FIREBASE_CONFIGS || {}
window.FIREBASE_CONFIGS['dev'] = {
  apiKey: "AIzaSyAT81L_gsi3PWwxiz1FpoiUD54aYYhrkj8",
  authDomain: "finalytics-development.firebaseapp.com",
  projectId: "finalytics-development",
  storageBucket: "finalytics-development.firebasestorage.app",
  messagingSenderId: "334725384863",
  appId: "1:334725384863:web:69d07127690da125c630aa"
};
window.FIREBASE_CONFIGS['prod'] = {
    apiKey: 'AIzaSyB9_J1AZkSbCM9v3PeV4m33qojHX51bLwg',
    authDomain: 'finalytics-62350.firebaseapp.com',
    projectId: 'finalytics-62350',
    storageBucket: 'finalytics-62350.firebasestorage.app',
    messagingSenderId: '586305419053',
    appId: '1:586305419053:web:b94a325fd5b649340305a4',
};

const knownProductionHostnames = ['finalytics.id', 'www.finalytics.id', 'app.finalytics.id']

if (knownProductionHostnames.includes(window.location.hostname)) {
  console.debug("Firebase is running in PRODUCTION environment.");
    window.CURRENT_FIREBASE_CONFIG = window.FIREBASE_CONFIGS['prod']
} else {
    console.debug("Firebase is running in DEVELOPMENT environment.");
    window.CURRENT_FIREBASE_CONFIG = window.FIREBASE_CONFIGS['dev']
}
