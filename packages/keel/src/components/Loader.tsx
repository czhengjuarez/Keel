import { cx } from '../utils';
import type { KeelSize } from '../types';

export interface LoaderOptions {
  size?: KeelSize;
  className?: string;
}

export function loaderClass({ size = 'md', className }: LoaderOptions = {}) {
  return cx('of-loader', `of-loader--${size}`, className);
}
