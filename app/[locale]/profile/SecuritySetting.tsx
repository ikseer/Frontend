// Components
import SettingContainer from "@/components/Settings/setting"
import SecurityContainer from "./components/SecurityContainer"
import ChangePassword from "./components/ChangePassword"
import LinkAccounts from "./components/LinkAccounts"
import DeleteYourAccount from "./components/DeleteAccount"


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