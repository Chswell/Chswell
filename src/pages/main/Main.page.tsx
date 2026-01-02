// import { ModeToggle } from '@/components/widgets/ThemeToggle.tsx'

export function MainPage() {
	return (
		<div className={'flex h-[100svh] w-[100svw] flex-1 py-5 sm:px-50'}>
			{/*<ModeToggle />*/}

			{/*	container 1 */}
			<div
				className={
					'flex flex-1 flex-col items-center justify-center gap-10 sm:flex-row sm:gap-20'
				}
			>
				{/* links */}
				<div>
					<h2 className='scroll-m-20 border-b pb-2 text-center text-2xl font-semibold tracking-tight first:mt-0 sm:text-right sm:text-5xl'>
						<a href={'https://github.com/Chswell'}>GitHub</a>
					</h2>
					<h2 className='scroll-m-20 border-b pb-2 text-center text-2xl font-semibold tracking-tight first:mt-0 sm:text-right sm:text-5xl'>
						<a href={'https://www.linkedin.com/in/nikita-streltsov/'}>
							LinkedIn
						</a>
					</h2>
					<h2 className='scroll-m-20 border-b pb-2 text-center text-2xl font-semibold tracking-tight first:mt-0 sm:text-right sm:text-5xl'>
						<a href={'https://t.me/chswell'}>Telegram</a>
					</h2>
				</div>

				{/* Title */}
				<div>
					<h1 className='scroll-m-20 text-7xl font-extrabold tracking-tight text-balance max-sm:text-center sm:text-9xl'>
						Streltsov
					</h1>
					<h1 className='scroll-m-20 text-7xl font-extrabold tracking-tight text-balance max-sm:text-center sm:text-9xl'>
						Nikita
					</h1>
				</div>
			</div>

			{/*	container 2 */}
		</div>
	)
}
