import { cx } from '../utils';
import type { KeelBannerVariant } from '../types';

export interface BannerOptions {
  variant?: KeelBannerVariant;
  className?: string;
}

export function bannerClass({ variant = 'neutral', className }: BannerOptions = {}) {
  return cx('of-banner', `of-banner--${variant}`, className);
}
