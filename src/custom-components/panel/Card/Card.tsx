import { IBaseProps, ITranslationProps } from '@/types/common';
import { Card as PrimeCard } from 'primereact/card';
import { useZTranslate } from '@/hooks/tolgee/useZTranslate';
import { useRef } from 'react';

export interface ICardProps extends IBaseProps, ITranslationProps {
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export const Card: React.FC<ICardProps> = ({
  id,
  className,
  style,
  title,
  subTitle,
  header,
  footer,
  children,
  translationKey,
}) => {
  const { t } = useZTranslate();
  const ref = useRef<PrimeCard>(null);

  const translatedTitle = translationKey ? t(`${translationKey}.title`) : title;
  const translatedSubTitle = translationKey
    ? t(`${translationKey}.subTitle`)
    : subTitle;

  return (
    <PrimeCard
      ref={ref}
      id={id}
      className={className}
      style={style}
      title={translatedTitle}
      subTitle={translatedSubTitle}
      header={header}
      footer={footer}
    >
      {children}
    </PrimeCard>
  );
};
