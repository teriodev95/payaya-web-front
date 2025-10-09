import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { TooltipProvider } from '@radix-ui/react-tooltip';

const inter = Inter({ subsets: ['latin'] });

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Payaya',
    default: 'Payaya - LMS Corporativo Móvil | Capacitación y Certificación en México',
  },
  description: 'Plataforma LMS corporativa como PWA para capacitar a tu equipo desde cualquier lugar. Cursos, exámenes y certificados automáticos. Desde $98 MXN por usuario activo/mes.',
  keywords: ['LMS', 'capacitación corporativa', 'PWA', 'certificación digital', 'cursos online', 'México', 'aprendizaje móvil', 'elearning'],
  authors: [{ name: 'Payaya' }],
  creator: 'Payaya',
  publisher: 'Payaya',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://payaya.mx',
    title: 'Payaya - LMS Corporativo Móvil | Capacitación y Certificación',
    description: 'Capacita a tu equipo desde cualquier lugar con nuestra plataforma LMS como PWA. Cursos, exámenes y certificados automáticos.',
    siteName: 'Payaya',
    images: [{
      url: '/logo_full.svg',
      width: 1200,
      height: 630,
      alt: 'Payaya - Capacitación Corporativa Móvil',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Payaya - LMS Corporativo Móvil',
    description: 'Capacita a tu equipo desde cualquier lugar. LMS como PWA con certificación automática.',
    images: ['/logo_full.svg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html className="h-full" suppressHydrationWarning>
      <body
        className={cn(
          'antialiased text-base text-foreground bg-background',
          inter.className,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          storageKey="payaya-theme"
          enableSystem={false}
          disableTransitionOnChange
          enableColorScheme
        >
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
