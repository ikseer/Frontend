;
import Button from '@/components/site/Buttons/Button';
interface BasicSettingButtonType {
  onClick: () => void;
}

export default function BasicSettingButton({
  onClick,
}: BasicSettingButtonType) {
  return (
    <div className="mt-10 flex gap-x-2 items-center">
      <Button
        type="submit"
        title="Save"
        width="150px"
        height="42px"
        ButtonClassName="border-2 border-teal-600"
      />
      <Button
        type="button"
        title="Reset"
        width="150px"
        height="42px"
        onClick={onClick}
        ButtonClassName="bg-slate-100 border-2  border-gray-200 hover:bg-gray-200
            hover:text-zinc-500  text-teal-600 
            dark:bg-zinc-950 dark:text-slate-400 font-medium border-1 border-slate-200
            dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-slate-300
            "
        background="bg-white"
      />
    </div>
  );
}
