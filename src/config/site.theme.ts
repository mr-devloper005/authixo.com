import { defineSiteTheme } from '@/config/site.theme.defaults'

export const SITE_THEME = defineSiteTheme({
  shell: 'editorial',
  hero: {
    variant: 'spotlight-split',
    eyebrow: 'Field notes & dispatches',
  },
  home: {
    layout: 'editorial-rhythm',
    primaryTask: 'mediaDistribution',
    featuredTaskKeys: ['mediaDistribution'],
  },
  navigation: {
    variant: 'minimal',
  },
  footer: {
    variant: 'editorial',
  },
  cards: {
    listing: 'editorial-feature',
    article: 'editorial-feature',
    image: 'editorial-feature',
    profile: 'editorial-feature',
    classified: 'editorial-feature',
    pdf: 'editorial-feature',
    sbm: 'editorial-feature',
    social: 'editorial-feature',
    org: 'editorial-feature',
    comment: 'editorial-feature',
    mediaDistribution: 'editorial-journal',
  },
})
