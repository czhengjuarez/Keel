import { cx } from '../utils';

export interface CardOptions {
  className?: string;
}

export function cardClass({ className }: CardOptions = {}) {
  return cx('of-card', className);
}
