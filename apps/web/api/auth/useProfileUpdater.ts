// import { useGetProfile } from "@/customHooks/Profile/useProfile";
// import Auth from "@/modules/Auth/Auth";
// import storeProfile from "@/store/profile/profile";
// import { useEffect } from "react";

// export default function useProfileUpdater() {
// 	const auth = new Auth();
// 	const enabled = auth.isRegister();
// 	const { setUserInfo } = storeProfile();
// 	const { data } = useGetProfile(enabled);
// 	console.log("enabled", enabled);
// 	useEffect(() => {
// 		console.table(data);
// 		if (data) {
// 			const newData = {
// 				firstName: data.first_name,
// 				lastName: data.last_name,
// 				image: data.image,
// 			};
// 			setUserInfo(newData);
// 		}
// 	}, [data, setUserInfo]);
// }
