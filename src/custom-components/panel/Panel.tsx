import { useZTranslate } from '@/hooks/tolgee/useZTranslate';
import { Panel as PrimePanel, PanelProps as PrimePanelProps } from 'primereact/panel';
import { useRef } from 'react';

export interface PanelProps extends PrimePanelProps {
  headerTranslationKey?: string;
  ariaLabel?: string;
}

export const Panel = ({
  headerTranslationKey,
  header,
  ariaLabel,
  ...props
}: PanelProps) => {
  const { t } = useZTranslate();
  const ref = useRef<HTMLDivElement>(null);

  const title = headerTranslationKey ? t(headerTranslationKey) : header;

  return (
    <PrimePanel
      ref={ref}
      {...props}
      header={title}
      aria-label={ariaLabel}
    />
  );
}; 