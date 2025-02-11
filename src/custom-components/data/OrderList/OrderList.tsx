import { useZTranslate } from '@/hooks/tolgee/useZTranslate';
import { IBaseProps, ITranslationProps } from '@/types/common';
import { OrderList as PrimeOrderList } from 'primereact/orderlist';
import { useRef } from 'react';

export interface IOrderListProps extends IBaseProps, ITranslationProps {
  value: any[];
  onChange?: (e: { value: any[] }) => void;
  itemTemplate?: (item: any) => React.ReactNode;
  header?: React.ReactNode;
  dragdrop?: boolean;
  listStyle?: React.CSSProperties;
}

export const OrderList: React.FC<IOrderListProps> = ({
  id,
  className,
  style,
  value,
  onChange,
  itemTemplate,
  header,
  dragdrop = true,
  listStyle,
  translationKey,
}) => {
  const { t } = useZTranslate();
  const ref = useRef<PrimeOrderList>(null);

  const translatedHeader = translationKey ? t(translationKey) : header;

  return (
    <PrimeOrderList
      ref={ref}
      id={id}
      className={className}
      style={style}
      value={value}
      onChange={onChange}
      itemTemplate={itemTemplate}
      header={translatedHeader}
      dragdrop={dragdrop}
      listStyle={listStyle}
    />
  );
};
