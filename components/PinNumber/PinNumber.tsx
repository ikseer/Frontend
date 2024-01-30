interface PinNumberDataType {
  count: number;
  PinNumberClassName?: string,
}

export default function PinNumber({ count, PinNumberClassName }: PinNumberDataType) {
  const prepareContent = () => {
    const firstComponent = (
      <input
        type="text"
        className="rtl:ml-2 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:scale-110 focus:border-slate-200 focus:ring-slate-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-zinc-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
        placeholder="-"
        data-hs-pin-input-item
        autoFocus
      />
    );
    const component = (
      <input
        type="text"
        className="block w-[38px] text-center border-gray-200 rounded-md text-sm focus:scale-110 focus:border-slate-200 focus:ring-slate-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-zinc-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
        placeholder="-"
        data-hs-pin-input-item
      />
    );
    const content = [];
    content.push(firstComponent);
    for (let i = 0; i < count - 1; i++) {
      content.push(component);
    }
    return content;
  };

  return (
    <div className={`flex space-x-3 justify-center ${PinNumberClassName? PinNumberClassName: ''} `} data-hs-pin-input>
        {...prepareContent()}
    </div>
  );
}

