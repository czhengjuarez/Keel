import { cx } from '../utils';

export interface TextareaClassOptions {
  className?: string;
}

export function textareaClass({ className }: TextareaClassOptions = {}) {
  return cx('of-textarea', className);
}
