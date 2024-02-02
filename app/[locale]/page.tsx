'use client';
import Auth from '@/modules/Auth/Auth';

const auth = new Auth();
export default function Home() {
  const user = auth.getUserInfo();

  return (
    <main className="mt-4 text-3xl font-bold ml-5">
      Home page here current user is:
      {JSON.stringify(user)}      
    </main>
  );
}
