import { useAnalytics } from '@/hooks/analytics/useAnalytics';
import { Toast as PrimeToast } from 'primereact/toast';
import { useRef } from 'react';

export interface ToastProps {
  position?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';
  analyticsEvent?: string;
  analyticsProperties?: Record<string, any>;
}

export const Toast = ({
  position = 'top-right',
  analyticsEvent,
  analyticsProperties,
  ...props
}: ToastProps) => {
  const toastRef = useRef<PrimeToast>(null);
  const { trackEvent } = useAnalytics();

  const show = (
    severity: 'success' | 'info' | 'warn' | 'error',
    summary: string,
    detail?: string
  ) => {
    if (analyticsEvent) {
      trackEvent({
        eventName: `${analyticsEvent}_${severity}`,
        properties: {
          ...analyticsProperties,
          summary,
          detail,
        },
      });
    }
    toastRef.current?.show({ severity, summary, detail });
  };

  return (
    <PrimeToast
      ref={toastRef}
      position={position}
      {...props}
    />
  );
};
