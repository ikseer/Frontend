// "use client";

// // import { UploadFile } from "@/components/upload-file";
// // import { clientAPI } from "@ikseer/api/config/api.client";
// import { useGetMe } from "@ikseer/api/hooks/accounts";
// // import { getErrorMessageSync } from "@ikseer/lib/get-error-msg";
// import { Dialog, DialogContent } from "@ikseer/ui/components/ui/dialog";
// // import { useToast } from "@ikseer/ui/components/ui/use-toast";
// import type { DialogProps } from "@radix-ui/react-dialog";
// // import { useQueryClient } from "@tanstack/react-query";
// // import { useTranslations } from "next-intl";
// // import { useState } from "react";

// export default function UploadImageModal(props: DialogProps) {
// 	// const $t = useTranslations();
// 	// const { toast } = useToast();
// 	const me = useGetMe();
// 	if (!me?.data) return;
// 	// const queryClient = useQueryClient();
// 	// const [link, setLink] = useState<string | null>();

// 	return (
// 		<Dialog {...props}>
// 			<DialogContent>
// 				<section className="p-7 space-y-5 rounded">
// 					{/* <UploadFile
// 						value={link}
// 						api={clientAPI.accounts.getPatients}
// 						onChange={(link) => {
// 							setLink(link || null);
// 						}}
// 						onSuccessUpload={() => {
// 							toast({
// 								description: "Profile picture updated",
// 								title: "Success",
// 								variant: "success",
// 							});
// 							queryClient.invalidateQueries({
// 								queryKey: ["getMe"],
// 							});
// 							props?.onOpenChange?.(false);
// 						}}
// 						onFailedUpload={(error) => {
// 							toast({
// 								description: getErrorMessageSync(error, $t),
// 								title: "Failed to update profile picture",
// 								variant: "error",
// 							});
// 						}}
// 					/> */}
// 				</section>
// 			</DialogContent>
// 		</Dialog>
// 	);
// }
