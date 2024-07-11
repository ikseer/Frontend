"use client";
import NotFound from "@/app/[locale]/not-found";
import NA from "@/components/NA";
import UserImage from "@app/(profiles)/_components/basic-setting/user-image";
import { useGetDoctor, useGetPatient } from "@ikseer/api/hooks/accounts";
import { ProfileIdCookie, UserTypeCookie } from "@ikseer/lib/cookies.client";
import type { Doctor, Patient } from "@ikseer/lib/types";
import { cn, getAvatarLink } from "@ikseer/lib/utils";
import { FullScreenSpinnerWithNavBar } from "@ikseer/ui/components/ui/loading-spinner";
import SettingContainer from "../../user/[userId]/_components/setting";
import { BasicSettingsDialog } from "./basic-settings-diaglog";

export default function BasicSettings() {
	const userId = ProfileIdCookie.get();
	const userType = UserTypeCookie.get();
	let data: Patient | Doctor;
	let isPending: boolean;
	const { data: patientInfo, isPending: patientIsPending } = useGetPatient(
		userId as string,
	);
	const { data: doctorInfo, isPending: doctorIsPending } = useGetDoctor(
		userId as string,
	);

	if (userType === "doctor") {
		data = doctorInfo as Doctor;
		isPending = doctorIsPending;
	} else {
		data = patientInfo as Patient;
		isPending = patientIsPending;
	}

	if (isPending || typeof window === "undefined")
		return <FullScreenSpinnerWithNavBar />;
	if (!data) return <NotFound />;
	const userInfo = data;
	const formateCurrentData = (date: string) => {
		const dateTime = new Date(date);
		return dateTime.toDateString();
	};

	return (
		<main>
			<SettingContainer
				mainText="Basic Setting"
				secondaryText="Edit your basic details like full name."
			/>
			<UserImage
				src={userInfo.image ? userInfo.image : getAvatarLink(userInfo)}
			/>
			<section className="space-y-6">
				<DisplaySection>
					<section className="col-span-1">
						<Label htmlFor="first_name">Full Name</Label>
					</section>
					<ViewInfo className="col-span-1">
						<NA>{userInfo.first_name}</NA>
					</ViewInfo>
					<ViewInfo className="col-span-1">
						<NA>{userInfo.last_name}</NA>
					</ViewInfo>
				</DisplaySection>
				<DisplaySection>
					<Label htmlFor="email">Email</Label>
					<ViewInfo>
						<NA>{userInfo.email}</NA>
					</ViewInfo>
				</DisplaySection>
				<DisplaySection>
					<Label htmlFor="username">Username</Label>
					<ViewInfo>
						<NA>{userInfo.username}</NA>
					</ViewInfo>
				</DisplaySection>
				<DisplaySection>
					<Label htmlFor="date_of_birth">Date of Birth</Label>
					<ViewInfo>
						<NA>{formateCurrentData(userInfo.date_of_birth)} </NA>
					</ViewInfo>
				</DisplaySection>
				<DisplaySection>
					<Label>Timezone</Label>
					<ViewInfo>
						<NA>{userInfo.timezone}</NA>
					</ViewInfo>
				</DisplaySection>
				<DisplaySection>
					{userType === "doctor" && (
						<>
							<Label htmlFor="specialization">Specialization</Label>
							<ViewInfo>
								<NA>{userInfo?.specialization}</NA>
							</ViewInfo>
						</>
					)}
				</DisplaySection>
				<BasicSettingsDialog />
			</section>
		</main>
	);
}

// function UserImage() {
// 	return <h1>user image here</h1>;
// }

function DisplaySection({ children }: { children: React.ReactNode }) {
	return (
		<section className="place-content-center lg:text-base grid grid-cols-3 gap-4 text-sm">
			{children}
		</section>
	);
}

function Label({
	htmlFor,
	children,
	className,
}: {
	htmlFor?: string;
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<label htmlFor={htmlFor} className={cn("font-semibold", className)}>
			{children}{" "}
		</label>
	);
}
function ViewInfo({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<p
			className={cn(
				"dark:border-zinc-600 border-zinc-300 col-span-2 border-2 rounded-md py-2 px-4",
				className,
			)}
		>
			{" "}
			{children}
		</p>
	);
}
