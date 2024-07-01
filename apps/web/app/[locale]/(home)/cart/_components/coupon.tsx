"use client";
import { useZodForm } from "@/lib/use-zod-form";
import { Button } from "@ikseer/ui/components/ui/button";
import { FormInput } from "@ikseer/ui/components/ui/input";
import { FormProvider } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
	coupon: z.string(),
});

export function Coupon() {
	const form = useZodForm({
		schema: schema,
	});
	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit((data) => console.log(data))}>
				<h1>Coupon</h1>
				<FormInput name="coupon" />
				<Button type="submit" className="w-full">
					Apply your coupon
				</Button>
			</form>
		</FormProvider>
	);
}
