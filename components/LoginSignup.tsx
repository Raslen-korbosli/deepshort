import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import LoginPopOut from './LoginPopOut';
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

      <LoginPopOut />
    </Dialog>
  );
}
