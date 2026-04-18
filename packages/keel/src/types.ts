export type KeelSize = 'sm' | 'md' | 'lg';
export type KeelButtonVariant = 'primary' | 'secondary' | 'ghost' | 'tint' | 'danger';
export type KeelBadgeVariant = 'green' | 'amber' | 'red' | 'blue' | 'purple' | 'default';

export interface BaseProps {
  className?: string;
  children?: unknown;
}
