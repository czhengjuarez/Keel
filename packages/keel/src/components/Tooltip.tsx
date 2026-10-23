import { cx } from '../utils';

export function tooltipAnchorClass(className?: string) {
  return cx('of-tooltip-anchor', className);
}

export function tooltipClass(className?: string) {
  return cx('of-tooltip', className);
}
