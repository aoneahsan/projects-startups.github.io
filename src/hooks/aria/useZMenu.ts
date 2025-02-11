import { MenuTriggerState } from '@react-stately/menu';
import { RefObject } from 'react';
import { AriaMenuProps, useMenu } from 'react-aria';

export const useZMenu = <T extends object>(
  props: AriaMenuProps<T>, 
  ref: RefObject<HTMLElement>,
  state: MenuTriggerState
) => {
  return useMenu(props, state, ref);
}; 