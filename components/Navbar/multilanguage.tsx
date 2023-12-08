import {Link} from '../../navigation';

export default function MultiLanguage() {
  return (
    <main className="flex items-center justify-center h-screen flex-col">
      <Link href="/" locale="ar" className="text-zinc-50">Switch to arabic</Link>
      <Link href="/" locale="en" className="text-zinc-50">Switch to English</Link>
    </main>
  )
}
