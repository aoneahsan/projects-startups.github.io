// Base Props that most components will extend
export interface IBaseProps {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

// Common enums
export enum Severity {
  success = 'success',
  info = 'info',
  warn = 'warn',
  error = 'error',
}

export enum Size {
  small = 'small',
  normal = 'normal',
  large = 'large',
}

export enum Position {
  top = 'top',
  right = 'right',
  bottom = 'bottom',
  left = 'left',
  topLeft = 'top-left', // Keeping hyphen for CSS-related values
  topRight = 'top-right',
  bottomLeft = 'bottom-left',
  bottomRight = 'bottom-right',
}

// Translation related props
export interface ITranslationProps {
  translationKey?: string;
  translationPrefix?: string;
}

// Common event handlers
export interface IBaseEventProps {
  onFocus?: (event: React.FocusEvent) => void;
  onBlur?: (event: React.FocusEvent) => void;
  onClick?: (event: React.MouseEvent) => void;
}
