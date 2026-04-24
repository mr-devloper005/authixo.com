export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || '4p64jqmx8o',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Authixo',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Independent media updates',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'Independent dispatches and long reads from Authixo—black-and-rose editorial layout, no template chrome.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'authixo.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://authixo.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || '',
} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/placeholder.svg?height=80&width=80',
} as const
