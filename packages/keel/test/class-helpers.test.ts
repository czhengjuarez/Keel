import { describe, expect, it } from 'vitest';

import { badgeClass, buttonClass, fieldA11yIds, inputClass, switchId, switchRootClass } from '../src';

describe('class helpers', () => {
  it('builds button classes with defaults', () => {
    expect(buttonClass()).toBe('of-btn of-btn--primary of-btn--md');
  });

  it('builds variant classes with custom class names', () => {
    expect(badgeClass({ variant: 'green', className: 'u-inline' })).toBe('of-badge of-badge--green u-inline');
    expect(inputClass({ className: 'w-full' })).toBe('of-input w-full');
    expect(switchRootClass('mt-2')).toBe('of-switch mt-2');
  });

  it('generates deterministic field accessibility ids', () => {
    expect(fieldA11yIds('email', { hint: true })).toEqual({
      helpId: 'email-help',
      errorId: 'email-error',
      describedBy: 'email-help'
    });

    expect(fieldA11yIds('email', { error: true })).toEqual({
      helpId: 'email-help',
      errorId: 'email-error',
      describedBy: 'email-error'
    });
  });

  it('returns explicit switch id when provided', () => {
    expect(switchId('notifications')).toBe('notifications');
  });

  it('generates sequential fallback switch ids', () => {
    const first = switchId();
    const second = switchId();
    expect(first).toMatch(/^switch-\d+$/);
    expect(second).toMatch(/^switch-\d+$/);
    expect(first).not.toBe(second);
  });
});
