import SettingContainer from '@/components/Settings/setting';

import BasicInfo from './BasicInfo';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function ProfileSetting() {
  return (
    <div>
      <SettingContainer
        mainText="Basic Setting"
        secondaryText="Edit your basic details like full name."
      />
      <BasicInfo />
      {process.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </div>
  );
}
