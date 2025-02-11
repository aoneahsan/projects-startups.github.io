import { useZDialog } from '@/hooks/aria/useZDialog';
import { useZTranslate } from '@/hooks/tolgee/useZTranslate';
import { Dialog as PrimeDialog, DialogProps as PrimeDialogProps } from 'primereact/dialog';
import { useRef } from 'react';

export interface DialogProps extends PrimeDialogProps {
  titleTranslationKey?: string;
  ariaLabel?: string;
}

export const Dialog = ({
  titleTranslationKey,
  header,
  ariaLabel,
  ...props
}: DialogProps) => {
  const { t } = useZTranslate();
  const ref = useRef<HTMLElement>(null);
  const { dialogProps } = useZDialog({
    'aria-label': ariaLabel,
  }, ref);

  const title = titleTranslationKey ? t(titleTranslationKey) : header;

  return (
    <PrimeDialog
      ref={ref}
      {...dialogProps}
      {...props}
      header={title}
    />
  );
}; 