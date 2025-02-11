import { useZTranslate } from '@/hooks/tolgee/useZTranslate';
import { IBaseProps, ITranslationProps, Position } from '@/types/common';
import { useOverlayTrigger } from '@react-aria/overlays';
import { Sidebar as PrimeSidebar } from 'primereact/sidebar';
import { useRef } from 'react';

export interface ISidebarProps extends IBaseProps, ITranslationProps {
  visible: boolean;
  onHide: () => void;
  position?: Position;
  fullScreen?: boolean;
  blockScroll?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export const Sidebar: React.FC<ISidebarProps> = ({
  id,
  className,
  style,
  visible,
  onHide,
  position = Position.right,
  fullScreen = false,
  blockScroll = true,
  header,
  footer,
  children,
  translationKey,
  translationPrefix,
}) => {
  const { t } = useZTranslate();
  const ref = useRef<PrimeSidebar>(null);
  const { overlayProps } = useOverlayTrigger({ isOpen: visible });

  const translatedHeader = translationKey ? t(translationKey) : header;

  return (
    <PrimeSidebar
      ref={ref}
      id={id}
      className={className}
      style={style}
      visible={visible}
      position={position}
      fullScreen={fullScreen}
      blockScroll={blockScroll}
      onHide={onHide}
      header={translatedHeader}
      footer={footer}
      {...overlayProps}
    >
      {children}
    </PrimeSidebar>
  );
};
