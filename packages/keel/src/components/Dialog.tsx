import { cx } from '../utils';

export function dialogClass(className?: string) {
  return cx('of-dialog', className);
}

export function dialogTitleClass(className?: string) {
  return cx('of-dialog__title', className);
}

export function dialogDescClass(className?: string) {
  return cx('of-dialog__desc', className);
}

export function dialogActionsClass(className?: string) {
  return cx('of-dialog__actions', className);
}
