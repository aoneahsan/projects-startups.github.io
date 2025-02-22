import { useAnalytics } from '@/hooks/analytics/useAnalytics';
import { useZTranslate } from '@/hooks/tolgee/useZTranslate';
import { Column } from 'primereact/column';
import {
  DataTableStateEvent,
  DataTable as PrimeDataTable,
} from 'primereact/datatable';
import { useRef } from 'react';

export interface DataTableColumn {
  field: string;
  header: string;
  headerTranslationKey?: string;
  sortable?: boolean;
  filter?: boolean;
  body?: (rowData: any) => React.ReactNode;
}

export interface DataTableProps {
  value: any[];
  columns: DataTableColumn[];
  paginator?: boolean;
  rows?: number;
  sortField?: string;
  sortOrder?: 1 | -1;
  filters?: Record<string, any>;
  selection?: any;
  onSelectionChange?: (e: { value: any }) => void;
  onSort?: (e: DataTableStateEvent) => void;
  analyticsEvent?: string;
  analyticsProperties?: Record<string, any>;
}

export const DataTable = ({
  value,
  columns,
  paginator = true,
  rows = 10,
  sortField,
  sortOrder,
  filters,
  selection,
  onSelectionChange,
  onSort,
  analyticsEvent,
  analyticsProperties,
  ...props
}: DataTableProps) => {
  const { t } = useZTranslate();
  const { trackEvent } = useAnalytics();
  const tableRef = useRef<PrimeDataTable<any>>(null);

  const handleSort = (e: DataTableStateEvent) => {
    if (analyticsEvent) {
      trackEvent({
        eventName: `${analyticsEvent}_sort`,
        properties: {
          ...analyticsProperties,
          sortField: e.sortField,
          sortOrder: e.sortOrder,
        },
      });
    }
    onSort?.(e);
  };

  const handleSelectionChange = (e: { value: any }) => {
    if (analyticsEvent) {
      trackEvent({
        eventName: `${analyticsEvent}_selection`,
        properties: {
          ...analyticsProperties,
          selection: e.value,
        },
      });
    }
    onSelectionChange?.(e);
  };

  return (
    <PrimeDataTable
      ref={tableRef}
      value={value}
      paginator={paginator}
      rows={rows}
      sortField={sortField}
      sortOrder={sortOrder}
      filters={filters}
      selection={selection}
      onSelectionChange={handleSelectionChange}
      onSort={handleSort}
      {...props}
    >
      {columns.map((col) => (
        <Column
          key={col.field}
          field={col.field}
          header={
            col.headerTranslationKey ? t(col.headerTranslationKey) : col.header
          }
          sortable={col.sortable}
          filter={col.filter}
          body={col.body}
        />
      ))}
    </PrimeDataTable>
  );
};
