export default function NA({
	children,
}: {
	children: React.ReactNode;
}) {
	return <p>{children ? children : "Not Available"}</p>;
}
