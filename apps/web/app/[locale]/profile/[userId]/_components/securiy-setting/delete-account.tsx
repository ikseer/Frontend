import { ErrorMsg } from "@/components/site/error-msg";
import { Button } from "@ikseer/ui/src/components/ui/button";

export default function DeleteAccount() {
	return (
		<div className="flex items-center justify-between">
			<div>
				<h3 className="text-2xl font-bold font-weight">Delete Your Account</h3>
				<ErrorMsg>Danger one, please be careful </ErrorMsg>
			</div>
			<Button variant="danger">Delete my account</Button>
		</div>
	);
}
