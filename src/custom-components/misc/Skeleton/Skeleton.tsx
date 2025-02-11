import { IBaseProps } from '@/types/common';
import { Skeleton as PrimeSkeleton } from 'primereact/skeleton';
import { useRef } from 'react';

export interface ISkeletonProps extends IBaseProps {
  shape?: 'rectangle' | 'circle';
  size?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  animation?: 'wave' | 'none';
}

export const Skeleton: React.FC<ISkeletonProps> = ({
  id,
  className,
  style,
  shape = 'rectangle',
  size,
  width,
  height,
  borderRadius,
  animation = 'wave',
}) => {
  const ref = useRef<PrimeSkeleton>(null);

  return (
    <PrimeSkeleton
      ref={ref}
      id={id}
      className={className}
      style={style}
      shape={shape}
      size={size}
      width={width}
      height={height}
      borderRadius={borderRadius}
      animation={animation}
    />
  );
};
