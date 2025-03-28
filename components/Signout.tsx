import { signOut } from 'next-auth/react';

export default function SignOut({ children }: { children: React.ReactNode }) {
  function handleSignOut() {
    signOut({ redirectTo: '/' });
  }
  return (
    <button className="w-full" onClick={handleSignOut}>
      {children}
    </button>
  );
}
