interface PinNumberType {
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PinNumber({ id, onChange }: PinNumberType) {
  return (
    <div className="flex flex-col ">
      <input
        type="text"
        className="rtl:ml-3 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:scale-110 focus:border-slate-200 focus:ring-slate-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-zinc-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
        placeholder="-"
        id={id}
        onBlur={(e) => onChange(e)}
        data-hs-pin-input-item
      />
    </div>
  );
}
