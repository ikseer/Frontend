'use client';
import  { useRef, useState } from 'react';

import Image from 'next/image';
import { useUpdateProfileImage } from '@/customHooks/Profile/useProfileImage';
import { BACKEND_URL } from '@/lib/constants';
type UserImageRefType = React.RefObject<HTMLInputElement>;

export default function UserImage({ image }: { image: string }) {
  const { mutate, isSuccess } = useUpdateProfileImage();

  const handleUpdateImage = (uploadImageRef: UserImageRefType) => {
    if (uploadImageRef && uploadImageRef.current)
      uploadImageRef.current.click();
  };
  const handelUpdloadImage = (
    e: React.ChangeEvent<HTMLInputElement>,
    setProfileImage: React.Dispatch<React.SetStateAction<File | null>>,
  ) => {
    if (e.target && e.target.files) {
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
    <div className="flex flex-col justify-center items-center">
      <Image
        className="w-20 h-20 rounded-full object-cover"
        src={
          profileImage
            ? URL.createObjectURL(profileImage)
            : BACKEND_URL + '/' + image
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
        <button
          className="mr-5"
          onClick={() => handleUpdateImage(uploadImageRef)}
        >
          Upload
        </button>
        <button onClick={() => handleRemoveImage(setProfileImage)}>
          Remove
        </button>
      </div>
    </div>
  );
}
