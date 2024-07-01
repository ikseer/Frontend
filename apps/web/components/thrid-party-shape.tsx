import { Link } from "@/navigation";
import { cn } from "@ikseer/lib/utils";
import Image from "next/image";

export default function AuthShape({
	authImage,
	text,
	className,
}: {
	authImage: string;
	text?: string;
	className?: string;
}) {
	return (
		<section
			className={cn("bg-white dark:bg-zinc-900  mb-6 rounded", className)}
		>
			<Link href="/" className="flex items-center justify-center py-2 ">
				<Image
					src={authImage}
					alt="auth image"
					className="inline-block w-6 h-6 ltr:mr-6 rtl:ml-6"
					width={400}
					height={400}
				/>
				<span>{text}</span>
			</Link>
		</section>
	);
}
