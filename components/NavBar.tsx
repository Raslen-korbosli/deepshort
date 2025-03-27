import { auth } from '@/auth';
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
import { Youtube } from 'lucide-react';
import Link from 'next/link';
import LoginSignup from './LoginSignup';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import SignOut from './Signout';
import Image from 'next/image';
export default async function NavBar() {
  const session = await auth();

  return (
    <nav className="sticky top-0 z-50  backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="#home" scroll={true}>
          <div className="flex items-center space-x-2">
            {/* <Youtube className="text-red-500" size={32} /> */}
            <Image
              src="/logo.png"
              alt="nav logo"
              width={50}
              height={50}
              className="mr-0"
            />
            <span className="text-xl font-bold  ">DeepShort</span>
          </div>
        </Link>
        <div className="space-x-4 flex justify-center items-center">
          {session && session.user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage
                    src={session.user.image!}
                    alt={`${session.user.name} logo image`}
                  />
                  <AvatarFallback>
                    {session.user.name?.substring(0, 1)}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>Profile</DropdownMenuItem>

                  <DropdownMenuItem>Dashboard</DropdownMenuItem>
                  <SignOut>
                    {' '}
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                  </SignOut>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <LoginSignup />
          )}

          <Separator
            className="SeparatorRoot"
            orientation="vertical"
            style={{ height: '30px' }}
          />
          <ModeToggleButton />
        </div>
      </div>
    </nav>
  );
}
