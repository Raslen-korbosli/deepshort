'use client';

import { useMediaQuery } from '@/app/hooks/useMediaQuery';
import { ModeToggleButton } from '@/components/ModeToggleButton';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { User } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import LoginSignup from './LoginSignup';
import MobileNavBar from './MobileNavBar';
import SignOut from './Signout';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const DesktopUserMenu = ({ user }: { user: User }) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Avatar>
        <AvatarImage src={user.image!} alt={`${user.name} logo image`} />
        <AvatarFallback>{user.name?.substring(0, 1)}</AvatarFallback>
      </Avatar>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Dashboard</DropdownMenuItem>
        <SignOut>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </SignOut>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
);

// Separate component for right-side actions
const NavActions = ({ user, isMobile }: { user?: User; isMobile: boolean }) => {
  if (isMobile) {
    return user ? (
      <MobileNavBar userName={user?.name || ''} userImage={user?.image || ''} />
    ) : (
      <div className="flex gap-4">
        <LoginSignup />
        <Separator
          className="SeparatorRoot"
          orientation="vertical"
          style={{ height: '30px' }}
        />
        <ModeToggleButton />
      </div>
    );
  }

  return (
    <div className="sm:flex hidden space-x-4 justify-center items-center">
      {user ? <DesktopUserMenu user={user} /> : <LoginSignup />}
      <Separator
        className="SeparatorRoot"
        orientation="vertical"
        style={{ height: '30px' }}
      />
      <ModeToggleButton />
    </div>
  );
};

export default function NavBar({ user }: { user?: User }) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" scroll={true}>
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="nav logo"
              width={50}
              height={50}
              className="mr-0"
            />
            <span className="text-xl font-bold">DeepShort</span>
          </div>
        </Link>

        <NavActions user={user} isMobile={isMobile} />
      </div>
    </nav>
  );
}
