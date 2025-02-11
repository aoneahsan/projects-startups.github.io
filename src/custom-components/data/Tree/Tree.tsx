import { useZTranslate } from '@/hooks/tolgee/useZTranslate';
import { IBaseProps, ITranslationProps } from '@/types/common';
import { Tree as PrimeTree } from 'primereact/tree';
import { TreeNode } from 'primereact/treenode';
import { useRef } from 'react';

export interface ITreeProps extends IBaseProps, ITranslationProps {
  value: TreeNode[];
  selectionMode?: 'single' | 'multiple' | 'checkbox';
  selectionKeys?: any;
  onSelectionChange?: (e: { value: any }) => void;
  expandedKeys?: { [key: string]: boolean };
  onToggle?: (e: { value: { [key: string]: boolean } }) => void;
  filter?: boolean;
  filterPlaceholder?: string;
}

export const Tree: React.FC<ITreeProps> = ({
  id,
  className,
  style,
  value,
  selectionMode,
  selectionKeys,
  onSelectionChange,
  expandedKeys,
  onToggle,
  filter = false,
  filterPlaceholder,
  translationKey,
}) => {
  const { t } = useZTranslate();
  const ref = useRef<PrimeTree>(null);

  const translatedPlaceholder = translationKey
    ? t(translationKey)
    : filterPlaceholder;

  return (
    <PrimeTree
      ref={ref}
      id={id}
      className={className}
      style={style}
      value={value}
      selectionMode={selectionMode}
      selectionKeys={selectionKeys}
      onSelectionChange={onSelectionChange}
      expandedKeys={expandedKeys}
      onToggle={onToggle}
      filter={filter}
      filterPlaceholder={translatedPlaceholder}
    />
  );
};
