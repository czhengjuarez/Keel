import { cx } from '../utils';

export function emptyClass(className?: string) {
  return cx('of-empty', className);
}

export function emptyTitleClass(className?: string) {
  return cx('of-empty__title', className);
}

export function emptyBodyClass(className?: string) {
  return cx('of-empty__body', className);
}
