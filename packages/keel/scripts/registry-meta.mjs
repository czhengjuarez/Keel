// Editorial metadata for the component registry.
//
// Facts that live in code (variant values, defaults, the set of valid CSS classes)
// are derived by registry.mjs from types.ts, the class helpers, and styles.css.
// This file holds only what code cannot say: descriptions, examples, part roles.
//
// Option shape: { type, source?: { helper, param, enumType? }, ...extra }
//   - enum options resolve `values` from the `enumType` union in src/types.ts
//   - both kinds resolve `default` from the helper's destructured parameter

export const DOCS_URL = 'https://keel.coscient.workers.dev';

export const header = {
  $schema: 'https://opsforward.com/schemas/keel-component-registry.schema.json',
  version: '0.1.0',
  package: '@ops-forward/keel',
  docsUrl: DOCS_URL,
  description:
    'Machine-readable registry of all Keel design system components, class helpers, and their variants.'
};

// Classes that are valid markup hooks but intentionally have no rule in styles.css
// (they inherit from their parent). Everything else must exist in styles.css.
export const hooks = ['of-switch__label'];

export const components = [
  {
    name: 'Button',
    description:
      'A click target that signals action. Use primary for the one thing you want someone to do on the page. Secondary and ghost for everything else. One primary button per view.',
    classHelper: 'buttonClass',
    baseClass: 'of-btn',
    docsSlug: 'button',
    options: {
      variant: {
        type: 'enum',
        source: { helper: 'buttonClass', param: 'variant', enumType: 'KeelButtonVariant' },
        classPattern: 'of-btn--{value}'
      },
      size: {
        type: 'enum',
        source: { helper: 'buttonClass', param: 'size', enumType: 'KeelSize' },
        classPattern: 'of-btn--{value}'
      },
      disabled: {
        type: 'boolean',
        source: { helper: 'buttonClass', param: 'disabled' },
        classPattern: 'of-btn--disabled'
      }
    },
    classPattern: 'of-btn of-btn--{variant} of-btn--{size} [of-btn--disabled]',
    examples: [
      '<button class="of-btn of-btn--primary of-btn--md">Book a call</button>',
      '<button class="of-btn of-btn--secondary of-btn--md">Read the notes</button>',
      '<button class="of-btn of-btn--ghost of-btn--md">Cancel</button>',
      '<button class="of-btn of-btn--danger of-btn--md">Delete</button>',
      '<button class="of-btn of-btn--primary of-btn--md of-btn--disabled" disabled>Unavailable</button>'
    ]
  },
  {
    name: 'Badge',
    description:
      'An inline label for status or category. Use sparingly — badges only work when they are rare enough to signal something.',
    classHelper: 'badgeClass',
    baseClass: 'of-badge',
    docsSlug: 'badge',
    options: {
      variant: {
        type: 'enum',
        source: { helper: 'badgeClass', param: 'variant', enumType: 'KeelBadgeVariant' },
        classPattern: 'of-badge--{value}'
      }
    },
    classPattern: 'of-badge of-badge--{variant}',
    examples: [
      '<span class="of-badge of-badge--green">Active</span>',
      '<span class="of-badge of-badge--amber">Pending</span>',
      '<span class="of-badge of-badge--red">Failed</span>',
      '<span class="of-badge of-badge--blue">Info</span>',
      '<span class="of-badge of-badge--default">Draft</span>'
    ]
  },
  {
    name: 'Card',
    description:
      'A surface for grouping related content. Use brand-elevated variant for hero moments: white type on brand gradient.',
    classHelper: 'cardClass',
    baseClass: 'of-card',
    docsSlug: 'card',
    options: {},
    modifiers: [
      {
        class: 'of-card--brand-elevated',
        description:
          'White text on brand gradient (linear-gradient(180deg, #FB41AA 0%, #8F1F57 100%)). For featured or hero moments.'
      }
    ],
    parts: {
      kicker: 'of-card__kicker',
      rule: 'of-card__rule'
    },
    classPattern: 'of-card [of-card--brand-elevated]',
    examples: [
      '<article class="of-card"><h3>Standard Card</h3></article>',
      '<article class="of-card of-card--brand-elevated"><p class="of-card__kicker">Featured</p><h3>Ops Forward</h3><div class="of-card__rule"></div><p>White type on brand gradient.</p></article>'
    ]
  },
  {
    name: 'Input',
    description:
      'A single-line text input. Compose with fieldClass, labelClass, hintClass, and errorClass to build full accessible form fields.',
    classHelper: 'inputClass',
    baseClass: 'of-input',
    docsSlug: 'input',
    relatedHelpers: [
      { name: 'fieldClass', baseClass: 'of-field', modifiers: ['of-field--error'] },
      { name: 'labelClass', baseClass: 'of-label' },
      { name: 'hintClass', baseClass: 'of-field__hint' },
      { name: 'errorClass', baseClass: 'of-field__error' },
      {
        name: 'fieldA11yIds',
        description: 'Generates helpId and errorId strings for aria-describedby wiring.'
      }
    ],
    options: {
      invalid: {
        type: 'boolean',
        source: { helper: 'fieldClass', param: 'invalid' },
        appliesTo: 'fieldClass',
        classPattern: 'of-field--error'
      }
    },
    classPattern: 'of-input',
    examples: [
      '<div class="of-field"><label class="of-label" for="email">Email</label><input class="of-input" id="email" type="email" /></div>',
      '<div class="of-field of-field--error"><label class="of-label" for="name">Name</label><input class="of-input" id="name" aria-describedby="name-error" /><p class="of-field__error" id="name-error">Name is required</p></div>'
    ]
  },
  {
    name: 'Select',
    description: 'A native dropdown selector styled to match Keel inputs.',
    classHelper: 'selectClass',
    baseClass: 'of-select',
    docsSlug: 'select',
    options: {},
    classPattern: 'of-select',
    examples: [
      '<select class="of-select"><option value="">Choose one…</option><option value="a">Option A</option></select>'
    ]
  },
  {
    name: 'Textarea',
    description: 'A multi-line text input styled to match Keel inputs.',
    classHelper: 'textareaClass',
    baseClass: 'of-textarea',
    docsSlug: 'textarea',
    options: {},
    classPattern: 'of-textarea',
    examples: ['<textarea class="of-textarea" rows="4" placeholder="Add a note…"></textarea>']
  },
  {
    name: 'Switch',
    description:
      'A toggle for boolean settings. Built from five composable parts: root, input (hidden checkbox), track, thumb, and label.',
    classHelper: 'switchRootClass',
    baseClass: 'of-switch',
    docsSlug: 'switch',
    parts: {
      root: { class: 'of-switch', helper: 'switchRootClass', element: 'label' },
      input: {
        class: 'of-switch__input',
        helper: 'switchInputClass',
        element: 'input[type=checkbox][role=switch]'
      },
      track: { class: 'of-switch__track', helper: 'switchTrackClass', element: 'span' },
      thumb: { class: 'of-switch__thumb', helper: 'switchThumbClass', element: 'span' },
      label: { class: 'of-switch__label', helper: 'switchLabelClass', element: 'span' }
    },
    options: {},
    classPattern:
      'of-switch / of-switch__input / of-switch__track / of-switch__thumb / of-switch__label',
    examples: [
      '<label class="of-switch"><input class="of-switch__input" type="checkbox" role="switch" /><span class="of-switch__track"><span class="of-switch__thumb"></span></span><span class="of-switch__label">Enable notifications</span></label>'
    ]
  },
  {
    name: 'Check',
    description: 'A checkbox with a label, for independent yes/no choices or multi-select lists.',
    classHelper: 'checkClass',
    baseClass: 'of-check',
    docsSlug: 'checkbox',
    parts: { input: 'of-check__input', label: 'of-check__label' },
    options: {},
    classPattern: 'of-check / of-check__input / of-check__label',
    examples: [
      '<label class="of-check"><input class="of-check__input" type="checkbox" /> <span class="of-check__label">Email me weekly updates</span></label>'
    ]
  },
  {
    name: 'Radio',
    description: 'A radio button with a label, for choosing exactly one option from a short list.',
    classHelper: 'radioClass',
    baseClass: 'of-radio',
    docsSlug: 'radio',
    parts: { input: 'of-radio__input', label: 'of-radio__label' },
    options: {},
    classPattern: 'of-radio / of-radio__input / of-radio__label',
    examples: [
      '<label class="of-radio"><input class="of-radio__input" type="radio" name="plan" /> <span class="of-radio__label">Monthly</span></label>'
    ]
  },
  {
    name: 'Banner',
    description: 'A page-level status message. Pick the variant by meaning (info, success, warning, danger), not by color preference.',
    classHelper: 'bannerClass',
    baseClass: 'of-banner',
    docsSlug: 'banner',
    options: {
      variant: {
        type: 'enum',
        source: { helper: 'bannerClass', param: 'variant', enumType: 'KeelBannerVariant' },
        classPattern: 'of-banner--{value}'
      }
    },
    classPattern: 'of-banner of-banner--{variant}',
    examples: [
      '<div class="of-banner of-banner--info" role="status">Maintenance starts at 22:00 UTC.</div>',
      '<div class="of-banner of-banner--danger" role="alert">Payment failed. Update your card.</div>'
    ]
  },
  {
    name: 'Breadcrumbs',
    description: 'A navigation trail showing where the current page sits in the hierarchy.',
    classHelper: 'breadcrumbsClass',
    baseClass: 'of-breadcrumbs',
    docsSlug: 'breadcrumbs',
    options: {},
    classPattern: 'of-breadcrumbs',
    examples: [
      '<nav class="of-breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/engagements">Engagements</a><span>/</span><span aria-current="page">Acme</span></nav>'
    ]
  },
  {
    name: 'Link',
    description: 'A styled inline anchor. Set aria-disabled="true" to render the disabled state.',
    classHelper: 'linkClass',
    baseClass: 'of-link',
    docsSlug: 'link',
    options: {},
    classPattern: 'of-link',
    examples: ['<a class="of-link" href="/docs">Read the docs</a>']
  },
  {
    name: 'Empty State',
    description: 'A placeholder for views with no data yet. Say what is missing and offer the one action that fixes it.',
    classHelper: 'emptyClass',
    baseClass: 'of-empty',
    docsSlug: 'empty-state',
    parts: { title: 'of-empty__title', body: 'of-empty__body' },
    options: {},
    classPattern: 'of-empty / of-empty__title / of-empty__body',
    examples: [
      '<div class="of-empty"><h3 class="of-empty__title">No engagements yet</h3><p class="of-empty__body">Create your first engagement to get started.</p><button class="of-btn of-btn--primary of-btn--md">New engagement</button></div>'
    ]
  },
  {
    name: 'Dialog',
    description: 'A focused overlay for confirmations and critical actions. Interrupts flow, so use it only for important decisions.',
    classHelper: 'dialogClass',
    baseClass: 'of-dialog',
    docsSlug: 'dialog',
    parts: { title: 'of-dialog__title', description: 'of-dialog__desc', actions: 'of-dialog__actions' },
    options: {},
    classPattern: 'of-dialog / of-dialog__title / of-dialog__desc / of-dialog__actions',
    examples: [
      '<div class="of-dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title"><h3 id="dialog-title" class="of-dialog__title">Archive engagement?</h3><p class="of-dialog__desc">You can restore it later from settings.</p><div class="of-dialog__actions"><button class="of-btn of-btn--secondary of-btn--md">Cancel</button><button class="of-btn of-btn--danger of-btn--md">Archive</button></div></div>'
    ]
  },
  {
    name: 'Toast',
    description: 'A short-lived notification confirming an action. Not for errors that need a decision; use Banner or Dialog.',
    classHelper: 'toastClass',
    baseClass: 'of-toast',
    docsSlug: 'toast',
    parts: { title: 'of-toast__title', body: 'of-toast__body' },
    options: {
      variant: {
        type: 'enum',
        source: { helper: 'toastClass', param: 'variant', enumType: 'KeelToastVariant' },
        classPattern: 'of-toast--{value}'
      }
    },
    classPattern: 'of-toast of-toast--{variant}',
    examples: [
      '<div class="of-toast of-toast--success" role="status"><div class="of-toast__title">Saved</div><div class="of-toast__body">Your changes are live.</div></div>'
    ]
  },
  {
    name: 'Popover',
    description: 'A panel anchored to a trigger for secondary controls. The popover positions against its nearest positioned ancestor.',
    classHelper: 'popoverClass',
    baseClass: 'of-popover',
    docsSlug: 'popover',
    parts: { title: 'of-popover__title' },
    options: {},
    classPattern: 'of-popover / of-popover__title',
    examples: [
      '<div style="position: relative"><button class="of-btn of-btn--secondary of-btn--md" aria-haspopup="dialog" aria-expanded="true" aria-controls="filters">Filters</button><div id="filters" class="of-popover" role="dialog" aria-label="Filters"><div class="of-popover__title">Filters</div><label class="of-check"><input class="of-check__input" type="checkbox" /> <span class="of-check__label">Active only</span></label></div></div>'
    ]
  },
  {
    name: 'Tooltip',
    description: 'Brief helper text shown on hover and focus. Never put interactive controls or critical instructions in a tooltip.',
    classHelper: 'tooltipClass',
    baseClass: 'of-tooltip',
    docsSlug: 'tooltip',
    parts: { anchor: 'of-tooltip-anchor' },
    relatedHelpers: [{ name: 'tooltipAnchorClass', baseClass: 'of-tooltip-anchor' }],
    options: {},
    classPattern: 'of-tooltip-anchor > of-tooltip',
    examples: [
      '<span class="of-tooltip-anchor"><button class="of-btn of-btn--secondary of-btn--md" aria-describedby="hint">Refresh</button><span id="hint" role="tooltip" class="of-tooltip">Data refreshes every 15 minutes.</span></span>'
    ]
  },
  {
    name: 'Loader',
    description: 'A spinner for in-progress async work. Respects prefers-reduced-motion.',
    classHelper: 'loaderClass',
    baseClass: 'of-loader',
    docsSlug: 'loader',
    options: {
      size: {
        type: 'enum',
        source: { helper: 'loaderClass', param: 'size', enumType: 'KeelSize' },
        classPattern: 'of-loader--{value}'
      }
    },
    classPattern: 'of-loader of-loader--{size}',
    examples: ['<span class="of-loader of-loader--md" role="status" aria-label="Loading"></span>']
  },
  {
    name: 'Skeleton',
    description: 'A shimmering placeholder shaped like the content it stands in for. Set width and height on it yourself.',
    classHelper: 'skeletonClass',
    baseClass: 'of-skeleton',
    docsSlug: 'skeleton',
    options: {},
    classPattern: 'of-skeleton',
    examples: ['<div class="of-skeleton" style="width: 240px; height: 16px" aria-hidden="true"></div>']
  },
  {
    name: 'Table',
    description: 'A data table with a recessed header row. Style the element with <table>, <thead>, <th>, and <td>.',
    classHelper: 'tableClass',
    baseClass: 'of-table',
    docsSlug: 'table',
    options: {},
    classPattern: 'of-table',
    examples: [
      '<table class="of-table"><thead><tr><th>Name</th><th>Status</th></tr></thead><tbody><tr><td>Acme</td><td><span class="of-badge of-badge--green">Active</span></td></tr></tbody></table>'
    ]
  },
  {
    name: 'Pagination',
    description: 'A row of buttons for moving between pages of a list. Mark the current page with the tint button variant.',
    classHelper: 'paginationClass',
    baseClass: 'of-pagination',
    docsSlug: 'pagination',
    options: {},
    classPattern: 'of-pagination',
    examples: [
      '<nav class="of-pagination" aria-label="Pagination"><button class="of-btn of-btn--secondary of-btn--sm">Previous</button><button class="of-btn of-btn--tint of-btn--sm" aria-current="page">1</button><button class="of-btn of-btn--secondary of-btn--sm">2</button><button class="of-btn of-btn--secondary of-btn--sm">Next</button></nav>'
    ]
  },
  {
    name: 'Tabs',
    description: 'Switch between views in the same context without navigating away. Toggle the --active modifiers from your own script.',
    classHelper: 'tabsClass',
    baseClass: 'of-tabs',
    docsSlug: 'tabs',
    relatedHelpers: [
      { name: 'tabClass', baseClass: 'of-tab', modifiers: ['of-tab--active'] },
      { name: 'tabPanelsClass', baseClass: 'of-tab-panels' },
      { name: 'tabPanelClass', baseClass: 'of-tab-panel', modifiers: ['of-tab-panel--active'] }
    ],
    options: {
      variant: {
        type: 'enum',
        source: { helper: 'tabsClass', param: 'variant', enumType: 'KeelTabsVariant' },
        classPattern: 'of-tabs--{value}'
      },
      active: {
        type: 'boolean',
        source: { helper: 'tabClass', param: 'active' },
        appliesTo: 'tabClass, tabPanelClass',
        classPattern: 'of-tab--active'
      }
    },
    classPattern: 'of-tabs of-tabs--{variant}; of-tab [of-tab--active]; of-tab-panel [of-tab-panel--active]',
    examples: [
      '<div class="of-tabs of-tabs--underline" role="tablist"><button class="of-tab of-tab--active" role="tab" aria-selected="true">Overview</button><button class="of-tab" role="tab" aria-selected="false">Activity</button></div><div class="of-tab-panels"><div class="of-tab-panel of-tab-panel--active" role="tabpanel">Overview content</div><div class="of-tab-panel" role="tabpanel">Activity content</div></div>'
    ]
  }
];
