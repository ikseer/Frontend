import CartHeader from './components/CartHeader';
import CartView from './components/CartView';
import Coupon from './components/Coupon';
import OrderSummary from './components/OrderSummary';
import PaymentMethod from './components/Payment';
import LeftSideContainer from './components/LeftSideContainer';

export default function ShowShoppingItems() {
  return (
    <div className="p-5">
      <h1>Shopping Cart</h1>
      <div className=" flex justify-between">
        <div className="w-7/12">
          <CartHeader />
          <CartView />
        </div>
        {/* left side */}
        <div className="w-4/12">
          <LeftSideContainer>
            <Coupon />
          </LeftSideContainer>
          <LeftSideContainer>
            <OrderSummary />
          </LeftSideContainer>
          <LeftSideContainer>
            <PaymentMethod />
          </LeftSideContainer>
        </div>
      </div>
    </div>
  );
}
