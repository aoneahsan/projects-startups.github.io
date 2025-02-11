import { IBaseProps, ITranslationProps } from '@/types/common';
import { FileUpload as PrimeFileUpload } from 'primereact/fileupload';
import { useZTranslate } from '@/hooks/tolgee/useZTranslate';
import { useRef } from 'react';

export interface IFileUploadProps extends IBaseProps, ITranslationProps {
  mode?: 'basic' | 'advanced';
  multiple?: boolean;
  accept?: string;
  maxFileSize?: number;
  onUpload?: (e: { files: File[] }) => void;
  onSelect?: (e: { files: File[] }) => void;
  onError?: (e: { error: string }) => void;
  uploadLabel?: string;
  cancelLabel?: string;
}

export const FileUpload: React.FC<IFileUploadProps> = ({
  id,
  className,
  style,
  mode = 'advanced',
  multiple = true,
  accept,
  maxFileSize,
  onUpload,
  onSelect,
  onError,
  uploadLabel,
  cancelLabel,
  translationKey,
}) => {
  const { t } = useZTranslate();
  const ref = useRef<PrimeFileUpload>(null);

  const translatedUploadLabel = translationKey
    ? t(`${translationKey}.upload`)
    : uploadLabel;
  const translatedCancelLabel = translationKey
    ? t(`${translationKey}.cancel`)
    : cancelLabel;

  return (
    <PrimeFileUpload
      ref={ref}
      id={id}
      className={className}
      style={style}
      mode={mode}
      multiple={multiple}
      accept={accept}
      maxFileSize={maxFileSize}
      onUpload={onUpload}
      onSelect={onSelect}
      onError={onError}
      uploadLabel={translatedUploadLabel}
      cancelLabel={translatedCancelLabel}
    />
  );
};
