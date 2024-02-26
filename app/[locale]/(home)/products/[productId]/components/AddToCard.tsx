import { LuShoppingCart } from 'react-icons/lu';
import Button from '@/components/Buttons/Button';
import useCart from '@/store/cart/cart';
import { ProductType } from '@/types/product.types';
interface AddToCardButtonProps {
  product: ProductType;
}
export default function AddToCardButton({ product }: AddToCardButtonProps) {
  const { addItemToCart } = useCart();
  const handleOnClick = () => {
    addItemToCart(product);
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
