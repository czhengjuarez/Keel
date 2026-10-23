import { cx } from '../utils';

export function checkClass(className?: string) {
  return cx('of-check', className);
}

export function checkInputClass(className?: string) {
  return cx('of-check__input', className);
}

export function checkLabelClass(className?: string) {
  return cx('of-check__label', className);
}
