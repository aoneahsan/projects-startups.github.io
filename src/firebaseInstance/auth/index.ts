import {
  Auth,
  browserLocalPersistence,
  indexedDBLocalPersistence,
  initializeAuth,
} from 'firebase/auth';
import { getFirebaseAppInstance } from '../app';

let _authInstance: Auth | null = null;

export const getAuthInstance = (): Auth => {
  if (_authInstance === null) {
    const _app = getFirebaseAppInstance();
    _authInstance = initializeAuth(_app, {
      persistence: [indexedDBLocalPersistence, browserLocalPersistence],
    });
  }

  return _authInstance;
};
