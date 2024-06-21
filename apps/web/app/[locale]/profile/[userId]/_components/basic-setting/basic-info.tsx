"use client";
import type { Profile } from "@/types";
import { FormInput } from "@ikseer/ui/src/components/ui/input";
import { FormProvider, useForm } from "react-hook-form";
import BasicSettingButton from "../securiy-setting/basic-setting-button";
import LabelInfo from "./babel-info";

export default function BasicInfo() {
	const form = useForm<Profile>({
		// defaultValues: { ...data },
	});

	const handleProfileSubmit = (data: Profile) => {
		console.log(data);
	};

	return (
		<FormProvider {...form}>
			{/* <UserImage image={data?.image} /> */}
			<form className="mt-6" onSubmit={form.handleSubmit(handleProfileSubmit)}>
				<section className="flex items-center justify-between">
					<label id="first_name">Full Name</label>
					<label id="first_name">Las Name</label>
					<div className="gap-x-2 flex w-9/12">
						<FormInput name="first_name" />
						<FormInput name="last_name" />
					</div>
				</section>
				<section className="flex items-center justify-between">
					<LabelInfo mainText="Email" inputText="email" />
					<div className="gap-x-2 flex w-9/12">
						<FormInput name="email" type="email" />
					</div>
				</section>
				<section className="flex items-center justify-between">
					<LabelInfo mainText="Username" inputText="username" />
					<div className="gap-x-2 flex w-9/12">
						<FormInput name="username" type="text" />
					</div>
				</section>
				<section className="flex items-center justify-between">
					<LabelInfo mainText="Date of Birth" inputText="date_of_birth" />
					<div className="gap-x-2 flex w-9/12">
						<FormInput name="date_of_birth" type="date" />
					</div>
				</section>

				<BasicSettingButton onClick={() => form.reset()} />
			</form>
		</FormProvider>
	);
}
