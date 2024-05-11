import type { ReviewProps } from '../../types/review.types';

interface ReviewCurrentProps {
  review: ReviewProps[];
  key?: string;
}
export default function Review({ review }: ReviewCurrentProps) {
  console.log(review);

  return <div>Review</div>;
}
