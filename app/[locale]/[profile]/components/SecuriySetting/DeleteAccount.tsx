'use client';

// Main
;

// Components
import Button from '@/components/site/Buttons/Button';
import { useDeleteAccount } from '@/customHooks/Auth/useDeleteAccount';

export default function DeleteAccount() {
  const { mutate } = useDeleteAccount();
  const handleDeleteAccount = () => {
    mutate();
  };
  return (
    <div className="w-5/12">
      <div className="mb-3">
        <h1>Delete Your Account</h1>
        <p className="text-red-800">Danger one, please be careful</p>
      </div>

      <Button
        type="submit"
        title="Delete my account"
        width="200px"
        height="42px"
        ButtonClassName="bg-slate-100 border-2  border-gray-200 hover:bg-gray-200
                 hover:text-red-500  text-red-400 
                dark:bg-zinc-950 dark:text-red-500 font-medium border-1 border-slate-200
                dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-red-700
                "
        background="bg-white"
        onClick={handleDeleteAccount}
      />
    </div>
  );
}
