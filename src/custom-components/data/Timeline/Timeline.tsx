import { IBaseProps } from '@/types/common';
import { Timeline as PrimeTimeline } from 'primereact/timeline';
import { useRef } from 'react';

export interface ITimelineEvent {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  content?: React.ReactNode;
}

export interface ITimelineProps extends IBaseProps {
  value: ITimelineEvent[];
  align?: 'left' | 'right' | 'alternate';
  layout?: 'vertical' | 'horizontal';
  marker?: (item: ITimelineEvent) => React.ReactNode;
  content?: (item: ITimelineEvent) => React.ReactNode;
}

export const Timeline: React.FC<ITimelineProps> = ({
  id,
  className,
  style,
  value,
  align = 'left',
  layout = 'vertical',
  marker,
  content,
}) => {
  const ref = useRef<PrimeTimeline>(null);

  return (
    <PrimeTimeline
      ref={ref}
      id={id}
      className={className}
      style={style}
      value={value}
      align={align}
      layout={layout}
      marker={marker}
      content={content}
    />
  );
};
