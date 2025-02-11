import { useZTranslate } from '@/hooks/tolgee/useZTranslate';
import { IBaseProps, ITranslationProps } from '@/types/common';
import { TabView as PrimeTabView, TabPanel } from 'primereact/tabview';
import { useRef } from 'react';

export interface ITabPanelProps extends IBaseProps, ITranslationProps {
  header: string;
  disabled?: boolean;
}

export interface ITabViewProps extends IBaseProps {
  activeIndex?: number;
  onTabChange?: (e: { index: number }) => void;
  scrollable?: boolean;
}

export const TabPanel: React.FC<ITabPanelProps> = ({
  id,
  className,
  style,
  header,
  disabled,
  children,
  translationKey,
}) => {
  const { t } = useZTranslate();
  const translatedHeader = translationKey ? t(translationKey) : header;

  return (
    <TabPanel
      id={id}
      className={className}
      style={style}
      header={translatedHeader}
      disabled={disabled}
    >
      {children}
    </TabPanel>
  );
};

export const TabView: React.FC<ITabViewProps> = ({
  id,
  className,
  style,
  activeIndex,
  onTabChange,
  scrollable = false,
  children,
}) => {
  const ref = useRef<PrimeTabView>(null);

  return (
    <PrimeTabView
      ref={ref}
      id={id}
      className={className}
      style={style}
      activeIndex={activeIndex}
      onTabChange={onTabChange}
      scrollable={scrollable}
    >
      {children}
    </PrimeTabView>
  );
};
