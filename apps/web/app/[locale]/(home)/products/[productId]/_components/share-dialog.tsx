import { Copy } from "lucide-react";

import { Button } from "@ikseer/ui/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@ikseer/ui/components/ui/dialog";
import { Input } from "@ikseer/ui/components/ui/input";
import { Label } from "@ikseer/ui/components/ui/label";
import { useToast } from "@ikseer/ui/components/ui/use-toast";

export function Share() {
	const { toast } = useToast();
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">Share</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>Share link</DialogTitle>
					<DialogDescription>
						Anyone who has this link will be able to view this.
					</DialogDescription>
				</DialogHeader>
				<div className="flex items-center space-x-2">
					<div className="grid flex-1 gap-2">
						<Label htmlFor="link" className="sr-only">
							Link
						</Label>
						<Input
							name="share"
							id="link"
							defaultValue={window.location.href}
							readOnly
						/>
					</div>
					<Button
						type="submit"
						size="sm"
						className="px-3"
						onClick={() => {
							navigator.clipboard.writeText(window.location.href);
							toast({ description: "Copied to clipboard" });
						}}
					>
						<span className="sr-only">Copy</span>
						<Copy className="w-4 h-4" />
					</Button>
				</div>
				<DialogFooter className="sm:justify-start">
					<DialogClose asChild>
						<Button type="button" variant="secondary">
							Close
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
