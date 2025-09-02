import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  const site = process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  return {
    name: 'sendit.lat',
    short_name: 'sendit',
    start_url: '/',
    theme_color: '#0A84FF',
    background_color: '#ffffff',
    display: 'standalone',
    icons: [
      { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { src: '/favicon.png', sizes: '512x512', type: 'image/png' },
      { src: '/favicon.ico', sizes: '48x48 32x32 16x16', type: 'image/x-icon' }
    ]
  };
}
