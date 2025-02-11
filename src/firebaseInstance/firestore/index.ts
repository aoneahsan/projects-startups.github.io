import { Firestore, initializeFirestore } from 'firebase/firestore';
import { getFirebaseAppInstance } from '../app';

let _firestore: Firestore | null = null;

export const getFirestoreInstance = (): Firestore => {
  if (_firestore === null) {
    const _app = getFirebaseAppInstance();
    _firestore = initializeFirestore(_app, {
      ignoreUndefinedProperties: false,
    });
  }

  return _firestore;
};
