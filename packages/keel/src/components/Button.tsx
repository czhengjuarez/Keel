import { cx } from '../utils';
import type { KeelButtonVariant, KeelSize } from '../types';

export interface ButtonOptions {
  variant?: KeelButtonVariant;
  size?: KeelSize;
  disabled?: boolean;
  className?: string;
}

export function buttonClass({
  variant = 'primary',
  size = 'md',
  disabled = false,
  className
}: ButtonOptions = {}) {
  return cx('of-btn', `of-btn--${variant}`, `of-btn--${size}`, disabled && 'of-btn--disabled', className);
}
