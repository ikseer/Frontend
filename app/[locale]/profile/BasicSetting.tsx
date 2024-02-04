'use client';
import SettingContainer from '@/components/Settings/setting';
import UserImage from '@/components/UserImage/UserImage';
import DisplayBasicInfo from './components/DisplayBasicInfo';
// import DatePicker from "@/components/DatePicker/DatePicker"
import Select from '@/components/Select/Select';
import DisplayGender from '@/components/Gender/DisplayGender';
import { timeZoneList } from './components/DifferentTimeZone';
// import { useGetProfile } from '@/customHooks/Profile/useProfile';

export default function ProfileSetting() {
  // const { data } = useGetProfile();
  // console.log(data);

  return (
    <div>
      <SettingContainer
        mainText="Basic Setting"
        secondaryText="Edit your basic details like full name."
      />
      <UserImage />
      <div className="mt-6">
        <DisplayBasicInfo
          mainText="full Name"
          secText="First and last name"
          inputText={['Mohamed', 'Yousef']}
        />
        <DisplayBasicInfo
          mainText="Email"
          inputText={['modyyousef800@gmail.com']}
        />
        <DisplayBasicInfo mainText="username" inputText={['mohamedyousef']} />
        {/* Date picker */}
        <DisplayBasicInfo mainText="Date of Birth" inputText={['01/01/2000']} />
        {/*  time zone picker */}
        <Select label="Timezone" selectOptions={timeZoneList} />
        {/* Gender */}
        <DisplayGender />
      </div>
    </div>
  );
}
