import { useAnalytics } from '@/hooks/analytics/useAnalytics';
import { useEffect } from 'react';

interface WithAnalyticsProps {
  componentName: string;
  events?: Record<string, (...args: any[]) => void>;
}

export const withAnalytics = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  { componentName, events = {} }: WithAnalyticsProps
) => {
  return function WithAnalyticsWrapper(props: P) {
    const analytics = useAnalytics();

    useEffect(() => {
      analytics.trackPageView(`Component_${componentName}_Mounted`);
      return () => {
        analytics.trackPageView(`Component_${componentName}_Unmounted`);
      };
    }, []);

    const enhancedEvents = Object.entries(events).reduce(
      (acc, [eventName, handler]) => ({
        ...acc,
        [eventName]: (...args: any[]) => {
          analytics.trackEvent({
            eventName: `${componentName}_${eventName}`,
            properties: { args },
          });
          handler(...args);
        },
      }),
      {}
    );

    return (
      <WrappedComponent
        {...props}
        {...enhancedEvents}
      />
    );
  };
};
