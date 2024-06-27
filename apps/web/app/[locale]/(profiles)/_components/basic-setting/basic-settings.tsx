"use client";
import NotFound from "@/app/[locale]/not-found";
import NA from "@/components/NA";
import { useGetPatient } from "@ikseer/api/hooks/accounts";
import { cn } from "@ikseer/lib/utils";
import { FullScreenSpinnerWithNavBar } from "@ikseer/ui/src/components/ui/loading-spinner";
import SettingContainer from "../../user/[userId]/_components/setting";
import { BasicSettingsDialog } from "./basic-settings-diaglog";

export default function BasicSettings() {
	const { data, isPending } = useGetPatient();
	if (isPending || typeof window === "undefined")
		return <FullScreenSpinnerWithNavBar />;
	if (!data || data.length <= 0) return <NotFound />;
	const userInfo = data[0];

	return (
		<main>
			<UserImage />
			<SettingContainer
				mainText="Basic Setting"
				secondaryText="Edit your basic details like full name."
			/>

			<section className="space-y-6">
				<DisplaySection>
					<section className="col-span-1">
						<Label htmlFor="first_name">Full Name</Label>
						{/* <p className="text-zinc-700 dark:text-zinc-300">
						First and last name
					</p> */}
					</section>
					<ViewInfo className="col-span-1">
						<NA>{userInfo.username}</NA>
					</ViewInfo>
					<ViewInfo className="col-span-1">
						<NA>{userInfo.email}</NA>
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
						<NA>{userInfo.date_of_birth}</NA>
					</ViewInfo>
				</DisplaySection>
				<DisplaySection>
					<Label>Timezone</Label>
					<ViewInfo>
						<NA>{userInfo.timezone}</NA>
					</ViewInfo>
				</DisplaySection>
				<BasicSettingsDialog />
			</section>
		</main>
	);
}

function UserImage() {
	return <h1>user image here</h1>;
}

function DisplaySection({ children }: { children: React.ReactNode }) {
	return (
		<section className="grid grid-cols-3 gap-4 place-content-center">
			{children}
		</section>
	);
}

function Label({
	htmlFor,
	children,
	className,
}: { htmlFor?: string; children: React.ReactNode; className?: string }) {
	return (
		<label htmlFor={htmlFor} className={cn("font-semibold", className)}>
			{children}{" "}
		</label>
	);
}
function ViewInfo({
	children,
	className,
}: { children: React.ReactNode; className?: string }) {
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
