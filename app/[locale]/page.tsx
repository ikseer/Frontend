'use client';


import Footer from '@/components/Footer/Footer';
import Hero from "./(home)/home/components/Hero/Hero"
import ShowProducts from "./(home)/home/components/ShowProducts/ShowProducts"



export default function Home() {
  console.log(process, 'process');
  return (
    <main >
      <Hero />
      <ShowProducts />
      <Footer />
    </main>
  );
}
