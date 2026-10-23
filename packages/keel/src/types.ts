export type KeelSize = 'sm' | 'md' | 'lg';
export type KeelButtonVariant = 'primary' | 'secondary' | 'ghost' | 'tint' | 'danger';
export type KeelBadgeVariant = 'green' | 'amber' | 'red' | 'blue' | 'purple' | 'default';

export interface BaseProps {
  className?: string;
  children?: unknown;
}

export type KeelBannerVariant = 'neutral' | 'info' | 'success' | 'warning' | 'danger';
export type KeelToastVariant = 'default' | 'success';
export type KeelTabsVariant = 'underline' | 'pills';
