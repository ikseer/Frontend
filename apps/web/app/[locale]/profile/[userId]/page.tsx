import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@ikseer/ui/src/components/ui/tabs";
import { LuUser } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { MdPayment } from "react-icons/md"; /*didn't exist in lu*/
import ProfileSetting from "./_components/basic-setting/basic-setting";
import PaymentSetting from "./_components/payment-setting/payment-setting";
import ProfileContainer from "./_components/securiy-setting/profile-container";
import SecuritySetting from "./security-setting";

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
