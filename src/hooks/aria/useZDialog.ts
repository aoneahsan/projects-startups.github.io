import { RefObject } from 'react';
import { AriaDialogProps, useDialog } from 'react-aria';

export const useZDialog = (props: AriaDialogProps, ref: RefObject<HTMLElement>) => {
  return useDialog(props, ref);
}; 