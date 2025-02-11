import { useTolgee, useTranslate } from '@tolgee/react';

export const useZTolgeeTranslate = () => {
  const { t } = useTranslate();
  return ({
    keyName,
    defaultValue,
    noWrap = false,
  }: {
    keyName: string;
    defaultValue?: string;
    noWrap?: boolean;
    params?: Record<string, string | number>;
  }) =>
    t(keyName, defaultValue, {
      noWrap,
    });
};

export const useZTolgee = () => {
  const tolgee = useTolgee(['language']);

  return tolgee;
};
