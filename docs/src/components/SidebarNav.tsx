const NAV = [
  {
    title: 'Getting started',
    items: [
      { label: 'Introduction',   href: '/' },
      { label: 'Installation',   href: '/installation' },
      { label: 'Design tokens',  href: '/design-tokens' },
      { label: 'Dark mode',      href: '/dark-mode' },
      { label: 'Accessibility',  href: '/accessibility' },
      { label: 'Layout',         href: '/layout' },
      { label: 'Motion',         href: '/motion' },
      { label: 'Browser support',href: '/browser-support' },
      { label: 'Release policy', href: '/release-policy' },
      { label: 'Migration playbook', href: '/migration-playbook' },
      { label: 'Pilot rollout',  href: '/pilot-rollout' },
      { label: 'Contributing',   href: '/contributing' },
      { label: 'Changelog',      href: '/changelog' },
    ],
  },
  {
    title: 'Foundation',
    items: [
      { label: 'Colors',         href: '/colors' },
      { label: 'Typography',     href: '/typography' },
      { label: 'Spacing & radii',href: '/spacing' },
      { label: 'Iconography',    href: '/iconography' },
    ],
  },
  {
    title: 'Components',
    items: [
      { label: 'Badge',        href: '/components/badge' },
      { label: 'Banner',       href: '/components/banner' },
      { label: 'Breadcrumbs',  href: '/components/breadcrumbs' },
      { label: 'Button',       href: '/components/button' },
      { label: 'Card',         href: '/components/card' },
      { label: 'Checkbox',     href: '/components/checkbox' },
      { label: 'Dialog',       href: '/components/dialog' },
      { label: 'Empty state',  href: '/components/empty-state' },
      { label: 'Input',        href: '/components/input' },
      { label: 'Link',         href: '/components/link' },
      { label: 'Loader',       href: '/components/loader' },
      { label: 'Pagination',   href: '/components/pagination' },
      { label: 'Popover',      href: '/components/popover' },
      { label: 'Radio',        href: '/components/radio' },
      { label: 'Select',       href: '/components/select' },
      { label: 'Skeleton',     href: '/components/skeleton' },
      { label: 'Switch',       href: '/components/switch' },
      { label: 'Table',        href: '/components/table' },
      { label: 'Tabs',         href: '/components/tabs' },
      { label: 'Textarea',     href: '/components/textarea' },
      { label: 'Toast',        href: '/components/toast' },
      { label: 'Tooltip',      href: '/components/tooltip' },
    ],
  },
  {
    title: 'Brand',
    items: [
      { label: 'Voice & tone', href: '/brand/voice-and-tone' },
      { label: 'Logo usage',   href: '/brand/logo-usage' },
    ],
  },
];

interface Props {
  currentPath: string;
}

export default function SidebarNav({ currentPath }: Props) {
  const normalize = (p: string) => p.replace(/\/$/, '') || '/';
  const current = normalize(currentPath);

  return (
    <nav className="sidebar-nav">
      {NAV.map((group) => (
        <div key={group.title} className="sidebar-group">
          <div className="sidebar-group__title">{group.title}</div>
          {group.items.map((item) => {
            const active = current === normalize(item.href);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`sidebar-item${active ? ' is-active' : ''}`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      ))}
    </nav>
  );
}
