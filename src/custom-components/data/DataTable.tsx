import { useZTable } from '@/hooks/aria/useZTable';
import { useZTranslate } from '@/hooks/tolgee/useZTranslate';
import { useTableState } from '@react-stately/table';
import {
  DataTableValue,
  DataTable as PrimeDataTable,
  DataTableProps as PrimeDataTableProps,
} from 'primereact/datatable';
import { useRef } from 'react';

export interface CustomDataTableProps<T extends DataTableValue>
  extends Omit<PrimeDataTableProps<T>, 'ref'> {
  translationPrefix?: string;
  ariaLabel?: string;
}

export const DataTable = <T extends DataTableValue>({
  translationPrefix,
  ariaLabel,
  ...props
}: CustomDataTableProps<T>) => {
  const { t } = useZTranslate();
  const ref = useRef<HTMLDivElement>(null);
  const state = useTableState({
    ...props,
    'aria-label': ariaLabel,
  });

  const { gridProps } = useZTable(
    {
      'aria-label': ariaLabel,
    },
    state,
    ref
  );

  return (
    <PrimeDataTable
      ref={ref}
      {...gridProps}
      {...props}
    />
  );
};
