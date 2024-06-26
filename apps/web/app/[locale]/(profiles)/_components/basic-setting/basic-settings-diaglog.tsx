import { SelectBuilder } from "@/components/select-builder";
import { useZodForm } from "@/lib/use-zod-schema";
import { Button } from "@ikseer/ui/src/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@ikseer/ui/src/components/ui/dialog";
import { FormInput } from "@ikseer/ui/src/components/ui/input";
import { Label } from "@ikseer/ui/src/components/ui/label";
import { Pen } from "lucide-react";
import { useState } from "react";
import { FormProvider } from "react-hook-form";
import { z } from "zod";
import { timeZoneList } from "./time-stamp-data";

const schema = z.object({
	first_name: z.string(),
	last_last: z.string(),
	date_of_birth: z.date(),
	timeZone: z.string(),
	gender: z.string(),
});

export function BasicSettingsDialog() {
	const [isOpen, setIsOpen] = useState(false);
	const form = useZodForm({
		schema: schema,
	});

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
					<form className="py-4 space-y-4">
						<div className="grid items-center w-full grid-cols-3 gap-4">
							<Label htmlFor="first_name">First name</Label>
							<div className="col-span-2">
								<FormInput name="first_name" />
							</div>
						</div>

						<div className="grid items-center grid-cols-3 gap-4">
							<Label htmlFor="last_name">Last name</Label>
							<div className="col-span-2">
								<FormInput name="last_name" className="col-span-3" />
							</div>
						</div>
						<div className="grid items-center grid-cols-3 gap-4">
							<Label htmlFor="date_of_birth">Date of birth</Label>
							<div className="col-span-2">
								<FormInput
									name="date_of_birth"
									type="date"
									className="col-span-3"
								/>
							</div>
						</div>
						<div className="grid items-center grid-cols-3 gap-4">
							<Label htmlFor="timezone">TimeZone</Label>
							<div className="col-span-2">
								<SelectBuilder
									data={timeZoneList.map((ele) => ({ value: ele, label: ele }))}
									title="choose your Timezone"
								/>
							</div>
						</div>
						<div className="grid items-center grid-cols-3 gap-4">
							<Label htmlFor="gender">Gender</Label>
							<div className="col-span-2">
								<FormInput name="gender" className="col-span-3" />
							</div>
						</div>
					</form>
					<DialogFooter>
						<Button
							type="button"
							variant="danger"
							onClick={() => {
								setIsOpen(false);
							}}
						>
							cancel
						</Button>
						<Button type="submit" variant="submit">
							Save changes
						</Button>
					</DialogFooter>
				</FormProvider>
			</DialogContent>
		</Dialog>
	);
}
