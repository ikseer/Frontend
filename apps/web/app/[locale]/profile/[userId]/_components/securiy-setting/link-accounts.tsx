import Account from "./account";

export default function LinkAccounts() {
	return (
		<div>
			<div className="mb-6">
				<h3 className="text-2xl font-bold font-weight">Link Accounts</h3>
				<p className="text-gray-400">
					Linked accounts will help in fast log in and better personalization.
				</p>
			</div>
			<div>
				<Account image="" name="Google" buttonText="Link Google" />
				<Account
					image="/auth/facebook.png"
					name="Facebook"
					buttonText="Link Facebook"
				/>
				<Account image="/auth/apple.png" name="Apple" buttonText="Link Apple" />
			</div>
		</div>
	);
}
