import { RefObject } from 'react';
import { AriaTextFieldProps, useTextField } from 'react-aria';

export const useZTextField = (
  props: AriaTextFieldProps,
  ref: RefObject<HTMLInputElement>
) => {
  return useTextField(props, ref);
}; 