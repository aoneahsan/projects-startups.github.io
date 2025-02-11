import { IBaseProps, Position } from '@/types/common';
import { Tooltip as PrimeTooltip } from 'primereact/tooltip';
import { useRef } from 'react';

export interface ITooltipProps extends IBaseProps {
  target?: string;
  content?: string;
  position?: Position;
  showEvent?: 'hover' | 'focus';
  hideEvent?: 'mouseleave' | 'blur';
  autoHide?: boolean;
  showDelay?: number;
  hideDelay?: number;
}

export const Tooltip: React.FC<ITooltipProps> = ({
  id,
  className,
  style,
  target,
  content,
  position = Position.right,
  showEvent = 'hover',
  hideEvent = 'mouseleave',
  autoHide = true,
  showDelay = 0,
  hideDelay = 0,
}) => {
  const ref = useRef<PrimeTooltip>(null);

  return (
    <PrimeTooltip
      ref={ref}
      id={id}
      className={className}
      style={style}
      target={target}
      content={content}
      position={position}
      showEvent={showEvent}
      hideEvent={hideEvent}
      autoHide={autoHide}
      showDelay={showDelay}
      hideDelay={hideDelay}
    />
  );
};
