import { Button } from "@ikseer/ui/src/components/ui/button";
import { TbShoppingBag } from "react-icons/tb";
export default function BuyNowButton() {
	return (
		<div>
			<Button className="mx-2 px-2 py-[23px] rounded-lg w-[120px] h-[30px]">
				<TbShoppingBag /> Buy now
			</Button>
		</div>
	);
}
