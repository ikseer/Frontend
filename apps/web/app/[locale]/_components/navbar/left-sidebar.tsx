"use client";

import { Link, usePathname } from "@/navigation";
import { cva } from "class-variance-authority";
import {
	BadgeCent,
	FileText,
	LayoutDashboard,
	Package,
	PanelsTopLeft,
	UserCircle,
	WalletCards,
} from "lucide-react";
import { useTranslations } from "next-intl";
import type { ComponentProps } from "react";
import "./open.css";
import { useCurrentUser } from "@ikseer/api/config/session.client";
import { cn } from "@ikseer/lib/utils";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@ikseer/ui/components/ui/accordion";
export default function LeftSideBar() {
	return (
		<div className="md:block hidden h-full pt-3 bg-gray-100">
			<div className="flex items-center gap-2 px-4">
				<p className="text-primary md:text-lg lg:text-xl font-bold">Ikseer</p>
			</div>
			<DashboardSection />
		</div>
	);
}

export function DashboardSection({ className }: { className?: string }) {
	const t = useTranslations("NavBar");
	const session = useCurrentUser();
	if (!session)
		return (
			<p className="text-muted-foreground px-4 py-5">
				{t(
					"you-should-login-to-be-able-to-see-the-dashboard-and-make-use-of-tekview-feautres",
				)}
			</p>
		);

	return (
		<>
			<Accordion
				type="single"
				collapsible
				className={cn("space-y-2 py-5", className)}
			>
				<AccordionItem value="item-1" className="isOpen">
					<AccordionTrigger className="hover:text-black/70 w-full px-2 py-1 text-base font-medium text-black rounded">
						<div className="gap-x-2 flex">
							<LayoutDashboard className="lg:w-6 md:h-6 w-4 h-4" />{" "}
							{t("dashboard")}
						</div>
					</AccordionTrigger>
					<AccordionContent className="lg:gap-3 lg:text-base gap-2 text-sm z-10 border-white my-3 ms-3 px-3 border-s-[2px] ">
						<NavLink href="/profile">
							<UserCircle className="w-5 h-5" /> Products
						</NavLink>
						<NavLink href="/invoices">
							<FileText className="w-5 h-5" /> {t("invoice")}
						</NavLink>
						<NavLink href="/subscription">
							<BadgeCent className="w-5 h-5" /> {t("subscriptions")}
						</NavLink>
						<NavLink href="/saved-card">
							<WalletCards className="w-5 h-5" /> {t("saved-card")}
						</NavLink>
					</AccordionContent>
				</AccordionItem>

				<AccordionItem className="isOpen" value="item-2">
					<AccordionTrigger className="hover:text-black/70 flex w-full px-2 py-1 text-base font-medium text-black rounded">
						<div className="lg:gap-3 lg:text-base flex gap-2 text-sm">
							<PanelsTopLeft className="lg:w-6 md:h-6 w-4 h-4" /> Products
						</div>
					</AccordionTrigger>
					<AccordionContent className="z-10 border-white my-3 ms-3 px-3 border-s-[2px]">
						<NavLink href="/your-websites">{t("your-websites")}</NavLink>
						<NavLink href="/templates">{t("available-templates")}</NavLink>
					</AccordionContent>
				</AccordionItem>
			</Accordion>

			<Link
				href="/pricing"
				className="lg:gap-3 lg:text-base hover:text-black/70 flex items-center w-full gap-2 px-2 py-1 text-sm font-medium text-black rounded"
			>
				<Package className="lg:w-6 md:h-6 w-4 h-4" /> {t("pricing")}
			</Link>
		</>
	);
}

const navLinkVariants = cva(
	"flex items-center rounded-lg gap-1 lg:gap-2 text-sm focus:ring-2 focus:ring-accent font-medium gap-3.5 py-2 px-3 text-black  mb-2 hover:bg-gray-200",
	{
		variants: {
			current: {
				true: "text-primary hover:text-primary/80",
				false: "hover:text-black/70",
			},
			isPrice: {
				false: "bg-white",
			},
		},
	},
);

function NavLink(props: ComponentProps<typeof Link>) {
	const currPath = usePathname();
	return (
		<Link
			{...props}
			aria-current={currPath === props.href ? "page" : undefined}
			className={navLinkVariants({
				current: currPath === props.href,
				className: props.className,
				isPrice: props.href === "/pricing",
			})}
		/>
	);
}
