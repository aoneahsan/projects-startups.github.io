import { IBaseProps, ITranslationProps } from '@/types/common';
import { Panel as PrimePanel } from 'primereact/panel';
import { useZTranslate } from '@/hooks/tolgee/useZTranslate';
import { useRef } from 'react';

export interface IPanelProps extends IBaseProps, ITranslationProps {
  header?: React.ReactNode;
  toggleable?: boolean;
  collapsed?: boolean;
  onToggle?: (e: { value: boolean }) => void;
}

export const Panel: React.FC<IPanelProps> = ({
  id,
  className,
  style,
  header,
  toggleable = false,
  collapsed = false,
  onToggle,
  children,
  translationKey,
}) => {
  const { t } = useZTranslate();
  const ref = useRef<PrimePanel>(null);

  const translatedHeader = translationKey ? t(translationKey) : header;

  return (
    <PrimePanel
      ref={ref}
      id={id}
      className={className}
      style={style}
      header={translatedHeader}
      toggleable={toggleable}
      collapsed={collapsed}
      onToggle={onToggle}
    >
      {children}
    </PrimePanel>
  );
};
