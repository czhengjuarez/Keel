import { cx } from '../utils';
export interface FieldClassOptions {
  invalid?: boolean;
  className?: string;
}

export interface InputClassOptions {
  className?: string;
}

export interface InputA11yIds {
  helpId: string;
  errorId: string;
  describedBy?: string;
}

export function fieldClass({ invalid, className }: FieldClassOptions = {}) {
  return cx('of-field', invalid && 'of-field--error', className);
}

export function labelClass(className?: string) {
  return cx('of-label', className);
}

export function inputClass({ className }: InputClassOptions = {}) {
  return cx('of-input', className);
}

export function hintClass(className?: string) {
  return cx('of-field__hint', className);
}

export function errorClass(className?: string) {
  return cx('of-field__error', className);
}

export function fieldA11yIds(baseId: string, opts: { hint?: boolean; error?: boolean } = {}): InputA11yIds {
  const helpId = `${baseId}-help`;
  const errorId = `${baseId}-error`;
  return {
    helpId,
    errorId,
    describedBy: opts.error ? errorId : opts.hint ? helpId : undefined
  };
}
