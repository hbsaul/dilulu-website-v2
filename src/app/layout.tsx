import type { Metadata } from 'next';
import { Inter, Montserrat, Open_Sans, Caveat } from 'next/font/google';
import './globals.css';
import Layout from '@/components/Layout';
import { LanguageProvider } from '@/contexts/LanguageContext';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

const caveat = Caveat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-caveat',
});

export const metadata: Metadata = {
  title: 'Dilulu - Growing Gardens, Growing Futures',
  description: 'Empowering children and families in Africa through gardening, composting, and natural living programs.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${montserrat.variable} ${openSans.variable} ${caveat.variable}`} lang="en">
      <body className={openSans.className}>
        <LanguageProvider>
          <Layout>
            {children}
          </Layout>
        </LanguageProvider>
      </body>
    </html>
  );
}
