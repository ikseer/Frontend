'use client';
import SettingContainer from '@/components/Settings/setting';
import UserImage from '@/components/UserImage/UserImage';
// import { useGetProfile } from '@/customHooks/Profile/useProfile';
// import Button from "@/components/Buttons/Button"
import BasicInfo from "./components/BasicInfo"
export default function ProfileSetting() {


  return (
    <div>
      <SettingContainer
        mainText="Basic Setting"
        secondaryText="Edit your basic details like full name."
      />
      <UserImage />
      <BasicInfo />

    </div>
  );
}
