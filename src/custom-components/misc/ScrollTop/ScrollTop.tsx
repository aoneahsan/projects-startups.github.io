import { IBaseProps } from '@/types/common';
import { ScrollTop as PrimeScrollTop } from 'primereact/scrolltop';
import { useRef } from 'react';

export interface IScrollTopProps extends IBaseProps {
  threshold?: number;
  behavior?: 'smooth' | 'auto';
  target?: 'window' | 'parent';
}

export const ScrollTop: React.FC<IScrollTopProps> = ({
  id,
  className,
  style,
  threshold = 400,
  behavior = 'smooth',
  target = 'window',
}) => {
  const ref = useRef<PrimeScrollTop>(null);

  return (
    <PrimeScrollTop
      ref={ref}
      id={id}
      className={className}
      style={style}
      threshold={threshold}
      behavior={behavior}
      target={target}
    />
  );
};
