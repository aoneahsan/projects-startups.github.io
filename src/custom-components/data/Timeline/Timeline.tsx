import { useAnalytics } from '@/hooks/analytics/useAnalytics';
import { IBaseProps } from '@/types/common';
import { Timeline as PrimeTimeline } from 'primereact/timeline';
import { useRef } from 'react';

export interface TimelineEvent {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  content?: React.ReactNode;
}

export interface TimelineProps extends IBaseProps {
  value: TimelineEvent[];
  align?: 'left' | 'right' | 'alternate';
  layout?: 'vertical' | 'horizontal';
  marker?: (item: TimelineEvent) => React.ReactNode;
  content?: (item: TimelineEvent) => React.ReactNode;
  analyticsEvent?: string;
  analyticsProperties?: Record<string, any>;
  onClick?: (e: React.MouseEvent<HTMLDivElement>, event: TimelineEvent) => void;
}

export const Timeline = ({
  value,
  align = 'left',
  layout = 'vertical',
  marker,
  content,
  analyticsEvent,
  analyticsProperties,
  onClick,
  ...props
}: TimelineProps) => {
  const { trackEvent } = useAnalytics();
  const timelineRef = useRef<PrimeTimeline>(null);

  const handleClick = (
    e: React.MouseEvent<HTMLDivElement>,
    event: TimelineEvent
  ) => {
    if (analyticsEvent) {
      trackEvent({
        eventName: `${analyticsEvent}_click`,
        properties: {
          ...analyticsProperties,
          event,
        },
      });
    }
    onClick?.(e, event);
  };

  return (
    <PrimeTimeline
      ref={timelineRef}
      value={value}
      align={align}
      layout={layout}
      marker={marker}
      content={content}
      onClick={handleClick}
      {...props}
    />
  );
};
