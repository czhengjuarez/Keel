import { cx } from '../utils';
import type { KeelButtonVariant, KeelSize } from '../types';

export interface ButtonOptions {
  variant?: KeelButtonVariant;
  size?: KeelSize;
  className?: string;
}

export function buttonClass({
  variant = 'primary',
  size = 'md',
  className
}: ButtonOptions = {}) {
  return cx('of-btn', `of-btn--${variant}`, `of-btn--${size}`, className);
}
