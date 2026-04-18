import { cx } from '../utils';

let switchCounter = 0;

export function switchRootClass(className?: string) {
  return cx('of-switch', className);
}

export function switchInputClass(className?: string) {
  return cx('of-switch__input', className);
}

export function switchTrackClass(className?: string) {
  return cx('of-switch__track', className);
}

export function switchThumbClass(className?: string) {
  return cx('of-switch__thumb', className);
}

export function switchLabelClass(className?: string) {
  return cx('of-switch__label', className);
}

export function switchId(id?: string) {
  if (id) return id;
  switchCounter += 1;
  return `switch-${switchCounter}`;
}
