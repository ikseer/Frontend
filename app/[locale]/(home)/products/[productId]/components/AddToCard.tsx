import { LuShoppingCart } from 'react-icons/lu';
import Button from '@/components/Buttons/Button';

export default function AddToCardButton() {
  const handleOnClick = () => {
    console.log('AddToCardButton');
  };
  return (
    <Button
      title="Add to card"
      width="140px"
      height="30px"
      onClick={handleOnClick}
      startIcon={<LuShoppingCart />}
      ButtonClassName="mx-2 px-2 py-[23px] rounded-lg "
    />
  );
}
