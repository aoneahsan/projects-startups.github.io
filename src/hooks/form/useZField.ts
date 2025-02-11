import {
  useController,
  UseControllerProps,
  UseControllerReturn,
} from 'react-hook-form';

export const useZField = <T extends Record<string, any>>(
  props: UseControllerProps<T>
): UseControllerReturn<T> => {
  return useController(props);
};
