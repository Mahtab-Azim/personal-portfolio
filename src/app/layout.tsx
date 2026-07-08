import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Mahtab Azimzadeh — Front-End Developer & Product Designer',
    template: '%s | Mahtab Azimzadeh',
  },
  description:
    'Front-End Developer crafting thoughtful digital products. I build responsive, accessible and delightful web experiences with clean code and a design-minded approach.',
  keywords: ['Front-End Developer', 'Product Designer', 'React', 'Next.js', 'TypeScript', 'UI/UX'],
  authors: [{ name: 'Mahtab Azimzadeh', url: 'https://mahtab.dev' }],
  creator: 'Mahtab Azimzadeh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mahtab.dev',
    title: 'Mahtab Azimzadeh — Front-End Developer & Product Designer',
    description:
      'Front-End Developer crafting thoughtful digital products. Building responsive, accessible and delightful web experiences.',
    siteName: 'Mahtab Azimzadeh',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahtab Azimzadeh — Front-End Developer & Product Designer',
    description: 'Front-End Developer crafting thoughtful digital products.',
    creator: '@mahtab_dev',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Preload Inter from Google Fonts — offline-safe with display=swap */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
