import { LuShare } from 'react-icons/lu';
interface ShareType {
  ShareLink: string;
  ShareText: string;
}
export default function Share({ ShareLink, ShareText }: ShareType) {
  console.log(ShareLink);
  
  return (
    <div>
      <LuShare />
      <div>
        <p> {ShareText}</p>
      </div>
    </div>
  );
}
