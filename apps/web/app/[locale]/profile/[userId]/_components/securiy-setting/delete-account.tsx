"use client";
// import { useDeleteMe } from "@/api/hooks/auth";
import { Button } from "@ikseer/ui/src/components/ui/button";

export default function DeleteAccount() {
	// const { mutate } = useDeleteMe({});
	const handleDeleteAccount = () => {
		// mutate();
	};
	return (
		<div className="flex items-center justify-between">
			<div>
				<h3 className="text-2xl font-bold font-weight">Delete Your Account</h3>
				<p className="font-semibold text-red-600">
					Danger one, please be careful
				</p>
			</div>

			<Button variant="danger">Delete my account</Button>
		</div>
	);
}
