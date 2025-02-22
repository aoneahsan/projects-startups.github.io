import { useAnalytics } from '@/hooks/analytics/useAnalytics';
import { useZTranslate } from '@/hooks/tolgee/useZTranslate';
import {
  Button as PrimeButton,
  ButtonProps as PrimeButtonProps,
} from 'primereact/button';
import { useRef } from 'react';

export interface ButtonProps extends PrimeButtonProps {
  translationKey?: string;
  ariaLabel?: string;
  analyticsEvent?: string;
  analyticsProperties?: Record<string, any>;
}

export const Button = ({
  translationKey,
  children,
  ariaLabel,
  analyticsEvent,
  analyticsProperties,
  onClick,
  ...props
}: ButtonProps) => {
  const { t } = useZTranslate();
  const { trackEvent } = useAnalytics();
  const ref = useRef<PrimeButton>(null);

  const label = translationKey ? t(translationKey) : children;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (analyticsEvent) {
      trackEvent({
        eventName: analyticsEvent,
        properties: analyticsProperties,
        label: typeof label === 'string' ? label : undefined,
      });
    }
    onClick?.(e);
  };

  return (
    <PrimeButton
      ref={ref}
      {...props}
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      {label}
    </PrimeButton>
  );
};
