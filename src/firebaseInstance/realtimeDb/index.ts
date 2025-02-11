import { Database, getDatabase } from 'firebase/database';
import { getFirebaseAppInstance } from '../app';

let _realtimeDb: Database | null = null;

export const getRealtimeDBInstance = (): Database => {
  if (_realtimeDb === null) {
    const _app = getFirebaseAppInstance();
    _realtimeDb = getDatabase(_app);
  }

  return _realtimeDb;
};
