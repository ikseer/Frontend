"use client";
import { GOOGLE_CLIENT_ID } from "@/lib/constants";
import { FullScreenLoadingSpinner } from "@ikseer/ui/components/ui/loading-spinner";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { Suspense, useState } from "react";

export function App({ children, ...props }: ThemeProviderProps) {
	const [client] = useState(new QueryClient());
	console.log(GOOGLE_CLIENT_ID, "google client id");
	return (
		<Suspense fallback={<FullScreenLoadingSpinner />}>
			<ProgressBar
				height="4px"
				color="hsl(var(--primary))"
				shallowRouting
				options={{ showSpinner: false }}
			/>
			<GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID as string}>
				<NextThemesProvider {...props}>
					<QueryClientProvider client={client}>
						<ReactQueryStreamedHydration>
							{children}
						</ReactQueryStreamedHydration>
						{process.env.NODE_ENV === "development" && (
							<ReactQueryDevtools initialIsOpen={false} />
						)}
					</QueryClientProvider>
				</NextThemesProvider>
			</GoogleOAuthProvider>
		</Suspense>
	);
}
