import { useAnalytics } from '@/hooks/analytics/useAnalytics';
import { useZTranslate } from '@/hooks/tolgee/useZTranslate';
import { IBaseProps, ITranslationProps } from '@/types/common';
import { Panel as PrimePanel } from 'primereact/panel';
import { useRef } from 'react';

export interface IPanelProps extends IBaseProps, ITranslationProps {
  header?: React.ReactNode;
  headerTranslationKey?: string;
  toggleable?: boolean;
  collapsed?: boolean;
  analyticsEvent?: string;
  analyticsProperties?: Record<string, any>;
}

export const Panel: React.FC<IPanelProps> = ({
  id,
  className,
  style,
  header,
  headerTranslationKey,
  toggleable = false,
  collapsed = false,
  children,
  translationKey,
  analyticsEvent,
  analyticsProperties,
}) => {
  const { t } = useZTranslate();
  const { trackEvent } = useAnalytics();
  const ref = useRef<PrimePanel>(null);

  const translatedHeader = headerTranslationKey
    ? t(headerTranslationKey)
    : header;

  const handleToggle = (e: { value: boolean }) => {
    if (analyticsEvent) {
      trackEvent({
        eventName: `${analyticsEvent}_${e.value ? 'expand' : 'collapse'}`,
        properties: analyticsProperties,
      });
    }
  };

  return (
    <PrimePanel
      ref={ref}
      id={id}
      className={className}
      style={style}
      header={translatedHeader}
      toggleable={toggleable}
      collapsed={collapsed}
      onToggle={handleToggle}
    >
      {children}
    </PrimePanel>
  );
};
