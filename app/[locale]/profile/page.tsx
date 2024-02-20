
// Components
import Tabs from "@/components/Tabs/Tabs"
import ProfileSetting from "./BasicSetting"
import PaymentSetting from "./PaymentSetting"
import SecuritySetting from "./SecuritySetting"
import ProfileContainer from "./components/ProfileContainer"
// Icons
import { LuUser } from 'react-icons/lu';
import { LuSettings } from 'react-icons/lu';
// dind't exist in lucide react icons library
import { MdPayment } from 'react-icons/md';

export default function Profile() {
    return (
        <ProfileContainer>
            <Tabs 
            componentsList={[<ProfileSetting key="component-1" />, <SecuritySetting key="component-2" />,
                <PaymentSetting key="component-3" />]}
            componentNames = {["Basic Settings", "Security and Privacy", "Payments"]}
            containerClassName = "flex space-x-2 justify-center"
            componentsIcons = {[<LuUser key="user"/>, <LuSettings key="setting"/>, <MdPayment key="payment"/>]}
            />
        </ProfileContainer>
    )
}