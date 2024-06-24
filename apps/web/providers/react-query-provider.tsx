"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { useState } from "react";

function ReactQueryProvider({ children }: React.PropsWithChildren) {
	const [client] = useState(new QueryClient());

	return (
		<QueryClientProvider client={client}>
			<ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
			{process.env.NODE_ENV === "development" && (
				<ReactQueryDevtools initialIsOpen={false} />
			)}
		</QueryClientProvider>
	);
}

export default ReactQueryProvider;
