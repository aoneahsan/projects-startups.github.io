import { useCallback } from 'react';
import { useFirebaseAnalytics } from './providers/useFirebaseAnalytics';
import { useGoogleAnalytics } from './providers/useGoogleAnalytics';
import { useMicrosoftClarity } from './providers/useMicrosoftClarity';
import { useMixpanel } from './providers/useMixpanel';
import { usePosthog } from './providers/usePosthog';

export interface AnalyticsEvent {
  eventName: string;
  properties?: Record<string, any>;
  category?: string;
  label?: string;
  value?: number;
}

export const useAnalytics = () => {
  const firebaseAnalytics = useFirebaseAnalytics();
  const mixpanel = useMixpanel();
  const googleAnalytics = useGoogleAnalytics();
  const posthog = usePosthog();
  const clarity = useMicrosoftClarity();

  const trackEvent = useCallback(
    (event: AnalyticsEvent) => {
      // Track in all providers
      firebaseAnalytics.trackEvent(event);
      mixpanel.trackEvent(event);
      googleAnalytics.trackEvent(event);
      posthog.trackEvent(event);
      clarity.trackEvent(event);
    },
    [firebaseAnalytics, mixpanel, googleAnalytics, posthog, clarity]
  );

  const trackPageView = useCallback(
    (pageName: string, properties?: Record<string, any>) => {
      firebaseAnalytics.trackPageView(pageName, properties);
      mixpanel.trackPageView(pageName, properties);
      googleAnalytics.trackPageView(pageName, properties);
      posthog.trackPageView(pageName, properties);
      clarity.trackPageView(pageName, properties);
    },
    [firebaseAnalytics, mixpanel, googleAnalytics, posthog, clarity]
  );

  return {
    trackEvent,
    trackPageView,
  };
};
