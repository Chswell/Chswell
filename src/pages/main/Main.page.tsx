// import { ModeToggle } from '@/components/widgets/ThemeToggle.tsx'

export function MainPage() {
	return (
		<div className={'flex h-[100svh] w-[100svw] flex-1 px-50 py-5'}>
			{/*<ModeToggle />*/}

			{/*	container 1 */}
			<div className={'flex flex-1 items-center justify-center gap-20 px-50'}>
				{/* links */}
				<div>
					<h2 className='scroll-m-20 border-b pb-2 text-right text-5xl font-semibold tracking-tight first:mt-0'>
						<a href={'https://github.com/Chswell'}>GitHub</a>
					</h2>
					<h2 className='scroll-m-20 border-b pb-2 text-right text-5xl font-semibold tracking-tight first:mt-0'>
						LinkedIn
					</h2>
					<h2 className='scroll-m-20 border-b pb-2 text-right text-5xl font-semibold tracking-tight first:mt-0'>
						Telegram
					</h2>
				</div>

				{/* Title */}
				<div>
					<h1 className='scroll-m-20 text-9xl font-extrabold tracking-tight text-balance'>
						Streltsov
					</h1>
					<h1 className='scroll-m-20 text-9xl font-extrabold tracking-tight text-balance'>
						Nikita
					</h1>
				</div>
			</div>

			{/*	container 2 */}
		</div>
	)
}
