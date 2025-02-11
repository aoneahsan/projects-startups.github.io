import { TableStateProps, useTableState } from '@react-stately/table';

export const useZTableState = <T extends object>(props: TableStateProps<T>) => {
  return useTableState(props);
};
