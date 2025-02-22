import { useAnalytics } from '@/hooks/analytics/useAnalytics';
import { IBaseProps, ITranslationProps } from '@/types/common';
import { useTranslate } from '@hooks/tolgee/useTranslate';
import { useOverlayTrigger } from '@react-aria/overlays';
import { Dialog as PrimeDialog } from 'primereact/dialog';
import React, { useRef } from 'react';

export interface IDialogProps extends IBaseProps, ITranslationProps {
  visible: boolean;
  onHide: () => void;
  header?: React.ReactNode;
  headerTranslationKey?: string;
  footer?: React.ReactNode;
  modal?: boolean;
  resizable?: boolean;
  draggable?: boolean;
  width?: string;
  maximizable?: boolean;
  analyticsEvent?: string;
  analyticsProperties?: Record<string, any>;
}

export const Dialog: React.FC<IDialogProps> = ({
  id,
  className,
  style,
  visible,
  onHide,
  header,
  headerTranslationKey,
  footer,
  children,
  translationKey,
  translationPrefix,
  modal = true,
  resizable = false,
  draggable = true,
  width = '50vw',
  maximizable = false,
  analyticsEvent,
  analyticsProperties,
}) => {
  const { t } = useTranslate();
  const { overlayProps } = useOverlayTrigger({ isOpen: visible });
  const { trackEvent } = useAnalytics();
  const dialogRef = useRef<PrimeDialog>(null);

  const translatedHeader = headerTranslationKey
    ? t(headerTranslationKey)
    : header;

  const handleHide = () => {
    if (analyticsEvent) {
      trackEvent({
        eventName: `${analyticsEvent}_close`,
        properties: analyticsProperties,
      });
    }
    onHide();
  };

  return (
    <PrimeDialog
      id={id}
      className={className}
      style={{ ...style, width }}
      visible={visible}
      onHide={handleHide}
      header={translatedHeader}
      footer={footer}
      modal={modal}
      resizable={resizable}
      draggable={draggable}
      maximizable={maximizable}
      {...overlayProps}
      ref={dialogRef}
    >
      {children}
    </PrimeDialog>
  );
};
