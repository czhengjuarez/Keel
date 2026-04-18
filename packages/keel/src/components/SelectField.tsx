import { cx } from '../utils';

export interface SelectClassOptions {
  className?: string;
}

export function selectClass({ className }: SelectClassOptions = {}) {
  return cx('of-select', className);
}
