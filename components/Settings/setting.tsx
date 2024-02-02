// import BackgroundImage from './bg.svg'
interface SettingContainerType {
  mainText: string;
  secondaryText: string;
}

export default function SettingContainer({
  mainText,
  secondaryText,
}: SettingContainerType) {
  return (
    <div className="mt-6 bg-zinc-950 p-8 rounded-lg">
      <div className="flex items-center">
        <h2 className="mr-2 text-4xl dark:text-gray-200">Setting</h2>
        <h3 className="dark:bg-slate-400 rounded-md dark:text-zinc-950 py-1 px-3">
          {mainText}
        </h3>
      </div>
      <p className="dark:text-gray-300">{secondaryText}</p>
    </div>
  );
}
