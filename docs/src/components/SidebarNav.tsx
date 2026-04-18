const NAV = [
  {
    title: 'Getting started',
    items: [
      { label: 'Introduction',   href: '/' },
      { label: 'Installation',   href: '/installation' },
      { label: 'Design tokens',  href: '/design-tokens' },
      { label: 'Dark mode',      href: '/dark-mode' },
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
      { label: 'Button',  href: '/components/button' },
      { label: 'Badge',   href: '/components/badge' },
      { label: 'Card',    href: '/components/card' },
      { label: 'Input',   href: '/components/input' },
      { label: 'Tabs',    href: '/components/tabs' },
    ],
  },
  {
    title: 'Brand',
    items: [
      { label: 'Voice & tone', href: '/voice-and-tone' },
      { label: 'Logo usage',   href: '/logo-usage' },
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
