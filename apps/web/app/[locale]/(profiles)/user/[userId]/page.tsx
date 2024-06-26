import { serverAPI } from "@/api/config/api.server";
import { useGetMe } from "@/api/hooks/accounts";
import NotFound from "@/app/[locale]/not-found";
import { FullScreenSpinnerWithNavBar } from "@ikseer/ui/src/components/ui/loading-spinner";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@ikseer/ui/src/components/ui/tabs";
import { LuUser } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { MdPayment } from "react-icons/md"; /*didn't exist in lu*/
import BasicSettings from "../../_components/basic-setting/basic-settings";
import PaymentSetting from "../../_components/payment-setting/payment-setting";
import ProfileContainer from "../../_components/securiy-setting/profile-container";
import SecuritySetting from "./security-setting";

export default async function UserProfile() {
	// const data = await serverAPI.auth.getPatient()
	// console.log(data, "data from server");
	// if (!data) return <NotFound />;

	return (
		<ProfileContainer>
			<Tabs defaultValue="profile" className="py-4 my-10">
				<TabsList className="py-4 ">
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
					<BasicSettings key="component-3" />
				</TabsContent>
				<TabsContent value="payment">
					<PaymentSetting key="component-3" />
				</TabsContent>
			</Tabs>
		</ProfileContainer>
	);
}
