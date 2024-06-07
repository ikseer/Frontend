"use client";
import { useUpdateProfileImage } from "@/api/profile/use-profile-image";
import { Button } from "@/components/ui/button";
import { BACKEND_URL } from "@/lib/constants";
import Image from "next/image";
import { useRef, useState } from "react";

type UserImageRefType = React.RefObject<HTMLInputElement>;
export default function UserImage({ image }: { image: string }) {
	const { mutate, isSuccess } = useUpdateProfileImage();

	const handleUpdateImage = (uploadImageRef: UserImageRefType) => {
		if (uploadImageRef?.current) uploadImageRef.current.click();
	};
	const handelUpdloadImage = (
		e: React.ChangeEvent<HTMLInputElement>,
		setProfileImage: React.Dispatch<React.SetStateAction<File | null>>,
	) => {
		if (e?.target.files) {
			mutate(e.target.files[0]);
			if (isSuccess) setProfileImage(e.target.files[0]);
		}
	};
	const handleRemoveImage = (
		setProfileImage: React.Dispatch<React.SetStateAction<File | null>>,
	) => {
		setProfileImage(null);
	};

	const [profileImage, setProfileImage] = useState<File | null>(null);

	const uploadImageRef = useRef<HTMLInputElement>(null);
	return (
		<div className="flex flex-col items-center justify-center">
			<Image
				className="object-cover w-20 h-20 rounded-full"
				src={
					profileImage
						? URL.createObjectURL(profileImage)
						: `${BACKEND_URL}/${image}`
				}
				alt="user Profile photo"
				width={500}
				height={500}
			/>
			<p>Change Photos</p>
			<div>
				<input
					type="file"
					className="hidden"
					ref={uploadImageRef}
					onChange={(e) => handelUpdloadImage(e, setProfileImage)}
				/>
				<Button
					className="mr-5"
					onClick={() => handleUpdateImage(uploadImageRef)}
					variant={"ghost"}
				>
					Upload
				</Button>
				<Button
					onClick={() => handleRemoveImage(setProfileImage)}
					variant={"ghost"}
				>
					Remove
				</Button>
			</div>
		</div>
	);
}
