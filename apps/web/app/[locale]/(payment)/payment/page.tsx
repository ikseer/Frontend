"use client";
import Radio from "@/components/radio";
import Spinner from "@/components/spinner";
import { useZodForm } from "@/lib/use-zod-form";
import useCreateOrder, {
	useCreatePaymobOrderId,
	useGetPaymobToken,
} from "@ikseer/api/hooks/orders";
import { UserIdCookie } from "@ikseer/lib/cookies.client";
import { Button } from "@ikseer/ui/components/ui/button";
import { FormInput } from "@ikseer/ui/components/ui/input";
import { FormProvider } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
	owner: z.string(),
	location: z.string(),
	phone: z.string(),
	payment: z.string(),
});

export default function Payment() {
	const getPaymobToken = useGetPaymobToken((data) => {
		console.log(data);
		window.open(
			`https://accept.paymob.com/api/acceptance/iframes/452689?payment_token=${data.token}`,
		);
	});

	const createPaymobOrderId = useCreatePaymobOrderId((data) => {
		console.log(data, "useCreatePaymobOrderId");
		getPaymobToken.mutate({
			amountInCents: data.amount_cents,
			orderId: data.paymob_order_id,
		});
	});

	const createOrder = useCreateOrder((order) => {
		console.log(order, "order");
		createPaymobOrderId.mutate(order);
	});

	const form = useZodForm({
		schema: schema,
	});

	const userId = UserIdCookie.get() as string;

	return (
		<FormProvider {...form}>
			<form
				className="space-y-6 page-container"
				onSubmit={form.handleSubmit((data: _) => {
					createOrder.mutate({ ...data, user: userId });
				})}
			>
				<h1 className="text-2xl font-bold">Checkout</h1>
				<FormInput name="owner" label="Owner" className="rounded-md" />
				<FormInput name="location" label="Location" className="rounded-md" />
				<FormInput name="phone" label="Phone" className="rounded-md" />
				<section className="flex gap-x-6">
					<div className="flex items-center gap-x-2">
						<Radio name="payment" value="paymob" />
						<label htmlFor="paymob">Paymob</label>
					</div>
					<div className="flex items-center gap-x-2">
						<Radio name="payment" value="noPayment" />
						<label htmlFor="noPayment">Pay when order reach</label>
					</div>
				</section>
				<Button variant="submit" disabled={createOrder.isPending}>
					{createOrder.isPending ? <Spinner /> : "Create Order"}
				</Button>
			</form>
		</FormProvider>
	);
}
