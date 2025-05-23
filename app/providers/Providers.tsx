
import { ThemeProvider } from './theme-provider';

export async function Providers({ children }: { children: React.ReactNode }) {
  return (
        
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

  );
}
