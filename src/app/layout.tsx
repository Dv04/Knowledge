// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import React from 'react';
import ThemeClientProvider from './ThemeClientProvider';   // ← new import

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Dev Sanghvi | Portfolio',
  description: 'AI Engineer, Researcher & Entrepreneur'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeClientProvider>{children}</ThemeClientProvider>
      </body>
    </html>
  );
}
