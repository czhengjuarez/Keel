import { cx } from '../utils';
import type { KeelBadgeVariant } from '../types';

export interface BadgeOptions {
  variant?: KeelBadgeVariant;
  className?: string;
}

export function badgeClass({ variant = 'default', className }: BadgeOptions = {}) {
  return cx('of-badge', `of-badge--${variant}`, className);
}
