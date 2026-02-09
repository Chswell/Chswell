import { RootProvider } from '@/providers/RootProvider.tsx'

import { MainPage } from '@/pages/main/Main.page.tsx'

function App() {
	return (
		<RootProvider>
			<MainPage />
		</RootProvider>
	)
}

export default App
