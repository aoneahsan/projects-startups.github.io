import { RefObject } from 'react';
import { AriaButtonProps, useButton } from 'react-aria';

export const useZButton = (props: AriaButtonProps, ref: RefObject<HTMLButtonElement>) => {
  return useButton(props, ref);
}; 