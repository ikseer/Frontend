
// Components
import SettingContainer from '@/components/Settings/setting';
import UserImage from '@/components/UserImage/UserImage';
import BasicInfo from "./components/BasicInfo"

// Tmp
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function ProfileSetting() {
  return (
    <div>
      <SettingContainer
        mainText="Basic Setting"
        secondaryText="Edit your basic details like full name."
      />
      <UserImage />
      <BasicInfo />
      {process.env.NODE_ENV === "development" && <ReactQueryDevtools initialIsOpen={false} />}
    </div>
  );
}