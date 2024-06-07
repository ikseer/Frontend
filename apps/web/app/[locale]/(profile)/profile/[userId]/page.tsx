import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LuUser } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { MdPayment } from "react-icons/md"; /*didn't exist in lu*/
import SecuritySetting from "./SecuritySetting";
// Components
import ProfileSetting from "./components/BasicSetting/basic-setting";
import PaymentSetting from "./components/PaymentSetting/PaymentSetting";
import ProfileContainer from "./components/SecuriySetting/profile-container";

export default function Profile() {
	return (
		<ProfileContainer>
			<Tabs defaultValue="profile">
				<TabsList>
					<TabsTrigger value="profile">
						<LuUser /> Basic Settings
					</TabsTrigger>
					<TabsTrigger value="security-privacy">
						<LuSettings /> Security and Privacy
					</TabsTrigger>
					<TabsTrigger value="payment">
						<MdPayment />
						Payments
					</TabsTrigger>
				</TabsList>
				<TabsContent value="security-privacy">
					<SecuritySetting key="component-2" />
				</TabsContent>
				<TabsContent value="profile">
					<ProfileSetting key="component-3" />
				</TabsContent>
				<TabsContent value="payment">
					<PaymentSetting key="component-3" />
				</TabsContent>
			</Tabs>
		</ProfileContainer>
	);
}
