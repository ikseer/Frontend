import ChangePassword from "../../_components/securiy-setting/change-password";
import DeleteYourAccount from "../../_components/securiy-setting/delete-account";
import LinkAccounts from "../../_components/securiy-setting/link-accounts";
import SecurityContainer from "../../_components/securiy-setting/security-container";
import SettingContainer from "./_components/setting";

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
