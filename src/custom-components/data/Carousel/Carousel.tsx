import { IBaseProps } from '@/types/common';
import { Carousel as PrimeCarousel } from 'primereact/carousel';
import { useRef } from 'react';

export interface ICarouselProps extends IBaseProps {
  value: any[];
  numVisible?: number;
  numScroll?: number;
  responsiveOptions?: any[];
  orientation?: 'horizontal' | 'vertical';
  verticalViewPortHeight?: string;
  itemTemplate?: (item: any) => React.ReactNode;
  circular?: boolean;
  autoplayInterval?: number;
}

export const Carousel: React.FC<ICarouselProps> = ({
  id,
  className,
  style,
  value,
  numVisible = 1,
  numScroll = 1,
  responsiveOptions,
  orientation = 'horizontal',
  verticalViewPortHeight = '300px',
  itemTemplate,
  circular = false,
  autoplayInterval = 0,
}) => {
  const ref = useRef<PrimeCarousel>(null);

  return (
    <PrimeCarousel
      ref={ref}
      id={id}
      className={className}
      style={style}
      value={value}
      numVisible={numVisible}
      numScroll={numScroll}
      responsiveOptions={responsiveOptions}
      orientation={orientation}
      verticalViewPortHeight={verticalViewPortHeight}
      itemTemplate={itemTemplate}
      circular={circular}
      autoplayInterval={autoplayInterval}
    />
  );
};
