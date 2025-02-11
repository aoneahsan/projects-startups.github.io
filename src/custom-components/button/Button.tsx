import { useZButton } from '@/hooks/aria/useZButton';
import { useZTranslate } from '@/hooks/tolgee/useZTranslate';
import { Button as PrimeButton, ButtonProps as PrimeButtonProps } from 'primereact/button';
import { useRef } from 'react';

export interface ButtonProps extends PrimeButtonProps {
  translationKey?: string;
  ariaLabel?: string;
}

export const Button = ({ 
  translationKey,
  children,
  ariaLabel,
  ...props 
}: ButtonProps) => {
  const { t } = useZTranslate();
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useZButton(props, ref);

  const label = translationKey ? t(translationKey) : children;

  return (
    <PrimeButton
      ref={ref}
      {...buttonProps}
      {...props}
      aria-label={ariaLabel}
    >
      {label}
    </PrimeButton>
  );
}; 