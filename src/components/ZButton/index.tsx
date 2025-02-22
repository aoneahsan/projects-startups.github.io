import { useAnalytics } from '@/hooks/analytics/useAnalytics';
import { Button } from 'primereact/button';
import { useRef } from 'react';

interface IZButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  analyticsEvent?: string;
  analyticsProperties?: Record<string, any>;
}

const ZButton: React.FC<IZButtonProps> = ({
  children,
  onClick,
  analyticsEvent,
  analyticsProperties,
}) => {
  const ref = useRef<Button>(null);
  const { trackEvent } = useAnalytics();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (analyticsEvent) {
      trackEvent({
        eventName: analyticsEvent,
        properties: analyticsProperties,
        label: typeof children === 'string' ? children : undefined,
      });
    }
    onClick?.();
  };

  return (
    <Button
      ref={ref}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default ZButton;
