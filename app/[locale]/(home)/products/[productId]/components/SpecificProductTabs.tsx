import Tabs from '@/components/site/Tabs/Tabs';
import Description from './Description';
import Review from './Review/Review';
interface ReviewProps {
  id: number;
  name: string;
  rating: string;
  comment: string;
  user: string;
  product: string;
}
interface SpecificProductTabProps {
  description: string;
  review: ReviewProps[];
  key?: string;
}

export default function SpecificProductTab({
  description,
  review,
}: SpecificProductTabProps) {
  return (
    <Tabs
      componentsList={[
        <Description key="component-1" description={description} />,
        <Review key="component-2" review={review} />,
      ]}
      componentNames={['Description', 'Review']}
      containerClassName=""
    />
  );
}
