export function switchRootClass(className?: string) {
  return ['of-switch', className].filter(Boolean).join(' ');
}

export function switchInputClass(className?: string) {
  return ['of-switch__input', className].filter(Boolean).join(' ');
}

export function switchTrackClass(className?: string) {
  return ['of-switch__track', className].filter(Boolean).join(' ');
}

export function switchThumbClass(className?: string) {
  return ['of-switch__thumb', className].filter(Boolean).join(' ');
}

export function switchLabelClass(className?: string) {
  return ['of-switch__label', className].filter(Boolean).join(' ');
}

export function switchId(id?: string) {
  return id ?? `switch-${Math.random().toString(36).slice(2, 8)}`;
}
