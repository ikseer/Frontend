import { LuShoppingCart } from 'react-icons/lu';
import Button from '@/components/Buttons/Button';

export default function AddToCardButton() {
    const handleOnClick = () => {
        console.log("AddToCardButton")
    }
  return (
    <div>
      <Button 
      title="Add to card"
      width="120px"
      height="30px"
      onClick={handleOnClick}
      startIcon={<LuShoppingCart />}
       />
    </div>
  );
}
