import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import SettingContainer from "../setting";
import BasicInfo from "./basic-info";

export default function ProfileSetting() {
	return (
		<div>
			<SettingContainer
				mainText="Basic Setting"
				secondaryText="Edit your basic details like full name."
			/>
			<BasicInfo />
			{process.env.NODE_ENV === "development" && (
				<ReactQueryDevtools initialIsOpen={false} />
			)}
		</div>
	);
}
