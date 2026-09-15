import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Fira_Code, Vazirmatn } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

// Only used by Persian article bodies; Plus Jakarta Sans has no Farsi glyphs.
const vazirmatn = Vazirmatn({
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-fa',
});

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
    <html lang="en" className={`${plusJakarta.variable} ${firaCode.variable} ${vazirmatn.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
