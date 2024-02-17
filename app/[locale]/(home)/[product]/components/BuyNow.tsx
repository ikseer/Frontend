import Button from '@/components/Buttons/Button';
import { TbShoppingBag } from 'react-icons/tb';
export default function BuyNowButton() {
  return (
    <div>
      <Button
        title="Buy now"
        width="120px"
        height="30px"
        startIcon={<TbShoppingBag />}
        ButtonClassName="mx-2 px-2 py-[23px] rounded-lg "
      />
    </div>
  );
}
