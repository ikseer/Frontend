import type { ReactNode } from "react";

export function NoContent({
	icon,
	text,
}: {
	icon: ReactNode;
	text: string;
}) {
	return (
		<div className="grid place-items-center gap-4">
			{icon}
			<p className="text-muted-fg">{text}</p>
		</div>
	);
}
