"use client";
import { Link } from "@/navigation";
import { Button } from "@ikseer/ui/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableRow,
} from "@ikseer/ui/components/ui/table";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function PaymentSuccessfully() {
	const t = useTranslations("Pricing");

	return (
		<main className="w-full py-10 flex items-center justify-center">
			<section className="w-[600px] space-y-5 flex items-center justify-center flex-col ">
				<Image
					src="/payment/celebrate.png"
					alt="payment celebration"
					width={300}
					height={300}
				/>
				<section className="space-y-1 text-center">
					<h1 className="text-3xl font-bold">{t.rich("successful")}</h1>
					<p>{t("complete-payment")}</p>
				</section>
				<PaymentTable />
				<Button className="w-full">
					<Link href="/">{t("go-to-home-page")}</Link>
				</Button>
			</section>
		</main>
	);
}

export function PaymentTable() {
	const t = useTranslations("Pricing");
	const searchParams = useSearchParams();
	const paidAmount = searchParams.get("amount_cents");
	const paymentMethod = searchParams.get("source_data.sub_type");
	const orderId = searchParams.get("order");

	const invoices = [
		{
			label: t("paid-amount"),
			value: Number(paidAmount) / 100,
		},
		{
			label: t("payment-method"),
			value: paymentMethod,
		},
		{
			label: t("order-id"),
			value: orderId,
		},
	];

	return (
		<Table className="border-[2px] border-gray-300">
			<TableBody>
				{invoices.map((invoice) => (
					<TableRow key={invoice.label}>
						<TableCell className="font-medium">{invoice.label}</TableCell>
						<TableCell>{invoice.value}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
