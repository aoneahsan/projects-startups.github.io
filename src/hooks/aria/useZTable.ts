import { TableState } from '@react-stately/table';
import { RefObject } from 'react';
import { AriaTableProps, useTable } from 'react-aria';

export const useZTable = <T extends object>(
  props: AriaTableProps<T>,
  state: TableState<T>,
  ref: RefObject<HTMLTableElement>
) => {
  return useTable(props, state, ref);
}; 