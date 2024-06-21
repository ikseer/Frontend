export default function ProfileContainer({
	children,
}: { children: React.ReactNode }) {
	return (
		<article className="w-10/12 mx-auto mb-16 rounded-lg">{children}</article>
	);
}
