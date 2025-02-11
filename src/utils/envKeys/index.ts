const _env = import.meta.env;

const firebase = {
  apiKey: _env.VITE_FIREBASE_API_KEY,
  authDomain: _env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: _env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: _env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: _env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: _env.VITE_FIREBASE_APP_ID,
  measurementId: _env.VITE_FIREBASE_MEASUREMENT_ID,
};

const envKeys = {
  sentryDsn: _env.VITE_SENTRY_DSN,
  tolgee: {
    apiKey: _env.VITE_APP_TOLGEE_API_KEY,
    apiUrl: _env.VITE_APP_TOLGEE_API_URL,
    baseLanguage: 'en',
  },
  firebase,
  oneSignal: {
    appId: _env.VITE_ONE_SIGNAL_APP_ID,
  },
} as const;

export default envKeys;
