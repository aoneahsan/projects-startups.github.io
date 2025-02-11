import { useTranslate } from '@tolgee/react';

export const useZTranslate = () => {
  const { t } = useTranslate();
  return { t };
}; 