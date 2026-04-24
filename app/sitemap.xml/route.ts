import { getServerSitemapResponse, SitemapEntry } from 'next-advanced-sitemap';

export async function GET() {
  const entries: SitemapEntry[] = [
    // 1. Page d'accueil avec Hreflang (Multilingue)
    {
      url: 'https://test-sitemap.com',
      lastmod: new Date(),
      changefreq: 'daily',
      priority: 1.0,
      alternates: [
        { hreflang: 'fr-CD', href: 'https://test-sitemap.com/fr' },
        { hreflang: 'en-US', href: 'https://test-sitemap.com/en' },
      ],
    },
    // 2. Page Blog avec News et Image
    {
      url: 'https://test-sitemap.com/blog/nouvelle-update',
      news: {
        name: 'FomaDev News',
        language: 'fr',
        publication_date: new Date(),
        title: 'Lancement de next-advanced-sitemap',
      },
      images: [
        {
          loc: 'https://test-sitemap.com/images/banner.png',
          title: 'Aperçu du générateur',
          caption: 'Une capture d’écran montrant le XML généré.',
        },
      ],
    },
    // 3. Page Tutoriel avec Vidéo
    {
      url: 'https://test-sitemap.com/tutorials/install-guide',
      videos: [
        {
          thumbnail_loc: 'https://test-sitemap.com/thumbs/video.jpg',
          title: 'Comment installer la lib',
          description: 'Guide complet étape par étape.',
          content_loc: 'https://test-sitemap.com/videos/guide.mp4',
          player_loc: 'https://test-sitemap.com/player?v=123',
          publication_date: new Date(),
        },
      ],
    },
  ];

  return getServerSitemapResponse(entries);
}