import { IBaseProps } from '@/types/common';
import { useOverlayTrigger } from '@react-aria/overlays';
import { OverlayPanel as PrimeOverlayPanel } from 'primereact/overlaypanel';
import React from 'react';

export interface IOverlayPanelProps extends IBaseProps {
  dismissable?: boolean;
  showCloseIcon?: boolean;
  appendTo?: 'self' | HTMLElement | null | undefined;
  onShow?: () => void;
  onHide?: () => void;
}

export const OverlayPanel = React.forwardRef<
  PrimeOverlayPanel,
  IOverlayPanelProps
>(
  (
    {
      id,
      className,
      style,
      children,
      dismissable = true,
      showCloseIcon = false,
      appendTo = null,
      onShow,
      onHide,
    },
    ref
  ) => {
    const { overlayProps } = useOverlayTrigger({ isOpen: false }); // We'll manage state through ref methods

    return (
      <PrimeOverlayPanel
        ref={ref}
        id={id}
        className={className}
        style={style}
        dismissable={dismissable}
        showCloseIcon={showCloseIcon}
        appendTo={appendTo}
        onShow={onShow}
        onHide={onHide}
        {...overlayProps}
      >
        {children}
      </PrimeOverlayPanel>
    );
  }
);

OverlayPanel.displayName = 'OverlayPanel';
