'use client';
import { useForm } from 'react-hook-form';
import InputField from '@/components/site/InputField/InputField';
import Button from '@/components/site/Buttons/Button';
interface CouponType {
  coupon: string;
}
export default function Coupon() {
  const { register, handleSubmit, formState } = useForm<CouponType>();
  const { errors } = formState;
  const handleSubmitCoupon = (data: CouponType) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(handleSubmitCoupon)}>
      <h1>Coupon</h1>
      <InputField id="coupon" register={register} errors={errors} />
      <Button
        title="Apply your coupon"
        width="100%"
        height="30px"
        type="submit"
      />
    </form>
  );
}
