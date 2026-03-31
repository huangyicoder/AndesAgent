import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import {
	Outlet,
	RouterProvider,
	createRootRoute,
	createRoute,
	createRouter,
} from "@tanstack/react-router";
import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./app.css";
import { RootLayout } from "./components/layout/root-layout";
import { settingsApi } from "./lib/api";
import { resolveAppLanguage } from "./lib/language";
import { SettingsPage } from "./routes/settings";
import { WorkbenchPage } from "./routes/workbench";
import { useAppStore } from "./stores/app-store";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 30_000,
			retry: 1,
		},
	},
});

function AppLanguageSync() {
	const setUiLanguage = useAppStore((state) => state.setUiLanguage);
	const { data: settings = {} } = useQuery({
		queryKey: ["settings"],
		queryFn: settingsApi.get,
	});

	useEffect(() => {
		const language = resolveAppLanguage(settings.language);
		document.documentElement.lang = language;
		setUiLanguage(language);
	}, [setUiLanguage, settings.language]);

	return null;
}

// Define routes
const rootRoute = createRootRoute({
	component: () => (
		<QueryClientProvider client={queryClient}>
			<AppLanguageSync />
			<RootLayout>
				<Outlet />
			</RootLayout>
		</QueryClientProvider>
	),
});

const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: WorkbenchPage,
});

const agentRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/agent/$agentId",
	component: WorkbenchPage,
});

const settingsRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/settings",
	component: SettingsPage,
});

const routeTree = rootRoute.addChildren([indexRoute, agentRoute, settingsRoute]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error('Root element "#root" not found');
}

createRoot(rootElement).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
