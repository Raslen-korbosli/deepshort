import { ModeToggleButton } from '@/components/ModeToggleButton';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';
import { LoginButtons } from './LoginButtons';
export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50  backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="#home" scroll={true}>
          <div className="flex items-center space-x-2">
            {/* <Youtube className="text-red-500" size={32} /> */}
            <Image
              src={'/logo.png'}
              alt="nav logo"
              width={50}
              height={50}
              className="mr-0"
            />
            <span className="text-xl font-bold  ">DeepShort</span>
          </div>
        </Link>
        <div className="space-x-4 flex justify-center items-center">
          <Dialog>
            <DialogTrigger asChild>
              <div className="flex gap-2">
                <Button variant="outline" className="cursor-pointer">
                  Log In
                </Button>
                <Button className="hidden sm:block cursor-pointer">
                  Sign Up
                </Button>
              </div>
            </DialogTrigger>

            <DialogContent className="sm:grid sm:grid-cols-2 sm:grid-rows-3 lg:h-[550px] lg:w-[800px] sm:h-[450px] sm:w-[600px]  h-[450px] w-[300px] p-0 overflow-hidden  border-0 bg-secondary ">
              <div>
                <DialogHeader className="row-span-2 col-start-1 row-start-1 p-8 flex-1 text-center">
                  <DialogTitle className=" text-xl sm:text-3xl font-semibold">
                    Log in or sign up in seconds
                  </DialogTitle>
                  <DialogDescription className="">
                    Use your email or another service to continue with deepshort
                    (it’s free)!
                  </DialogDescription>
                </DialogHeader>
                <LoginButtons />
              </div>
              <Image
                src="/loginImage.png"
                alt="login image"
                className="row-span-3 col-start-2 row-start-1 scale-[1.01] sm:block hidden  "
                layout="fill"
                objectFit="cover"
              />
            </DialogContent>
          </Dialog>

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
