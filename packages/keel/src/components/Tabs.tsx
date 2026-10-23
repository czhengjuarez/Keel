import { cx } from '../utils';
import type { KeelTabsVariant } from '../types';

export interface TabsOptions {
  variant?: KeelTabsVariant;
  className?: string;
}

export interface TabOptions {
  active?: boolean;
  className?: string;
}

export function tabsClass({ variant = 'underline', className }: TabsOptions = {}) {
  return cx('of-tabs', `of-tabs--${variant}`, className);
}

export function tabClass({ active = false, className }: TabOptions = {}) {
  return cx('of-tab', active && 'of-tab--active', className);
}

export function tabPanelsClass(className?: string) {
  return cx('of-tab-panels', className);
}

export function tabPanelClass({ active = false, className }: TabOptions = {}) {
  return cx('of-tab-panel', active && 'of-tab-panel--active', className);
}
