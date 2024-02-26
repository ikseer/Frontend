'use client';
import { useEffect } from 'react';
import Footer from '@/components/Footer/Footer';
import Hero from "./(home)/home/components/Hero/Hero"
import ShowProducts from "./(home)/home/components/ShowProducts/ShowProducts"
import storeProfile from "@/store/profile/profile"
import Auth from '@/modules/Auth/Auth'
import { useGetProfile } from '@/customHooks/Profile/useProfile';

export default function Home() {
  const auth = new Auth()
  const enabled = auth.isRegister()
  const {setUserInfo} = storeProfile()
  const {data} = useGetProfile(enabled)
  useEffect(() => {
    if(data){
      const newData = {
        firstName: data.first_name, 
        lastName: data.last_name,
        image: data.image,
      }
       setUserInfo(newData)
      }
  }, [data, setUserInfo])

  return (
    <main >
      <Hero />
      <ShowProducts />
      <Footer />
    </main>
  );
}
