// Components
import SettingContainer from "@/components/Settings/setting"
import SecurityContainer from "./components/SecuriySetting/SecurityContainer"
import ChangePassword from "./components/SecuriySetting/ChangePassword"
import LinkAccounts from "./components/SecuriySetting/LinkAccounts"
import DeleteYourAccount from "./components/SecuriySetting/DeleteAccount"


export default function SecuritySetting() {

    return (
        <div>
            <SettingContainer
                mainText="Security and privacy"
                secondaryText="Edit your password, connected accounts, and privacy settings."
            />
            <SecurityContainer >
                <ChangePassword />
            </SecurityContainer>

            <SecurityContainer>
                <LinkAccounts />
            </SecurityContainer>
                

            <SecurityContainer>
                <DeleteYourAccount />
            </SecurityContainer>

        </div>
    )
}