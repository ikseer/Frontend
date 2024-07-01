"use client";
import { Button } from "@ikseer/ui/components/ui/button";
import { FormInput } from "@ikseer/ui/components/ui/input";
import { FormProvider, useForm } from "react-hook-form";
interface CouponType {
	coupon: string;
}
export default function Coupon() {
	const form = useForm<CouponType>();
	const handleSubmitCoupon = (data: { coupon: string }) => {
		console.log(data);
	};
	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(handleSubmitCoupon)}>
				<h1>Coupon</h1>
				<FormInput name="coupon" />
				<Button type="submit" className="w-full h-[30px]">
					Apply your coupon
				</Button>
			</form>
		</FormProvider>
	);
}
