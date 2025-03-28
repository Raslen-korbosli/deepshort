import { auth } from '@/auth';

export default async function page() {
  const session = await auth();
  
  return (
    <div>
      dashboard
      <p>{JSON.stringify(session)}</p>
    </div>
  );
}
