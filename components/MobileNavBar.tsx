'use client';
import { cn } from '@/lib/utils';
import {
  FileText,
  Grid2X2,
  HelpCircle,
  Home,
  LogOut,
  Menu,
  Settings,
  Users,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import { ModeToggleButton } from './ModeToggleButton';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './ui/drawer';
import { ScrollArea } from './ui/scroll-area';
import { signOut } from 'next-auth/react';
interface NavItem {
  title: string;
  href: string;
  icon: React.ElementType;
}
const navItems: NavItem[] = [
  {
    title: 'Home',
    href: '/',
    icon: Home,
  },
  {
    title: 'Dashboard',
    href: '/dashboard/create',
    icon: Grid2X2,
  },
  {
    title: 'Users',
    href: '#',
    icon: Users,
  },
  {
    title: 'Documents',
    href: '#',
    icon: FileText,
  },
  {
    title: 'Settings',
    href: '#',
    icon: Settings,
  },
  {
    title: 'Help & Support',
    href: '#',
    icon: HelpCircle,
  },
];
export default function MobileNavBar({
  userImage,
  userName,
}: {
  userImage: string;
  userName: string;
}) {
  const pathName = usePathname();
  function handleLogout() {
    signOut({ redirectTo: '/' });
  }
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon" className="h-10 w-10 md:hidden">
          <Menu className="h-4 w-4" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-full max-h-screen">
        <div className="flex h-full w-full flex-col">
          <DrawerHeader className="border-b px-4 py-4 ">
            <DrawerTitle className="text-lg font-semibold flex justify-between">
              Menu <ModeToggleButton />
            </DrawerTitle>
          </DrawerHeader>
          <ScrollArea className="flex-1 px-2 py-3">
            <div className="flex justify-start items-center px-2 py-3  ">
              {' '}
              <Avatar>
                <AvatarImage
                  src={userImage! || '/#'}
                  alt={`${userName} logo image`}
                />
                <AvatarFallback>
                  {userName?.substring(0, 1) || ''}
                </AvatarFallback>
              </Avatar>
              <p className=" items-center flex justify-between w-full rounded-md px-3 py-2 text-sm font-medium transition-colors">
                {' '}
                {userName}
                <span>Credits : 3</span>
              </p>
            </div>

            <nav className="flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground',

                    item.href.includes(pathName) &&
                      pathName.includes(item.href) &&
                      'bg-accent text-accent-foreground'
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.title}
                </a>
              ))}
            </nav>
          </ScrollArea>
          <div className="border-t p-4  hover:bg-accent hover:text-accent-foreground">
            <Button
              onClick={handleLogout}
              variant="ghost"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors w-full"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
