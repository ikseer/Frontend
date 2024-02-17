import IncrementAndDecrement from '../../components/IncrementAndDecrement';
import { LuTrash2 } from 'react-icons/lu';

export default function CartView() {
  return (
    <div className="grid grid-cols-12 bg-slate-100 dark:bg-zinc-950 items-center">
      {/* product */}
      <div className="col-span-5 flex items-center gap-x-2">
        <div className="w-[70px] ">
          <img src="https://i.suar.me/0nKwL/m" alt="temp" />
        </div>
        <div>
          <p>Product name</p>
          <p>extract info</p>
        </div>
      </div>
      {/* add & minus */}
      <div className="col-span-3 w-fit">
        <IncrementAndDecrement />
      </div>
      {/* Price */}
      <div className="col-span-3">${(130.563123132).toFixed(3)}</div>
      {/* trash */}
      <div className="col-span-1">
        <LuTrash2 />
      </div>
    </div>
  );
}
