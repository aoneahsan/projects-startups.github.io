import { useZTranslate } from '@/hooks/tolgee/useZTranslate';
import {
  Toast as PrimeToast,
  ToastProps as PrimeToastProps,
} from 'primereact/toast';
import { useRef } from 'react';

export interface ToastProps extends PrimeToastProps {
  summaryTranslationKey?: string;
  detailTranslationKey?: string;
}

export const Toast = ({
  summaryTranslationKey,
  detailTranslationKey,
  ...props
}: ToastProps) => {
  const { t } = useZTranslate();
  const toastRef = useRef<PrimeToast>(null);

  const show = (
    severity: 'success' | 'info' | 'warn' | 'error',
    summary: string,
    detail?: string
  ) => {
    const translatedSummary = summaryTranslationKey
      ? t(summaryTranslationKey)
      : summary;
    const translatedDetail = detailTranslationKey
      ? t(detailTranslationKey)
      : detail;

    toastRef.current?.show({
      severity,
      summary: translatedSummary,
      detail: translatedDetail,
    });
  };

  return (
    <PrimeToast
      ref={toastRef}
      {...props}
    />
  );
};
