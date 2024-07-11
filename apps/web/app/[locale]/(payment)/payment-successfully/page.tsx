"use client";

import { useRouter } from "@/navigation";
import { useSearchParams } from "next/navigation";

export default function PaymentSuccessfully() {
	const router = useRouter();
	const searchParams = useSearchParams();

	return (
		<div className="bg-gray-100 dark:bg-gray-900 flex items-center justify-center min-h-screen">
			<div className="bg-white dark:bg-black p-8 rounded-lg shadow-md text-center">
				<div className="text-6xl text-green-500 mb-4">🎉</div>
				<h1 className="text-2xl font-bold mb-2">Payment Successful!</h1>
				<p className="text-gray-700 dark:text-gray-300 mb-4">
					Thank you for your payment. Your transaction was completed
					successfully.
				</p>
				<div className="text-left">
					<p>
						<strong>Transaction ID:</strong> {searchParams.get("id")}
					</p>
					<p>
						<strong>Amount Paid:</strong> EGP{" "}
						{(
							Number.parseInt(searchParams.get("amount_cents") as string) / 100
						).toFixed(2)}
					</p>
					<p>
						<strong>Order ID:</strong> {searchParams.get("order")}
					</p>
					<p>
						<strong>Payment Date:</strong>{" "}
						{new Date(
							searchParams.get("created_at") as string,
						).toLocaleDateString()}
					</p>
				</div>
				<button
					type="button"
					className="mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
					onClick={() => router.push("/")}
				>
					Continue Shopping
				</button>
			</div>
		</div>
	);
}
