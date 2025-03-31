'use client';

import { useMediaQuery } from '@/app/hooks/useMediaQuery';
import { ModeToggleButton } from '@/(components)/ModeToggleButton';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/(components)/ui/dropdown-menu';
import { Separator } from '@/(components)/ui/separator';
import { User } from '@prisma/client';
import { ChevronsUpDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import LoginSignup from './LoginSignup';
import ProfileDropMenu from './ProfileDropMenu';
import SignOut from './Signout';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';

const DesktopUserMenu = ({ user }: { user: User }) => (
  <div className="flex gap-4 justify-center items-center">
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="shadow-sm border-2 size-10 cursor-pointer">
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
    <Link href="/dashboard/create">
      {' '}
      <Button className="cursor-pointer"> dashboard</Button>
    </Link>
  </div>
);

const NavActions = ({ user, isMobile }: { user?: User; isMobile: boolean }) => {
  if (isMobile) {
    return user ? (
      <div className="flex items-center justify-center gap-2">
        <ProfileDropMenu isMobile={isMobile} user={user}>
          <Button
            size="lg"
            className="bg-primary-foreground  text-primary hover:text-primary-foreground "
          >
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage src={user.image!} alt={user.name!} />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>

            <ChevronsUpDown className="ml-auto size-4" />
          </Button>
        </ProfileDropMenu>
        <ModeToggleButton />
      </div>
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
    <nav
      className="sticky w-full top-0 z-50 backdrop-blur-md shadow-sm "
      id="home"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="#home">
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
