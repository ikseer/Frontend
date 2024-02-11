import Tabs from "@/components/Tabs/Tabs"
import ProfileSetting from "./BasicSetting"
import PaymentSetting from "./PaymentSetting"
import SecuritySetting from "./SecuritySetting"
import ProfileContainer from "./components/ProfileContainer"
export default function Profile() {
    return (
        <ProfileContainer>
            <Tabs profileSetting={<ProfileSetting />} paymentSetting={<PaymentSetting />} securitySetting={<SecuritySetting />}/>
        </ProfileContainer>
    )
}