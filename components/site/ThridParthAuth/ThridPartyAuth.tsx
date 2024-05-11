// Main
import Image from 'next/image';
import { Link } from '../../../navigation';

// Interface
interface AuthShapeDataType {
  authImage: string;
  text?: string;
  width?: string;
}

export default function AuthShape({
  authImage,
  text,
  width,
}: AuthShapeDataType) {
  const widthStyle = {
    width,
  };
  return (
    <section
      className="bg-white dark:bg-zinc-900  mb-6 rounded "
      style={widthStyle}
    >
      <Link href="/" className="flex items-center justify-center  py-2 ">
        <Image
          src={authImage}
          alt="auth image"
          className="ltr:mr-6 rtl:ml-6 w-6 h-6 inline-block"
        />
        <span>{text}</span>
      </Link>
    </section>
  );
}
