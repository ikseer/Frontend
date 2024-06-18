// Components
import ChangePassword from "./components/SecuriySetting/change-password";
import DeleteYourAccount from "./components/SecuriySetting/delete-account";
import LinkAccounts from "./components/SecuriySetting/link-accounts";
import SecurityContainer from "./components/SecuriySetting/security-container";
import SettingContainer from "./components/setting";

export default function SecuritySetting() {
	return (
		<div>
			<SettingContainer
				mainText="Security and privacy"
				secondaryText="Edit your password, connected accounts, and privacy settings."
			/>
			<SecurityContainer>
				<ChangePassword />
			</SecurityContainer>

			<SecurityContainer>
				<LinkAccounts />
			</SecurityContainer>

			<SecurityContainer>
				<DeleteYourAccount />
			</SecurityContainer>
		</div>
	);
}
