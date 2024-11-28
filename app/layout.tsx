import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Layout } from '@/components/layout';
import { Poppins, Inter } from 'next/font/google';
import { ReactNode } from 'react';

// const inter = Inter({ subsets: ['latin'] });


// Configure the primary font (Poppins)
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

// Configure the secondary font (Inter) for better readability in body text
const inter = Inter({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});


export const metadata = {
  title: 'Dynamic Blog',
  description: 'A modern blog platform',
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          // disableTransitionOnChange
        >
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}