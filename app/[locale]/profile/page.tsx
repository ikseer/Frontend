import Tabs from "@/components/Tabs/Tabs"
import ProfileSetting from "./ProfileSetting"
import PaymentSetting from "./PaymentSetting"
import SecuritySetting from "./SecuritySetting"

export default function Profile() {
    return (
        <div>
            <Tabs profileSetting={<ProfileSetting />} paymentSetting={<PaymentSetting />} securitySetting={<SecuritySetting />}/>
        </div>
    )
}