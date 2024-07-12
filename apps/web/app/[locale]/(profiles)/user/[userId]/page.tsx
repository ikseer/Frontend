import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@ikseer/ui/components/ui/tabs";
import { LuUser } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import BasicSettings from "../../_components/basic-setting/basic-settings";
import ProfileContainer from "../../_components/securiy-setting/profile-container";
import SecuritySetting from "./security-setting";

export default async function UserProfile() {
	return (
		<ProfileContainer>
			<Tabs defaultValue="profile" className="py-4 my-10">
				<TabsList className="py-4 ">
					<TabsTrigger value="profile">
						<LuUser /> &nbsp; Basic Settings
					</TabsTrigger>
					<TabsTrigger value="security-privacy">
						<LuSettings /> &nbsp; Security and Privacy
					</TabsTrigger>
				</TabsList>
				<TabsContent value="security-privacy">
					<SecuritySetting key="component-2" />
				</TabsContent>
				<TabsContent value="profile">
					<BasicSettings key="component-3" />
				</TabsContent>
			</Tabs>
		</ProfileContainer>
	);
}
