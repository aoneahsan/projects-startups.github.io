import envKeys from '@/utils/envKeys';
import { FirebaseApp, initializeApp } from 'firebase/app';

let _firebaseAppInstance: FirebaseApp | null = null;

export const getFirebaseAppInstance = (): FirebaseApp => {
  if (_firebaseAppInstance === null) {
    _firebaseAppInstance = initializeApp({
      apiKey: envKeys.firebase.apiKey,
      appId: envKeys.firebase.appId,
      authDomain: envKeys.firebase.authDomain,
      // databaseURL: envKeys.firebase.databaseURL,
      measurementId: envKeys.firebase.measurementId,
      messagingSenderId: envKeys.firebase.messagingSenderId,
      projectId: envKeys.firebase.projectId,
      storageBucket: envKeys.firebase.storageBucket,
    });
  }

  return _firebaseAppInstance;
};
