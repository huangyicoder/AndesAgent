import type { ReactNode } from "react";

export function RootLayout({ children }: { children: ReactNode }) {
	return <div className="h-screen w-screen overflow-hidden">{children}</div>;
}
