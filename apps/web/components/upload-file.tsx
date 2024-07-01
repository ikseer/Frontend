"use client";

import { useMutation } from "@tanstack/react-query";
import { FileUploader } from "react-drag-drop-files";

import { Button } from "@ikseer/ui/components/ui/button";
import { LoadingSpinner } from "@ikseer/ui/components/ui/loading-spinner";

interface UploadFileProps {
	api: (data: { file: File }) => Promise<Document>;
	value?: string | null;
	onChange?: (value: string | null) => void;
	disabled?: boolean;
	onSuccessUpload?: (doc: Document) => void;
	onFailedUpload?: (error: unknown) => void;
	nullable?: boolean;
}

export function UploadFile({
	value,
	onChange,
	disabled,
	onSuccessUpload,
	onFailedUpload,
	api,

	nullable,
}: UploadFileProps) {
	const upload = useMutation({
		mutationFn: async (file: File) => {
			const doc = await api({ file });
			onChange?.(doc);
			return doc;
		},
		onSuccess: (doc) => {
			onSuccessUpload?.(doc);
		},
		onError: (error) => {
			onFailedUpload?.(error);
		},
	});

	return (
		<div className="gap-2">
			<div className="relative">
				<FileUploader
					disabled={disabled || upload.isPending}
					handleChange={upload.mutateAsync}
					classes={"w-full !max-w-none min-h-[100px]"}
				/>
				{upload.isPending && (
					<div className="absolute top-0 left-0 w-full h-full bg-black/20 grid place-items-center backdrop-blur-[1px]">
						<LoadingSpinner size={50} />
					</div>
				)}
			</div>
			{value && (
				<div className="flex justify-center mt-2">
					<img
						alt="preview"
						src={value as string}
						className="w-full md:w-[200px]"
					/>
				</div>
			)}
			{value && nullable && (
				<Button
					variant={"ghost"}
					onClick={() => {
						onChange?.(null);
					}}
					type="button"
					className="mt-2"
				>
					Remove
				</Button>
			)}
		</div>
	);
}
