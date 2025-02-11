import { IBaseProps, ITranslationProps } from '@/types/common';
import {
  Accordion as PrimeAccordion,
  AccordionTab,
} from 'primereact/accordion';
import { useZTranslate } from '@/hooks/tolgee/useZTranslate';
import { useRef } from 'react';

export interface IAccordionTabProps extends IBaseProps, ITranslationProps {
  header: string;
  disabled?: boolean;
}

export interface IAccordionProps extends IBaseProps {
  activeIndex?: number | number[];
  multiple?: boolean;
  onTabChange?: (e: { index: number | number[] }) => void;
}

export const AccordionTab: React.FC<IAccordionTabProps> = ({
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
    <AccordionTab
      id={id}
      className={className}
      style={style}
      header={translatedHeader}
      disabled={disabled}
    >
      {children}
    </AccordionTab>
  );
};

export const Accordion: React.FC<IAccordionProps> = ({
  id,
  className,
  style,
  activeIndex,
  multiple = false,
  onTabChange,
  children,
}) => {
  const ref = useRef<PrimeAccordion>(null);

  return (
    <PrimeAccordion
      ref={ref}
      id={id}
      className={className}
      style={style}
      activeIndex={activeIndex}
      multiple={multiple}
      onTabChange={onTabChange}
    >
      {children}
    </PrimeAccordion>
  );
};
