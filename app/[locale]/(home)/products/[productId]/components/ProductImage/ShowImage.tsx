'use client';
import { useState } from 'react';
import Image from 'next/image';
interface ImageProps {
  id: string;
  image: string;
  priority: number;
  product: string;
}
interface ShowImageProps {
  images: ImageProps[];
}

export default function ShowImage({ images }: ShowImageProps) {
  const sortedImages = images?.sort((a, b) => b.priority - a.priority);
  const [currPriority, setCurrPriority] = useState(1);
  const BASEURL = process.env.NEXT_PUBLIC_BACKEND_URL;
  console.log(currPriority, BASEURL, 'from show iamge', sortedImages);
  return (
    <div>
      {Array.isArray(sortedImages) &&
        sortedImages.map((item) =>
          currPriority == item.priority ? (
            <Image
              key={item.priority}
              src={`${BASEURL}${item?.image}`}
              alt="new Image"
              className="w-full"
              width={500}
              height={500}
            />
          ) : null,
        )}
      <div className="flex gap-x-3 justify-center mt-3 x">
        {Array.isArray(sortedImages) &&
          sortedImages.map((item) => (
            <Image
              key={item.priority}
              src={`${BASEURL}${item?.image}`}
              alt="new Image"
              className="w-2/12 cursor-pointer rounded-sm"
              width={200}
              height={200}
              onClick={() => setCurrPriority(item.priority)}
            />
          ))}
      </div>
    </div>
  );
}
