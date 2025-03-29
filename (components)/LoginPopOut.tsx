import Image from 'next/image';
import { LoginButtons } from './LoginButtons';
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

export default function LoginPopOut() {
  return (
    <DialogContent className="sm:grid sm:grid-cols-2 sm:grid-rows-3 lg:h-[550px] lg:w-[800px] sm:h-[450px] border-b-0 sm:w-[600px]  h-[450px] w-[300px] p-0 overflow-hidden  border-0 bg-secondary ">
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
        src="/loginImage.webp"
        alt="login image"
        className="row-span-3 col-start-2 row-start-1 scale-[1.01] sm:block hidden  "
        layout="fill"
        objectFit="cover"
      />
    </DialogContent>
  );
}
