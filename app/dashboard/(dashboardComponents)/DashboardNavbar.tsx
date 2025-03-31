'use client';
import { ModeToggleButton } from '@/(components)/ModeToggleButton';
import { Button } from '@/(components)/ui/button';
import { SidebarTrigger } from '@/(components)/ui/sidebar';
import { Plus } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function DashboardNavbar() {
  const pathname = usePathname();
  const headerName = pathname.split('/').at(-1);
  return (
    <nav className="sticky  top-0 z-50 backdrop-blur-md shadow-sm " id="home">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="font-medium dark:text-white text-xl capitalize">
          {headerName}
        </h1>
        <div className="flex justify-center items-center gap-2">
          <Button>
            <Plus /> Create New Video{' '}
          </Button>
          <ModeToggleButton />
          <SidebarTrigger />
        </div>

        {/* <NavActions user={user} isMobile={isMobile} /> */}
      </div>
    </nav>
  );
}
