import { Analytics, initializeAnalytics } from 'firebase/analytics';
import { getFirebaseAppInstance } from '../app';

let _analytics: Analytics | null = null;

export const getAnalyticsInstance = (): Analytics => {
  if (_analytics === null) {
    const _app = getFirebaseAppInstance();
    _analytics = initializeAnalytics(_app);
  }

  return _analytics;
};
