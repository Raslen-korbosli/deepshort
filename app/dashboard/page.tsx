import { auth } from '@/auth';

export default async function page() {
  const session = await auth();

  return (
    <div className="py-36 px-8">
      <h1>dashboard</h1>
      <h1 className="w-full flex gap-2 flex-col">
        <p>{session?.user?.name}</p> <span> {session?.user?.email} </span>
      </h1>
    </div>
  );
}
