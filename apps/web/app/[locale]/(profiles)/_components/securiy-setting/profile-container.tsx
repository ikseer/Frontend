export default function ProfileContainer({
	children,
}: {
	children: React.ReactNode;
}) {
	return <article className="rounded-lg page-container">{children}</article>;
}
