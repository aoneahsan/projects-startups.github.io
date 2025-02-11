import { IBaseProps } from '@/types/common';
import { Badge as PrimeBadge } from 'primereact/badge';
import { useRef } from 'react';

export enum BadgeSize {
  normal = 'normal',
  large = 'large',
  xlarge = 'xlarge',
}

export enum BadgeSeverity {
  success = 'success',
  info = 'info',
  warning = 'warning',
  danger = 'danger',
}

export interface IBadgeProps extends IBaseProps {
  value?: string | number;
  severity?: BadgeSeverity;
  size?: BadgeSize;
}

export const Badge: React.FC<IBadgeProps> = ({
  id,
  className,
  style,
  value,
  severity,
  size = BadgeSize.normal,
}) => {
  const ref = useRef<PrimeBadge>(null);

  return (
    <PrimeBadge
      ref={ref}
      id={id}
      className={className}
      style={style}
      value={value}
      severity={severity}
      size={size}
    />
  );
};
