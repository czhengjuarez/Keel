import { cx } from '../utils';

export function radioClass(className?: string) {
  return cx('of-radio', className);
}

export function radioInputClass(className?: string) {
  return cx('of-radio__input', className);
}

export function radioLabelClass(className?: string) {
  return cx('of-radio__label', className);
}
