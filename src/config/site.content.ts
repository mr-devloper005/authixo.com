import type { TaskKey } from '@/lib/site-config'

export const siteContent = {
  navbar: {
    tagline: 'Independent coverage & short dispatches',
  },
  footer: {
    tagline: 'Clarity of record over volume of noise',
  },
  hero: {
    badge: 'Dispatch',
    title: ['Notes from the field, in plain language.', 'No funnels, no template chrome.'],
    description:
      'Authixo publishes focused updates and longer reads without the usual product-page chrome—blocks of type, quiet hierarchy, and room to think.',
    primaryCta: {
      label: 'Read latest dispatches',
      href: '/updates',
    },
    secondaryCta: {
      label: 'Search the archive',
      href: '/search',
    },
    searchPlaceholder: 'Search dispatches and posts',
    focusLabel: 'Latest',
    featureCardBadge: 'In this issue',
    featureCardTitle: 'The front page is the feed.',
    featureCardDescription:
      'New work surfaces as soon as it ships—no carousel tricks, no filler panels, no borrowed “template” copy.',
  },
  home: {
    metadata: {
      title: 'Authixo — dispatches, essays, and updates',
      description:
        'Independent editorial updates from Authixo: announcements, analysis, and readable long-form in a single calm archive.',
      openGraphTitle: 'Authixo — dispatches, essays, and updates',
      openGraphDescription: 'A black-and-rose editorial front for focused reading.',
      keywords: [
        'Authixo',
        'independent media',
        'essays',
        'dispatches',
        'long-form',
        'newsroom',
      ],
    },
    introBadge: 'Masthead',
    introTitle: 'A publication-shaped homepage, not a product landing page.',
    introParagraphs: [
      'The layout is built for asymmetry: a dark masthead, a rosy lead, then text that gets to breathe. Nothing here pretends to be a dashboard or a “growth” surface.',
      'You can read from the home stack, open the full archive, or search across every post the system still supports under the hood.',
    ],
    sideBadge: 'How we work',
    sidePoints: [
      'Primary dispatches on the home block; everything else still reachable by URL and search.',
      'Archive and filters stay out of the way until you need them.',
      'Detail pages are tuned for long reading, not for engagement widgets.',
    ],
    primaryLink: {
      label: 'Open /updates',
      href: '/updates',
    },
    secondaryLink: {
      label: 'Search',
      href: '/search',
    },
  },
  cta: {
    badge: 'Editorial',
    title: 'Need a correction, a tip, or a line for the record?',
    description: 'The desk is thin on ceremony—send a direct note and we will route it.',
    primaryCta: {
      label: 'Contact',
      href: '/contact',
    },
    secondaryCta: {
      label: 'Browse dispatches',
      href: '/updates',
    },
  },
  taskSectionHeading: 'Latest dispatches',
  taskSectionDescriptionSuffix: 'From the /updates stream.',
} as const

export const taskPageMetadata: Record<
  Exclude<TaskKey, 'comment' | 'org' | 'social'>,
  { title: string; description: string }
> = {
  article: {
    title: 'Essays & articles',
    description: 'Longer reads and file-style pieces in a calmer, grid-forward layout.',
  },
  listing: {
    title: 'Listings',
    description: 'Directory-style entries when this task is active.',
  },
  classified: {
    title: 'Classifieds',
    description: 'Short notices and classified-style posts.',
  },
  image: {
    title: 'Images',
    description: 'Visual-first posts and galleries.',
  },
  profile: {
    title: 'Profiles',
    description: 'Public profile surfaces.',
  },
  sbm: {
    title: 'Bookmarks',
    description: 'Curated links and saved resources.',
  },
  pdf: {
    title: 'Files',
    description: 'Downloadable documents.',
  },
  mediaDistribution: {
    title: 'Dispatches',
    description: 'Short and medium updates in a scan-dense, journal list.',
  },
}

export const taskIntroCopy: Record<
  TaskKey,
  { title: string; paragraphs: string[]; links: { label: string; href: string }[] }
> = {
  listing: {
    title: 'Listings',
    paragraphs: ['Directory entries when this lane is enabled.'],
    links: [{ label: 'Home', href: '/' }],
  },
  article: {
    title: 'Essays & articles',
    paragraphs: [
      'This lane uses a different rhythm from /updates: wider image surfaces, a softer paper field, and a three-column feel at large breakpoints.',
      'The underlying feed and filters are the same system—only the frame changes.',
    ],
    links: [
      { label: 'Home', href: '/' },
      { label: 'Dispatches', href: '/updates' },
    ],
  },
  classified: {
    title: 'Classifieds',
    paragraphs: ['Short-form notices.'],
    links: [{ label: 'Home', href: '/' }],
  },
  image: {
    title: 'Images',
    paragraphs: ['Image-first posts.'],
    links: [{ label: 'Home', href: '/' }],
  },
  profile: {
    title: 'Profiles',
    paragraphs: ['Identity surfaces.'],
    links: [{ label: 'Home', href: '/' }],
  },
  sbm: {
    title: 'Bookmarks',
    paragraphs: ['Curated resources.'],
    links: [{ label: 'Home', href: '/' }],
  },
  pdf: {
    title: 'Files',
    paragraphs: ['Downloadable files.'],
    links: [{ label: 'Home', href: '/' }],
  },
  social: {
    title: 'Social',
    paragraphs: ['Activity-style posts.'],
    links: [{ label: 'Home', href: '/' }],
  },
  comment: {
    title: 'Comments',
    paragraphs: ['Commentary.'],
    links: [{ label: 'Home', href: '/' }],
  },
  org: {
    title: 'Organizations',
    paragraphs: ['Organization pages.'],
    links: [{ label: 'Home', href: '/' }],
  },
  mediaDistribution: {
    title: 'Dispatches',
    paragraphs: [
      'A tight, journal-style list: category and date in the margin, a horizontal scan line, and fast movement through the stream.',
      'This is the emphasized lane for Authixo; other tasks remain in the system for search and direct URLs.',
    ],
    links: [
      { label: 'Home', href: '/' },
      { label: 'Search all', href: '/search' },
    ],
  },
}
