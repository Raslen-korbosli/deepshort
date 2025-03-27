import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Mail } from 'lucide-react';
import SignIn from './signIn';

export function LoginButtons() {
  return (
    <div className="space-y-4 px-8 text-center">
      <SignIn />
      <Button
        variant="outline"
        className={cn(
          'w-full flex items-center justify-start gap-2 text-primary bg-background  hover:bg-gray-50 border  py-5 px-8 rounded-md'
        )}
      >
        <FacebookIcon />
        Continue with Facebook
      </Button>
      <Button
        variant="outline"
        className={cn(
          'w-full flex items-center justify-start gap-2 text-primary bg-background   hover:bg-gray-50 border  py-5 px-8 rounded-md'
        )}
      >
        <Mail />
        Continue with Email
      </Button>
      <span className="mt-4 text-muted-foreground text-sm">
        {' '}
        only google authentication work{' '}
      </span>
    </div>
  );
}

// Facebook Icon SVG Component
function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <path
        fill="#1877F2"
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
      />
    </svg>
  );
}
