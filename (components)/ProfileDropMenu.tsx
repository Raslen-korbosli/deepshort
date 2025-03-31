'use client';
import {
  CreditCardIcon,
  Grid2X2,
  LogOut,
  Sparkles,
  User as userIcon,
} from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/(components)/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/(components)/ui/dropdown-menu';
import { User } from '@prisma/client';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

export default function ProfileDropMenu({
  user,
  isMobile,
  children,
}: {
  user: User;
  isMobile: boolean;
  children: React.ReactNode;
}) {
  const links = [
    { linkTitle: ' Dashboard', href: '/dashboard/home', icon: Grid2X2 },
    { linkTitle: 'Billing', href: '/dashboard/billing', icon: CreditCardIcon },
    { linkTitle: 'Account', href: '/dashboard/account', icon: userIcon },
  ];
  const handleLogout = () => {
    signOut({ redirectTo: '/' });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        side={isMobile ? 'bottom' : 'right'}
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage src={user.image!} alt={user.name!} />
              <AvatarFallback className="rounded-lg">
                {user.name?.at(0)}
              </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">{user.name}</span>
              <span className="truncate text-xs">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Sparkles />
            Upgrade to Pro
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {links.map((link) => (
            <Link href={link.href} key={link.linkTitle}>
              <DropdownMenuItem>
                {' '}
                <link.icon />
                {link.linkTitle}
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
