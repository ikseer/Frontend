'use client';

// Components
import Footer from '@/components/Footer/Footer';

export default function Home() {
  console.log(process, 'process');
  return (
    <main className="mt-4 text-3xl font-bold ml-5">
      <p>Home page here current user is:</p>
      <Footer />
    </main>
  );
}
