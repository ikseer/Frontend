// Images
import Background from './Background.svg';

// Interface
interface SettingContainerType {
  mainText: string;
  secondaryText: string;
}

export default function SettingContainer({
  mainText,
  secondaryText,
}: SettingContainerType) {
  return (
    <div
      className="mt-6 p-6 rounded-lg  bg-cover bg-no-repeat "
      style={{ backgroundImage: `url(${Background.src})` }}
    >
      <div className="flex items-center">
        <h2 className="mr-2 mb-2 text-4xl dark:text-gray-200">Setting</h2>
        <h3
          className=" py-2 px-4 border-b-2
        border-slate-400 bg-slate-200 text-gray-800 
        dark:border-gray-800 dark:bg-zinc-950 dark:text-gray-100 rounded-xl

        "
        >
          {mainText}
        </h3>
      </div>
      <p className="dark:text-gray-300 ml-2">{secondaryText}</p>
    </div>
  );
}
