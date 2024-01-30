import Image from 'next/image';
import Main from '../../public/images/auth/Main.svg';
import './globals.css';

export default function Home() {
  const stylediv = {
    height: '88vh',
    width: '100vw',
  };

  return (
    <main>
      <Image style={stylediv} src={Main} alt="main iamge" />
    </main>
  );
}
