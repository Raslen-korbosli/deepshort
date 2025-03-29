import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './providers/theme-provider';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'DeepShort | AI YouTube Shorts Creator',
    template: '%s | DeepShort',
  },
  description: 'content creation with AI-powered YouTube Shorts',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}  antialiased`}>
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-screen  ">{children}</div>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
