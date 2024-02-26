'use client';
import CartHeader from './components/cartView/CartHeader';
import CartView from './components/cartView/CartView';
import Coupon from './components/RightSideView/Coupon';
import OrderSummary from './components/RightSideView/OrderSummary';
import PaymentMethod from './components/RightSideView/Payment';
import RightSideContainer from './components/RightSideView/RightSideContainer';
import useCart from '@/store/cart/cart';
import NoItem from './components/NoItem/NoItem';

export default function ShowShoppingItems() {
  const { cartItems } = useCart();
  console.log(cartItems, 'cart items');
  return (
    <>
      {cartItems ? (
        <div className="p-5 lg:flex justify-between ">
          <div className="w-full lg:w-7/12 ">
            <h1>Shopping Cart</h1>
            <div className=" flex justify-between">
              <div>
                <CartHeader />
                <CartView cartItems={cartItems} />
              </div>
            </div>
          </div>

          {/* left side */}
          <div className="w-full lg:w-4/12 md:flex lg:block justify-between gap-x-2 mt-20 lg:mt-0">
            <RightSideContainer>
              <Coupon />
            </RightSideContainer>
            <RightSideContainer>
              <OrderSummary />
            </RightSideContainer>
            <RightSideContainer>
              <PaymentMethod />
            </RightSideContainer>
          </div>
        </div>
      ) : (
        <NoItem />
      )}
    </>
  );
}
