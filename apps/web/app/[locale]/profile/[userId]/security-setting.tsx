// Components
import ChangePassword from "@app/profile/[userId]/components/securiy-setting/change-password";
import DeleteYourAccount from "@app/profile/[userId]/components/securiy-setting/delete-account";
import LinkAccounts from "@app/profile/[userId]/components/securiy-setting/link-accounts";
import SecurityContainer from "@app/profile/[userId]/components/securiy-setting/security-container";
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
