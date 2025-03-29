import { AppSidebar } from '@/(components)/AppSidebar';
import { SidebarProvider } from '@/(components)/ui/sidebar';
import type { Metadata } from 'next';
import DashboardNavbar from './(dashboardComponents)/DashboardNavbar';

export const metadata: Metadata = {
  title: {
    default: 'DeepShort | AI YouTube Shorts Creator',
    template: '%s | DeepShort',
  },
  description: 'content creation with AI-powered YouTube Shorts',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <DashboardNavbar />

        {children}
      </main>
    </SidebarProvider>
  );
}
