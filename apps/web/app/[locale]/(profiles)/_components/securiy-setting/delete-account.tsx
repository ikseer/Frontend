import { ErrorMsg } from "@/components/error-msg";
import { DeleteAccountDiaglog } from "./delete-account-alert-dialog";

export default function DeleteAccount() {
	return (
		<div className="flex items-center justify-between">
			<div>
				<h3 className="text-2xl font-bold font-weight">Delete Your Account</h3>
				<ErrorMsg>Danger one, please be careful </ErrorMsg>
			</div>
			<DeleteAccountDiaglog />
		</div>
	);
}
