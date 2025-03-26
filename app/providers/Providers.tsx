import { SessionProvider } from 'next-auth/react';
import ConvexClientProvider from './ConvexClientProvider';
import { ThemeProvider } from './theme-provider';

export async function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ConvexClientProvider>
        {' '}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </ConvexClientProvider>
    </SessionProvider>
  );
}
