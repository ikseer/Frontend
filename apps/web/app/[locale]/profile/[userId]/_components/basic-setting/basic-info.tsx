"use client";
import { SelectBuilder } from "@/components/site/select-builder";
import { cn } from "@/lib/utils";
import type { Profile } from "@/types";
import { Button } from "@ikseer/ui/src/components/ui/button";
import { FormInput } from "@ikseer/ui/src/components/ui/input";
import { Pencil } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";
import BasicSettingButton from "../securiy-setting/basic-setting-button";
import LabelInfo from "./babel-info";
import { timeZoneList } from "./time-stamp-data";

export default function BasicInfo() {
	const form = useForm<Profile>({
		// defaultValues: { ...data },
	});

	const handleProfileSubmit = (data: Profile) => {
		console.log(data);
	};

	return (
		<FormProvider {...form}>
			<form
				className="mt-6 space-y-4"
				onSubmit={form.handleSubmit(handleProfileSubmit)}
			>
				<DisplaySection>
					<section className="">
						<Label htmlFor="first_name">Full Name</Label>
						<p className="text-zinc-700 dark:text-zinc-300">
							First and last name
						</p>
					</section>
					<div className="gap-x-2 col-span-2">
						<div>
							<FormInput name="first_name" className="col-span-1 rounded-lg" />
						</div>
						<div>
							<FormInput name="last_name" className="col-span-1 rounded-lg" />
						</div>
					</div>
				</DisplaySection>
				<DisplaySection>
					<Label htmlFor="email">Email</Label>
					<FormInput
						name="email"
						type="email"
						className="col-span-2 rounded-lg"
					/>
				</DisplaySection>
				<DisplaySection>
					<LabelInfo mainText="Username" inputText="username" />

					<FormInput
						name="username"
						type="text"
						className="col-span-2 rounded-lg"
					/>
				</DisplaySection>
				<DisplaySection>
					<Label htmlFor="date_of_birth">Date of Birth</Label>
					<FormInput name="date_of_birth" type="date" />
				</DisplaySection>
				<DisplaySection>
					<Label>Timezone</Label>
					<SelectBuilder
						data={timeZoneList.map((ele) => ({ value: ele, label: ele }))}
						title="choose your Timezone"
					/>
				</DisplaySection>

				<Button>
					<Pencil /> Edit
				</Button>
			</form>
		</FormProvider>
	);
}

function DisplaySection({ children }: { children: React.ReactNode }) {
	return (
		<section className="place-content-center grid grid-cols-3">
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
