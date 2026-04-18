import { useEffect, useRef, useState } from 'react';

const SCROLL_STORAGE_KEY = 'keel.docs.sidebar.scrollTop';
const COLLAPSE_STORAGE_KEY = 'keel.docs.sidebar.collapsed';

const NAV = [
  {
    id: 'getting-started',
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
    id: 'foundation',
    title: 'Foundation',
    items: [
      { label: 'Colors',         href: '/colors' },
      { label: 'Typography',     href: '/typography' },
      { label: 'Spacing & radii',href: '/spacing' },
      { label: 'Iconography',    href: '/iconography' },
    ],
  },
  {
    id: 'components',
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
    id: 'brand',
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
  const navRef = useRef<HTMLElement | null>(null);
  const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(COLLAPSE_STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as Record<string, boolean>;
      setCollapsedGroups(parsed);
    } catch {
      setCollapsedGroups({});
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(COLLAPSE_STORAGE_KEY, JSON.stringify(collapsedGroups));
  }, [collapsedGroups]);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const scrollContainer = (nav.closest('.site-sidebar') as HTMLElement | null) ?? nav;

    const savedTop = Number(window.localStorage.getItem(SCROLL_STORAGE_KEY) || '0');
    if (savedTop > 0) scrollContainer.scrollTop = savedTop;

    const onScroll = () => {
      window.localStorage.setItem(SCROLL_STORAGE_KEY, String(scrollContainer.scrollTop));
    };

    scrollContainer.addEventListener('scroll', onScroll, { passive: true });
    return () => scrollContainer.removeEventListener('scroll', onScroll);
  }, []);

  const toggleGroup = (groupId: string) => {
    setCollapsedGroups((prev) => ({
      ...prev,
      [groupId]: !prev[groupId]
    }));
  };

  return (
    <nav className="sidebar-nav" ref={navRef} aria-label="Documentation">
      {NAV.map((group) => (
        <section key={group.id} className="sidebar-group">
          <button
            type="button"
            className="sidebar-group__toggle"
            aria-expanded={!collapsedGroups[group.id]}
            aria-controls={`sidebar-group-${group.id}`}
            onClick={() => toggleGroup(group.id)}
          >
            <span className="sidebar-group__title">{group.title}</span>
            <span className={`sidebar-group__chevron${collapsedGroups[group.id] ? ' is-collapsed' : ''}`} aria-hidden="true">⌄</span>
          </button>
          <div id={`sidebar-group-${group.id}`} className="sidebar-group__items" hidden={collapsedGroups[group.id]}>
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
        </section>
      ))}
    </nav>
  );
}
