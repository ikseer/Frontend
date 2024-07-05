"use client";
import { ErrorMsg } from "@/components/error-msg";
import Radio from "@/components/radio";
import Spinner from "@/components/spinner";
import { useZodForm } from "@/lib/use-zod-form";
import { useRouter } from "@/navigation";
import useCreateOrder, {
	useCreatePaymobOrderId,
	useGetPaymobToken,
} from "@ikseer/api/hooks/orders";
import { paymentSchema } from "@ikseer/api/services/orders";
import { UserIdCookie } from "@ikseer/lib/cookies.client";
import { Button } from "@ikseer/ui/components/ui/button";
import { FormInput } from "@ikseer/ui/components/ui/input";
import { Label } from "@ikseer/ui/components/ui/label";
import { useState } from "react";
import { FormProvider } from "react-hook-form";

export default function Payment() {
	const router = useRouter();
	const [payNow, setPayNow] = useState(true);
	const getPaymobToken = useGetPaymobToken((data) => {
		window.open(
			`https://accept.paymob.com/api/acceptance/iframes/831751?payment_token=${data.token}`,
			"_blank",
		);
	});

	const createPaymobOrderId = useCreatePaymobOrderId((data) => {
		getPaymobToken.mutate({
			amountInCents: data.amount_cents,
			orderId: data.paymob_order_id,
		});
	});

	const createOrder = useCreateOrder((order) => {
		if (payNow) createPaymobOrderId.mutate(order);
		else router.push("/orders");
	});

	const form = useZodForm({
		schema: paymentSchema,
	});

	const userId = UserIdCookie.get() as string;
	return (
		<FormProvider {...form}>
			<form
				className="page-container space-y-6"
				onSubmit={form.handleSubmit((data) => {
					if (data.payment === "payLater") {
						setPayNow(false);
					}
					createOrder.mutate({ ...data, user: userId });
				})}
			>
				<h1 className="text-2xl font-bold">Add a new address</h1>
				<div className="gap-x-4 flex items-center">
					<FormInput
						name="first_name"
						label="First name"
						className="rounded-md"
					/>
					<FormInput
						name="last_name"
						label="Last name"
						className="rounded-md"
					/>
				</div>
				<FormInput name="country" label="Country" className="rounded-md" />
				<FormInput name="city" label="City" className="rounded-md" />
				<FormInput name="street" label="Street" className="rounded-md" />
				<FormInput name="zip_code" label="zip_code" className="rounded-md" />
				<FormInput name="phone" label="Phone" className="rounded-md" />
				<FormInput name="email" label="Email" className="rounded-md" />
				<section className="space-y-2">
					<section className="gap-x-6 flex">
						<div className="gap-x-2 flex items-center">
							<Radio name="payment" value="payNow" />
							<Label htmlFor="payNow">Pay now</Label>
						</div>
						<div className="gap-x-2 flex items-center">
							<Radio name="payment" value="payLater" />
							<Label htmlFor="payLater">Pay later</Label>
						</div>
					</section>
					{form.formState.errors.payment?.message && (
						<ErrorMsg>{form.formState.errors.payment?.message}</ErrorMsg>
					)}
				</section>
				<Button variant="submit" disabled={createOrder.isPending}>
					{createOrder.isPending ? (
						<>
							{" "}
							Create Order &nbsp; <Spinner />
						</>
					) : (
						"Create Order"
					)}
				</Button>
			</form>
		</FormProvider>
	);
}
