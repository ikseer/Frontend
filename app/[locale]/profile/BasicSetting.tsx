import SettingContainer from "@/components/Settings/setting"
import UserImage from "@/components/UserImage/UserImage"
import DisplayBasicInfo from "./components/DisplayBasicInfo"
export default function ProfileSetting() {
    return (
        <div>
            <SettingContainer
                mainText="Basic Setting"
                secondaryText="Edit your basic details like full name."
            />
            <UserImage />
            {/* <DisplayBasicInfo mainText="Name" secText="Your name" inputText={["First Name", "Last Name"]}/> */}
        </div>
    )
}