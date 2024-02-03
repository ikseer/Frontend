
import SettingContainer from "@/components/Settings/setting"
import SecurityContainer from "./components/SecurityContainer"
import ChangePassword from "./components/ChangePassword"



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
        </div>
    )
}