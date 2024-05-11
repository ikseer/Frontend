'use client';
import Footer from '@/components/site/Footer/Footer';
import Hero from './(home)/home/components/Hero/Hero';
import ShowProducts from './(home)/home/components/ShowProducts/ShowProducts';

export default function Home() {
  return (
    <main>
      <Hero />
      <ShowProducts />
      <Footer />
    </main>
  );
}
