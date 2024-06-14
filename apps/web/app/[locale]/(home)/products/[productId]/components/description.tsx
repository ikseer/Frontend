export default function Description({
	description,
}: { description: string; key?: string }) {
	return (
		<div>
			<p>{description}</p>
		</div>
	);
}
