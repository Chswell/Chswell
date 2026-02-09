import LightRays from '@/components/LightRays.tsx'
import ShinyText from '@/components/ShinyText.tsx'
import TextPressure from '@/components/TextPressure.tsx'

export function MainPage() {
	return (
		<div className={'relative h-[100svh] w-[100svw]'}>
			<LightRays
				raysOrigin='top-center'
				raysColor='#ffffff'
				raysSpeed={1}
				lightSpread={0.5}
				rayLength={3}
				followMouse={true}
				mouseInfluence={0.1}
				noiseAmount={0}
				distortion={0}
				className='absolute top-0 right-0 bottom-0 left-0'
				pulsating={false}
				fadeDistance={1}
				saturation={1}
			/>
			<div
				className={
					'absolute top-0 right-0 bottom-0 left-0 z-10 flex items-center'
				}
			>
				<div
					className={
						'flex flex-1 flex-col items-center justify-center gap-10 sm:flex-row sm:gap-20'
					}
				>
					{/* links */}
					<div>
						<h2 className='scroll-m-20 border-b pb-2 text-center text-2xl font-semibold tracking-tight first:mt-0 sm:text-right sm:text-5xl'>
							<a href={'https://github.com/Chswell'}>
								<TextPressure
									text='GitHub'
									flex
									alpha={false}
									stroke={false}
									width={false}
									weight
									italic
									textColor='#ffffff'
									strokeColor='#3300ff'
									minFontSize={36}
								/>
							</a>
						</h2>
						<h2 className='scroll-m-20 border-b pb-2 text-center text-2xl font-semibold tracking-tight first:mt-0 sm:text-right sm:text-5xl'>
							<a href={'https://www.linkedin.com/in/nikita-streltsov/'}>
								<TextPressure
									text='LinkedIn'
									flex
									alpha={false}
									stroke={false}
									width={false}
									weight
									italic
									textColor='#ffffff'
									strokeColor='#3300ff'
									minFontSize={36}
								/>
							</a>
						</h2>
						<h2 className='scroll-m-20 border-b pb-2 text-center text-2xl font-semibold tracking-tight first:mt-0 sm:text-right sm:text-5xl'>
							<a href={'https://t.me/chswell'}>
								<TextPressure
									text='Telegram'
									flex
									alpha={false}
									stroke={false}
									width={false}
									weight
									italic
									textColor='#ffffff'
									strokeColor='#3300ff'
									minFontSize={36}
								/>
							</a>
						</h2>
					</div>

					{/* Title */}
					<ShinyText
						text='Streltsov Nikita'
						speed={2}
						delay={0}
						color='#b5b5b5'
						shineColor='#ffffff'
						spread={120}
						direction='left'
						yoyo={false}
						pauseOnHover={false}
						disabled={false}
						className={
							'scroll-m-20 text-7xl font-extrabold tracking-tight text-balance max-sm:text-center sm:text-9xl'
						}
					/>
				</div>
			</div>
		</div>
	)
}
