import { cx } from '../utils';
import type { KeelToastVariant } from '../types';

export interface ToastOptions {
  variant?: KeelToastVariant;
  className?: string;
}

export function toastClass({ variant = 'default', className }: ToastOptions = {}) {
  return cx('of-toast', `of-toast--${variant}`, className);
}

export function toastTitleClass(className?: string) {
  return cx('of-toast__title', className);
}

export function toastBodyClass(className?: string) {
  return cx('of-toast__body', className);
}
