import { IBaseProps } from '@/types/common';
import { ProgressBar as PrimeProgressBar } from 'primereact/progressbar';
import { useRef } from 'react';

export interface IProgressBarProps extends IBaseProps {
  value: number;
  showValue?: boolean;
  unit?: string;
  mode?: 'determinate' | 'indeterminate';
}

export const ProgressBar: React.FC<IProgressBarProps> = ({
  id,
  className,
  style,
  value,
  showValue = true,
  unit = '%',
  mode = 'determinate',
}) => {
  const ref = useRef<PrimeProgressBar>(null);

  return (
    <PrimeProgressBar
      ref={ref}
      id={id}
      className={className}
      style={style}
      value={value}
      showValue={showValue}
      unit={unit}
      mode={mode}
    />
  );
};
