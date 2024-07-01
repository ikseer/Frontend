"use client";

import { FullScreenLoadingSpinner } from "@ikseer/ui/components/ui/loading-spinner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { Suspense, useState } from "react";

export function App({ children, ...props }: ThemeProviderProps) {
	const [client] = useState(new QueryClient());

	return (
		<Suspense fallback={<FullScreenLoadingSpinner />}>
			<ProgressBar
				height="4px"
				color="hsl(var(--primary))"
				shallowRouting
				options={{ showSpinner: false }}
			/>
			<NextThemesProvider {...props}>
				<QueryClientProvider client={client}>
					<ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
					{process.env.NODE_ENV === "development" && (
						<ReactQueryDevtools initialIsOpen={false} />
					)}
				</QueryClientProvider>
			</NextThemesProvider>
		</Suspense>
	);
}
