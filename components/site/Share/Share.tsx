import { LuShare } from 'react-icons/lu';
interface ShareType {
  ShareLink: string;
  ShareText: string;
}
export default function Share({ ShareLink, ShareText }: ShareType) {
  console.log(ShareLink);

  return (
    <div className="flex gap-x-1 items-center cursor-pointer">
      <div className=" py-2 px-3 rounded-md border-[1px] border-gray-500 border-solid dark:border-zinc-700">
        <LuShare />
      </div>
      <div>
        <p> {ShareText}</p>
      </div>
    </div>
  );
}
