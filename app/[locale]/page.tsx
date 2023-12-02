import SwitchMode from "./switchMode"
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');
  return (
    <main className="flex items-center justify-center h-screen flex-col">
        <h1 className="dark:bg-slate-400"> {t('title')} </h1>
    </main>
  )
}
