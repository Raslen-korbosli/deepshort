import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';
import { LoginButtons } from './LoginButtons';
export default function LoginSignup() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex gap-2">
          <Button variant="outline" className="cursor-pointer">
            Log In
          </Button>
          <Button className="hidden sm:block cursor-pointer">Sign Up</Button>
        </div>
      </DialogTrigger>

      <DialogContent className="sm:grid sm:grid-cols-2 sm:grid-rows-3 lg:h-[550px] lg:w-[800px] sm:h-[450px] sm:w-[600px]  h-[450px] w-[300px] p-0 overflow-hidden  border-0 bg-secondary ">
        <div>
          <DialogHeader className="row-span-2 col-start-1 row-start-1 p-8 flex-1 text-center">
            <DialogTitle className=" text-xl sm:text-3xl font-semibold">
              Log in or sign up in seconds
            </DialogTitle>
            <DialogDescription className="">
              Use your email or another service to continue with deepshort (it’s
              free)!
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
  );
}
