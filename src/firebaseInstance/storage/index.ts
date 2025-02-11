import { FirebaseStorage, getStorage } from 'firebase/storage';
import { getFirebaseAppInstance } from '../app';

let _storage: FirebaseStorage | null = null;

export const getStorageInstance = (): FirebaseStorage => {
  if (_storage === null) {
    const _app = getFirebaseAppInstance();
    _storage = getStorage(_app);
  }

  return _storage;
};
