import type { Module } from '../data/modules';

type IconName = Module['icon'];

interface CourseIconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export default function CourseIcon({ name, size = 24, className }: CourseIconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };

  switch (name) {
    case 'compass':
      return (
        <svg {...common} className={className}>
          <circle cx="12" cy="12" r="10" />
          <polygon points="16 8 14 14 8 16 10 10 16 8" />
        </svg>
      );
    case 'user-round':
      return (
        <svg {...common} className={className}>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20a8 8 0 0 1 16 0" />
        </svg>
      );
    case 'globe':
      return (
        <svg {...common} className={className}>
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15 15 0 0 1 0 20" />
          <path d="M12 2a15 15 0 0 0 0 20" />
        </svg>
      );
    case 'handshake':
      return (
        <svg {...common} className={className}>
          <path d="M11 12 9 10a2 2 0 0 0-3 0L3 13a2 2 0 0 0 0 3l4 4a2 2 0 0 0 3 0l2-2" />
          <path d="m13 12 2-2a2 2 0 0 1 3 0l3 3a2 2 0 0 1 0 3l-4 4a2 2 0 0 1-3 0l-2-2" />
          <path d="m8 15 2 2a2 2 0 0 0 3 0l3-3" />
        </svg>
      );
    case 'rocket':
      return (
        <svg {...common} className={className}>
          <path d="M4.5 19.5s1-4 4-5l6-6a5 5 0 0 1 7-1l-1 7-6 6c-1 3-5 4-5 4l-1-5z" />
          <path d="M14 10l4 4" />
          <circle cx="16" cy="8" r="1" />
        </svg>
      );
    case 'bot':
      return (
        <svg {...common} className={className}>
          <path d="M9 3h6" />
          <path d="M12 3v3" />
          <rect x="4" y="6" width="16" height="12" rx="3" />
          <circle cx="9" cy="12" r="1" />
          <circle cx="15" cy="12" r="1" />
          <path d="M9 16h6" />
        </svg>
      );
    default:
      return null;
  }
}
