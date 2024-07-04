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
			<form
				onSubmit={form.handleSubmit((data) => console.log(data))}
				className="px-2 py-6 space-y-3 border rounded-md shadow-xl"
			>
				<h1 className="text-2xl font-bold">Coupon</h1>
				<FormInput name="coupon" className="rounded-md" />
				<Button type="submit" className="w-full">
					Apply your coupon
				</Button>
			</form>
		</FormProvider>
	);
}
