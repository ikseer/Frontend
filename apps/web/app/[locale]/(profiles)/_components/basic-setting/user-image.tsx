"use client";
import Spinner from "@/components/spinner";
import { useUpdateProfileImage } from "@ikseer/api/hooks/accounts";
import { ProfileIdCookie } from "@ikseer/lib/cookies.client";
import { Edit3 } from "lucide-react";
import type React from "react";
import { useRef } from "react";

export default function UserImage({ src }: { src: string }) {
	const updateImage = useUpdateProfileImage();
	const fileInputRef = useRef<HTMLInputElement>(null);
	const userId = ProfileIdCookie.get();

	const handleImageChange = async (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		if (event?.target?.files?.[0]) {
			const file = event.target.files[0];
			//@ts-ignore
			updateImage?.mutate({ id: userId, data: { image: file } });
		}
	};

	const handleEditClick = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	return (
		<div className="relative  group w-fit m-auto my-7">
			{updateImage?.isPending && (
				<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full">
					<Spinner />
				</div>
			)}
			<img
				src={src}
				alt="User profile"
				className="w-32 h-32 rounded-full object-cover mb-4"
			/>
			{!updateImage?.isPending && (
				<div
					className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full cursor-pointer hidden group-hover:flex"
					onClick={handleEditClick}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							handleEditClick();
						}
					}}
				>
					<Edit3 className="w-6 h-6 text-white" />
				</div>
			)}
			<input
				type="file"
				accept="image/*"
				className="hidden"
				onChange={handleImageChange}
				ref={fileInputRef}
			/>
		</div>
	);
}
