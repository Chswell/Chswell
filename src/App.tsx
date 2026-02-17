import { Analytics } from '@vercel/analytics/react'

import { RootProvider } from '@/providers/RootProvider.tsx'

import { MainPage } from '@/pages/main/Main.page.tsx'

function App() {
	return (
		<RootProvider>
			<MainPage />
			<Analytics />
		</RootProvider>
	)
}

export default App
