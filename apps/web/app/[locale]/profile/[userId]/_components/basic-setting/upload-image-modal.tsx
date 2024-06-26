"use client";

import { clientAPI } from "@/api/config/api.client";
import { useGetMe } from "@/api/hooks/accounts";
import { UploadFile } from "@/components/upload-file";
import { getErrorMsg } from "@/lib/get-error-msg";
import { Dialog, DialogContent } from "@ikseer/ui/src/components/ui/dialog";
import { useToast } from "@ikseer/ui/src/components/ui/use-toast";
import type { DialogProps } from "@radix-ui/react-dialog";
import { useQueryClient } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function UploadImageModal(props: DialogProps) {
	const t = useTranslations();
	const { toast } = useToast();
	const me = useGetMe();
	const queryClient = useQueryClient();
	if (!me.data) return;
	const [link, setLink] = useState<string | null>();

	return (
		<Dialog {...props}>
			<DialogContent>
				<section className="space-y-5 rounded p-7">
					<UploadFile
						value={link}
						api={clientAPI.auth.getMyImage}
						onChange={(link) => {
							setLink(link || null);
						}}
						onSuccessUpload={() => {
							toast({
								description: "Profile picture updated",
								title: "Success",
								variant: "success",
							});
							queryClient.invalidateQueries({
								queryKey: ["getMe"],
							});
							props?.onOpenChange?.(false);
						}}
						onFailedUpload={(error) => {
							toast({
								description: getErrorMsg(error),
								title: "Failed to update profile picture",
								variant: "error",
							});
						}}
					/>
				</section>
			</DialogContent>
		</Dialog>
	);
}
