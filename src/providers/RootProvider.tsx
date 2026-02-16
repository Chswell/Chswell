import type { ReactNode } from 'react'

import { TooltipProvider } from '@/components/ui/tooltip.tsx'

import { ThemeProvider } from '@/providers/ThemeProvider.tsx'

const RootProvider = ({ children }: { children: ReactNode }) => {
	return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
			<TooltipProvider>{children}</TooltipProvider>
		</ThemeProvider>
	)
}

export { RootProvider }
