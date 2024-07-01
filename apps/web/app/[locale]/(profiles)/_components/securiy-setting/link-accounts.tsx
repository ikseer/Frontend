import { Button } from "@ikseer/ui/components/ui/button";
import Image from "next/image";

export default function LinkAccounts() {
	return (
		<div>
			<div className="mb-6">
				<h3 className="text-2xl font-bold font-weight">Link Accounts</h3>
				<p className="text-gray-400">
					Linked accounts will help in fast log in and better personalization.
				</p>
			</div>
			<section className="space-y-3">
				<Account href="/auth/google.svg" alt="Google" button="Link Google" />
				<Account
					href="/auth/facebook.svg"
					alt="Facebook"
					button="Link Facebook"
				/>
				<Account href="/auth/apple.svg" alt="Apple" button="Link Apple" />
			</section>
		</div>
	);
}

function Account({
	href,
	alt,
	button,
}: {
	href: string;
	alt: string;
	button: string;
}) {
	return (
		<section className="flex items-center justify-between p-4 border-2 rounded-md border-zinc-100 dark:border-zinc-400 bg-zinc-200 dark:bg-zinc-800">
			<Image src={href} alt={alt} width={30} height={30} />
			<Button>{button}</Button>
		</section>
	);
}
