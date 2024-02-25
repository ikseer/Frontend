interface DescriptionProps {
  description: string;
  key?: string;
}

export default function Description({ description }: DescriptionProps) {
  return (
    <div>
      <p>{description}</p>
    </div>
  );
}
