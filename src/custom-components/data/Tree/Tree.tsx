import { useAnalytics } from '@/hooks/analytics/useAnalytics';
import { useZTranslate } from '@/hooks/tolgee/useZTranslate';
import { Tree as PrimeTree } from 'primereact/tree';
import { useRef } from 'react';

export interface TreeNode {
  key: string;
  label: string;
  data?: any;
  icon?: string;
  children?: TreeNode[];
  leaf?: boolean;
  translationKey?: string;
}

export interface TreeProps {
  value: TreeNode[];
  selectionMode?: 'single' | 'multiple' | 'checkbox';
  selection?: any;
  onSelectionChange?: (e: { value: any }) => void;
  expandedKeys?: { [key: string]: boolean };
  onToggle?: (e: { value: { [key: string]: boolean } }) => void;
  filter?: boolean;
  analyticsEvent?: string;
  analyticsProperties?: Record<string, any>;
}

export const Tree = ({
  value,
  selectionMode,
  selection,
  onSelectionChange,
  expandedKeys,
  onToggle,
  filter = false,
  analyticsEvent,
  analyticsProperties,
  ...props
}: TreeProps) => {
  const { t } = useZTranslate();
  const { trackEvent } = useAnalytics();
  const treeRef = useRef<PrimeTree>(null);

  const translateNodes = (nodes: TreeNode[]): TreeNode[] => {
    return nodes.map((node) => ({
      ...node,
      label: node.translationKey ? t(node.translationKey) : node.label,
      children: node.children ? translateNodes(node.children) : undefined,
    }));
  };

  const translatedValue = translateNodes(value);

  const handleSelectionChange = (e: { value: any }) => {
    if (analyticsEvent) {
      trackEvent({
        eventName: `${analyticsEvent}_selection`,
        properties: {
          ...analyticsProperties,
          selection: e.value,
        },
      });
    }
    onSelectionChange?.(e);
  };

  const handleToggle = (e: { value: { [key: string]: boolean } }) => {
    if (analyticsEvent) {
      trackEvent({
        eventName: `${analyticsEvent}_toggle`,
        properties: {
          ...analyticsProperties,
          expandedKeys: e.value,
        },
      });
    }
    onToggle?.(e);
  };

  return (
    <PrimeTree
      ref={treeRef}
      value={translatedValue}
      selectionMode={selectionMode}
      selection={selection}
      onSelectionChange={handleSelectionChange}
      expandedKeys={expandedKeys}
      onToggle={handleToggle}
      filter={filter}
      {...props}
    />
  );
};
