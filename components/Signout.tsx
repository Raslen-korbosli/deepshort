import { signOut } from '@/auth';

export default function SignOut({ children }: { children: React.ReactNode }) {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button className="w-full" type="submit">
        {children}
      </button>
    </form>
  );
}
