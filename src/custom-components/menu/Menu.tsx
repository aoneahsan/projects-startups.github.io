import { useZMenu } from '@/hooks/aria/useZMenu';
import { useZTranslate } from '@/hooks/tolgee/useZTranslate';
import { useMenuTriggerState } from '@react-stately/menu';
import { Menu as PrimeMenu, MenuProps as PrimeMenuProps } from 'primereact/menu';
import { useRef } from 'react';

export interface MenuProps extends PrimeMenuProps {
  translationPrefix?: string;
  ariaLabel?: string;
}

export const Menu = ({
  translationPrefix,
  ariaLabel,
  model = [],
  ...props
}: MenuProps) => {
  const { t } = useZTranslate();
  const ref = useRef<HTMLElement>(null);
  const state = useMenuTriggerState({});
  const { menuProps } = useZMenu({
    'aria-label': ariaLabel,
  }, ref, state);

  const translatedModel = model.map(item => ({
    ...item,
    label: translationPrefix ? t(`${translationPrefix}.${item.label}`) : item.label
  }));

  return (
    <PrimeMenu
      ref={ref}
      {...menuProps}
      {...props}
      model={translatedModel}
    />
  );
}; 