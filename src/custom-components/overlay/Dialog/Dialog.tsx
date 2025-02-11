import { IBaseProps, ITranslationProps } from '@/types/common';
import { useTranslate } from '@hooks/tolgee/useTranslate';
import { useOverlayTrigger } from '@react-aria/overlays';
import { Dialog as PrimeDialog } from 'primereact/dialog';
import React from 'react';

export interface IDialogProps extends IBaseProps, ITranslationProps {
  visible: boolean;
  onHide: () => void;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  modal?: boolean;
  resizable?: boolean;
  draggable?: boolean;
  width?: string;
  maximizable?: boolean;
}

export const Dialog: React.FC<IDialogProps> = ({
  id,
  className,
  style,
  visible,
  onHide,
  header,
  footer,
  children,
  translationKey,
  translationPrefix,
  modal = true,
  resizable = false,
  draggable = true,
  width = '50vw',
  maximizable = false,
}) => {
  const { t } = useTranslate();
  const { overlayProps } = useOverlayTrigger({ isOpen: visible });

  const translatedHeader = translationKey ? t(translationKey) : header;

  return (
    <PrimeDialog
      id={id}
      className={className}
      style={{ ...style, width }}
      visible={visible}
      onHide={onHide}
      header={translatedHeader}
      footer={footer}
      modal={modal}
      resizable={resizable}
      draggable={draggable}
      maximizable={maximizable}
      {...overlayProps}
    >
      {children}
    </PrimeDialog>
  );
};
