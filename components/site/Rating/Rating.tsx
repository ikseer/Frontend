interface RatingType {
  rating: number;
  reviewNumber: number;
}

export default function Rating({ rating, reviewNumber }: RatingType) {
  let newRating = Math.floor(rating);
  const ratingArrayOne = Array.from({ length: newRating }, (_, i) => i);
  const ratingArrayTwo = Array.from({ length: 5 - newRating }, (_, i) => i);

  return (
    <div className="flex items-center">
      <div>
        {ratingArrayOne.map((_, indx) => (
          <button
            key={indx}
            type="button"
            className="size-5 inline-flex justify-center items-center text-2xl rounded-full text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:text-yellow-500"
          >
            <svg
              className="flex-shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </button>
        ))}
        {ratingArrayTwo.map((_, indx) => (
          <button
            key={indx}
            type="button"
            className="size-5 inline-flex justify-center items-center text-2xl rounded-full text-gray-300  disabled:opacity-50 disabled:pointer-events-none dark:text-gray-600 "
          >
            <svg
              className="flex-shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </button>
        ))}
      </div>
      <div className="flex gap-x-2 ml-2 items-center">
        <p
          className="py-.5 px-3  rounded-lg 
            bg-white border-[1px] border-solid border-gray-500
            dark:bg-zinc-700 dark:border-zinc-700"
        >
          {rating.toFixed(2)}
        </p>
        <p className="text-gray-500 dark:text-zinc-500">{reviewNumber}</p>
      </div>
    </div>
  );
}
