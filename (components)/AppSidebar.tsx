'use client';
import { Home, Pen, Settings, Upload } from 'lucide-react';
import * as React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from '@/(components)/ui/sidebar';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { NavMain } from './NavMain';
import { NavUser } from './NavUser';
import { User } from '@prisma/client';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const session = useSession();
  if (!session) return null;
  const data = {
    user: (session.data?.user as User) || {},
    navMain: [
      {
        title: 'Home',
        url: '/dashboard/home',
        icon: Home,
        isActive: true,
      },
      {
        title: 'Create',
        url: '/dashboard/create',
        icon: Pen,
        isActive: true,
      },
      {
        title: 'Upload',
        url: '/dashboard/upload',
        icon: Upload,
        isActive: true,
      },
      {
        title: 'Settings',
        url: '/dashboard/settings',
        icon: Settings,
        isActive: true,
      },
    ],
  };
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {' '}
        <Link href="/">
          <SidebarMenuButton size="lg" asChild>
            <div className="container mx-auto px-4 py-4 flex  items-center ">
              <Image
                src="/logo.png"
                alt="nav logo"
                width={50}
                height={50}
                className="mr-0"
              />
              <span className="text-xl font-bold">DeepShort</span>
            </div>
          </SidebarMenuButton>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
