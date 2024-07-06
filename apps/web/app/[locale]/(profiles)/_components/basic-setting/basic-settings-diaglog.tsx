import { ErrorMsg } from "@/components/error-msg";
import Radio from "@/components/radio";
import { SelectBuilder } from "@/components/select-builder";
import Spinner from "@/components/spinner";
import { useZodForm } from "@/lib/use-zod-form";
import { useGetMe, useUpdatePatient } from "@ikseer/api/hooks/accounts";
import { Button } from "@ikseer/ui/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@ikseer/ui/components/ui/dialog";
import { FormInput } from "@ikseer/ui/components/ui/input";
import { Label } from "@ikseer/ui/components/ui/label";
import { Pen } from "lucide-react";
import { useState } from "react";
import { FormProvider } from "react-hook-form";
import { z } from "zod";
import { timeZoneList } from "./time-stamp-data";

const Patientschema = z.object({
	first_name: z.string(),
	last_name: z.string(),
	date_of_birth: z.string(),
	timezone: z.string(),
	gender: z.string(),
});

export function BasicSettingsDialog() {
	const [isOpen, setIsOpen] = useState(false);
	const me = useGetMe();
	const onSuccess = () => {
		setIsOpen(false);
	};
	const updateProfile = useUpdatePatient({ onSuccess });
	const data = me?.data;
	const form = useZodForm({
		schema: Patientschema,
		defaultValues: data || undefined,
	});

	const userId = me?.data?.id;

	if (!userId) return;

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>
				<Button variant="submit">
					<Pen /> &nbsp; Edit
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Edit profile</DialogTitle>
					<DialogDescription>
						Make changes to your profile here. Click save when you're done.
					</DialogDescription>
				</DialogHeader>
				<FormProvider {...form}>
					<form
						className="py-4 space-y-4"
						onSubmit={form.handleSubmit((data) => {
							const newData = {
								...data,
								date_of_birth: new Date(data.date_of_birth).toISOString(),
								id: userId,
							};
							updateProfile.mutate(newData);
						})}
					>
						<div className="grid items-center w-full grid-cols-3 gap-4">
							<Label htmlFor="first_name">First name</Label>
							<div className="col-span-2">
								<FormInput name="first_name" className="rounded-md" />
							</div>
						</div>

						<div className="grid items-center grid-cols-3 gap-4">
							<Label htmlFor="last_name">Last name</Label>
							<div className="col-span-2">
								<FormInput name="last_name" className="col-span-3 rounded-md" />
							</div>
						</div>
						<div className="grid items-center grid-cols-3 gap-4">
							<Label htmlFor="date_of_birth">Date of birth</Label>
							<div className="col-span-2">
								<FormInput
									name="date_of_birth"
									type="date"
									className="col-span-3 rounded-md"
								/>
							</div>
						</div>
						<div className="grid items-center grid-cols-3 gap-4">
							<Label htmlFor="timezone">TimeZone</Label>
							<div className="col-span-2">
								<SelectBuilder
									data={timeZoneList.map((ele) => ({ value: ele, label: ele }))}
									title="choose your Timezone"
									name="timezone"
								/>
								{form.formState.errors.timezone && (
									<ErrorMsg>
										{typeof form.formState.errors.timezone.message === "string"
											? form.formState.errors.timezone.message
											: "Required"}
									</ErrorMsg>
								)}
							</div>
						</div>
						<div className="grid items-center grid-cols-3 gap-4">
							<Label htmlFor="gender">Gender</Label>
							<div className="gap-x-2 flex items-center">
								<Radio name="gender" value="male" />
								<label htmlFor="male">Male</label>
							</div>
							<div className="gap-x-2 flex items-center">
								<Radio name="gender" value="female" />
								<label htmlFor="female">Female</label>
							</div>
						</div>
						<DialogFooter>
							<section className="space-x-4 space-y-4">
								<Button
									type="button"
									variant="danger"
									onClick={() => {
										setIsOpen(false);
									}}
								>
									cancel
								</Button>
								<Button
									type="submit"
									variant="submit"
									disabled={updateProfile?.isPending}
								>
									{updateProfile?.isPending ? (
										<>
											Save change &nbsp; <Spinner />
										</>
									) : (
										"Save changes"
									)}
								</Button>
							</section>
						</DialogFooter>
					</form>
				</FormProvider>
			</DialogContent>
		</Dialog>
	);
}
