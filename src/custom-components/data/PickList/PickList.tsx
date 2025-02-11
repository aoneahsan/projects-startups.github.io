import { useZTranslate } from '@/hooks/tolgee/useZTranslate';
import { IBaseProps, ITranslationProps } from '@/types/common';
import { PickList as PrimePickList } from 'primereact/picklist';
import { useRef } from 'react';

export interface IPickListProps extends IBaseProps, ITranslationProps {
  source: any[];
  target: any[];
  onChange?: (e: { source: any[]; target: any[] }) => void;
  itemTemplate?: (item: any) => React.ReactNode;
  sourceHeader?: React.ReactNode;
  targetHeader?: React.ReactNode;
  showSourceControls?: boolean;
  showTargetControls?: boolean;
}

export const PickList: React.FC<IPickListProps> = ({
  id,
  className,
  style,
  source,
  target,
  onChange,
  itemTemplate,
  sourceHeader,
  targetHeader,
  showSourceControls = true,
  showTargetControls = true,
  translationKey,
}) => {
  const { t } = useZTranslate();
  const ref = useRef<PrimePickList>(null);

  const translatedSourceHeader = translationKey
    ? t(`${translationKey}.source`)
    : sourceHeader;
  const translatedTargetHeader = translationKey
    ? t(`${translationKey}.target`)
    : targetHeader;

  return (
    <PrimePickList
      ref={ref}
      id={id}
      className={className}
      style={style}
      source={source}
      target={target}
      onChange={onChange}
      itemTemplate={itemTemplate}
      sourceHeader={translatedSourceHeader}
      targetHeader={translatedTargetHeader}
      showSourceControls={showSourceControls}
      showTargetControls={showTargetControls}
    />
  );
};
