import { cx } from '../utils';

export function popoverClass(className?: string) {
  return cx('of-popover', className);
}

export function popoverTitleClass(className?: string) {
  return cx('of-popover__title', className);
}
