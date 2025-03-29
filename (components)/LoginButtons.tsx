'use client';
import { Button } from '@/(components)/ui/button';
import { Mail } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';

export function LoginButtons() {
  const signInClick = (provider: string) => {
    signIn(provider, { redirectTo: DEFAULT_LOGIN_REDIRECT });
  };
  return (
    <div className="space-y-4 px-8 text-center">
      <Button
        variant="outline"
        className={
          ' active:bg-foreground/20 dark:active:bg-foreground/20 cursor-pointer  w-full flex items-center justify-start gap-2 text-primary bg-background  hover:bg-foreground/20 dark:hover:bg-foreground/20 border  py-5 px-8 rounded-md'
        }
        onClick={() => signInClick('google')}
      >
        <GoogleIcon />
        Continue with Google
      </Button>
      <Button
        variant="outline"
        className={
          ' active:bg-foreground/20 dark:active:bg-foreground/20 w-full flex items-center  justify-start gap-2 text-primary bg-background  hover:bg-foreground/20 border dark:hover:bg-foreground/20  py-5 px-8 rounded-md'
        }
      >
        <FacebookIcon />
        Continue with Facebook
      </Button>
      <Button
        variant="outline"
        className={
          ' active:bg-foreground/20 dark:active:bg-foreground/20 w-full dark:hover:bg-foreground/20 flex items-center  justify-start gap-2 text-primary bg-background   hover:bg-foreground/20 border  py-5 px-8 rounded-md'
        }
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
function GoogleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.75h3.57c2.08-1.92 3.28-4.74 3.28-8.07z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-1 7.28-2.69l-3.57-2.75c-.99.67-2.26 1.07-3.71 1.07-2.87 0-5.3-1.94-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.67-.35-1.39-.35-2.09s.13-1.42.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.46 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.86-2.59 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}
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
