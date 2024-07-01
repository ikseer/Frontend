import { Link } from "@/navigation";
import { Button } from "@ikseer/ui/components/ui/button";

export default function PaymentMethod() {
	return (
		<section>
			<Link href="payment/checkout">
				<Button>Checkout</Button>
			</Link>
		</section>
	);
}
