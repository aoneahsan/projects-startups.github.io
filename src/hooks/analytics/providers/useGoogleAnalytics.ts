import { useCallback } from 'react';
import { AnalyticsEvent } from '../useAnalytics';

export const useGoogleAnalytics = () => {
  const trackEvent = useCallback((event: AnalyticsEvent) => {
    // Implement Google Analytics tracking logic here
    console.log('Google Analytics event:', event);
  }, []);

  const trackPageView = useCallback(
    (pageName: string, properties?: Record<string, any>) => {
      // Implement Google Analytics page view logic here
      console.log('Google Analytics pageview:', pageName, properties);
    },
    []
  );

  return { trackEvent, trackPageView };
};
