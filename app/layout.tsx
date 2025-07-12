import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Joseph George - Full Stack Developer',
  description: 'Portfolio of Joseph George, a passionate full-stack developer specializing in React, Next.js, and modern web technologies.',
  keywords: ['portfolio', 'developer', 'react', 'nextjs', 'typescript', 'full-stack'],
  authors: [{ name: 'Joseph George' }],
  creator: 'Joseph George',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://josephgeorge.dev',
    title: 'Joseph George - Full Stack Developer',
    description: 'Portfolio of Joseph George, a passionate full-stack developer specializing in React, Next.js, and modern web technologies.',
    siteName: 'Joseph George Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joseph George - Full Stack Developer',
    description: 'Portfolio of Joseph George, a passionate full-stack developer specializing in React, Next.js, and modern web technologies.',
    creator: '@josephgeorge',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}