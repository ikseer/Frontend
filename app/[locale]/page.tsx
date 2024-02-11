'use client';
import Auth from '@/modules/Auth/Auth';
// import { Link } from '@/navigation';
import Footer from '@/components/Footer/Footer';
const auth = new Auth();
export default function Home() {
  const user = auth.getUserInfo();

  return (
    <main className="mt-4 text-3xl font-bold ml-5">
      {/* <Link href="/profile">Profile</Link> */}
      <p>Home page here current user is:</p>
      {JSON.stringify(user)}
      <Footer />
    </main>
  );
}
