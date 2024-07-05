import { usePermissions } from "@/hooks/use-permissions";
import type { Product } from "@ikseer/lib/types";
import { Group, Text, rem } from "@mantine/core";
import { Dropzone } from "@mantine/dropzone";
import { FileText, Upload, X } from "lucide-react";
import { useTranslations } from "next-intl";

export function FilesDropzone({ product: _ }: { product: Product }) {
	const t = useTranslations("Patient");
	const perms = usePermissions();
	if (!perms.patient.canUpdatePatient()) return;
	return (
		<Dropzone
			// loading={createAttachment.isPending}
			maxSize={10 * 1024 ** 2}
			onDrop={(file) =>
				// createAttachment.mutate({
				// 	userId: patient.user,
				// 	file: file[0],
				// 	file_name: file[0].name,
				// })
				console.log(file)
			}
		>
			<Group
				justify="center"
				gap="xl"
				mih={220}
				style={{ pointerEvents: "none" }}
			>
				<Dropzone.Accept>
					<Upload
						strokeWidth={1.5}
						style={{
							width: rem(52),
							height: rem(52),
							color: "var(--mantine-color-blue-6)",
						}}
					/>
				</Dropzone.Accept>
				<Dropzone.Reject>
					<X
						strokeWidth={1.5}
						style={{
							width: rem(52),
							height: rem(52),
							color: "var(--mantine-color-red-6)",
						}}
					/>
				</Dropzone.Reject>
				<Dropzone.Idle>
					<FileText
						strokeWidth={1.5}
						style={{
							width: rem(52),
							height: rem(52),
							color: "var(--mantine-color-dimmed)",
						}}
					/>
				</Dropzone.Idle>

				<div>
					<Text size="xl" inline>
						{t("drag-files-here-or-click-to-select-files")}
					</Text>
					<Text size="sm" c="dimmed" inline mt={7}>
						{t(
							"attach-as-many-files-as-you-like-each-file-should-not-exceed-10mb",
						)}
					</Text>
				</div>
			</Group>
		</Dropzone>
	);
}
