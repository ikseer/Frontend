"use client";
import { cn } from "@/lib/utils";
import SettingContainer from "../setting";
import { BasicSettingsDialog } from "./basic-settings-diaglog";

export default function BasicSettings() {
	return (
		<main>
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
					<ViewInfo className="col-span-1">Mohamed</ViewInfo>
					<ViewInfo className="col-span-1">Yousef</ViewInfo>
				</DisplaySection>
				<DisplaySection>
					<Label htmlFor="email">Email</Label>
					<ViewInfo>mohamedyousef@gmail.com</ViewInfo>
				</DisplaySection>
				<DisplaySection>
					<Label htmlFor="username">Username</Label>
					<ViewInfo>mohamedyousef</ViewInfo>
				</DisplaySection>
				<DisplaySection>
					<Label htmlFor="date_of_birth">Date of Birth</Label>
					<ViewInfo>Date here</ViewInfo>
				</DisplaySection>
				<DisplaySection>
					<Label>Timezone</Label>
					<ViewInfo>Time Zone here</ViewInfo>
				</DisplaySection>
				<BasicSettingsDialog />
			</section>
		</main>
	);
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
