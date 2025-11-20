import type { ReactNode } from "react";
import { ThemeProvider } from "@/providers/ThemeProvider.tsx";

const RootProvider = ({ children }: { children: ReactNode }) => {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			{children}
		</ThemeProvider>
	)
}

export { RootProvider }
