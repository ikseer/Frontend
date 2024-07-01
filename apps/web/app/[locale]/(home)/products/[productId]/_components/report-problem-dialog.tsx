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
import { Input } from "@ikseer/ui/src/components/ui/input";
import { Label } from "@ikseer/ui/src/components/ui/label";

export function ReportAProblem() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">report a problem</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Edit profile</DialogTitle>
					<DialogDescription>
						Make changes to your profile here. Click save when you're done.
					</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid items-center grid-cols-4 gap-4">
						<Label htmlFor="name" className="text-right">
							Name
						</Label>
						<Input
							name="df"
							id="name"
							defaultValue="Pedro Duarte"
							className="col-span-3"
						/>
					</div>
					<div className="grid items-center grid-cols-4 gap-4">
						<Label htmlFor="username" className="text-right">
							Username
						</Label>
						<Input
							name="nd"
							id="username"
							defaultValue="@peduarte"
							className="col-span-3"
						/>
					</div>
				</div>
				<DialogFooter>
					<Button type="submit">Save changes</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
