import { availableLocaleCodes } from "@/next.locales";
import { type RouteType, makeRoutes } from "@ikseer/lib/routes";
import { z } from "zod";

export const LOGIN_REDIRECT = "/login";
export const AFTER_LOGIN_REDIRECT = "/";

export const Routes = makeRoutes(
	(makeRoute) => {
		return {
			home: makeRoute("/"),
			login: makeRoute("/login", { type: "auth" }),
			notAuthorized: makeRoute("/not-authorized", { type: "auth" }),
			dashboard: makeRoute("/dashboard", {
				type: "private",
			}),
			products: makeRoute("/dashboard/products", {
				type: "private",
				search: z.object({
					q: z.string().optional(),
				}),
			}),
			productPage: makeRoute("/dashboard/products/:productId", {
				type: "private",
				params: z.object({
					productId: z.string().uuid(),
				}),
			}),
			patients: makeRoute("/dashboard/patients", {
				type: "private",
				search: z.object({
					q: z.string().optional(),
				}),
			}),
			editPatient: makeRoute("/dashboard/patient/:patientId/edit", {
				type: "private",
				params: z.object({
					patientId: z.string().uuid(),
				}),
			}),
			patient: makeRoute("/dashboard/patient/:patientId", {
				type: "private",
				params: z.object({
					patientId: z.string().uuid(),
				}),
			}),
		};
	},
	{
		locales: availableLocaleCodes,
	},
);

export function checkRouteType(path: string, type: RouteType) {
	for (const route of Object.values(Routes))
		if (route.doesMatch(path) && route.type === type) return true;
	return false;
}
