import LightRays from '@/components/LightRays.tsx'
import ShinyText from '@/components/ShinyText.tsx'
import { TextPressureItem } from '@/components/TextPressureItem.tsx'
import { IconsLine } from '@/components/sections/IconsLine.tsx'
import { Projects } from '@/components/sections/Projects/Projects.tsx'
import { Card, CardContent } from '@/components/ui/card.tsx'
import { Footer } from '@/components/widgets/Footer.tsx'

import { siteConfig } from '@/config/site.ts'

export function MainPage() {
	return (
		<div className={'relative h-[100dvh] w-[100dvw] overflow-x-hidden'}>
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
					'absolute top-0 right-0 bottom-0 left-0 z-10 flex flex-col items-center justify-center'
				}
			>
				<Card className={'h-[95%] w-[90%] bg-black/30'}>
					<CardContent className={'no-scrollbar flex flex-col overflow-y-auto'}>
						<div
							className={
								'flex min-h-[95dvh] flex-col items-center justify-center gap-10 sm:flex-row sm:gap-20'
							}
						>
							{/* links */}
							<div>
								{siteConfig.linkButtons.map(item => (
									<TextPressureItem text={item.text} link={item.link} />
								))}
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
						{/* -------------------------------- 2 section -------------------------------- */}
						<IconsLine />
						{/* -------------------------------- 3 section -------------------------------- */}
						<Projects />
						{/* -------------------------------- Footer -------------------------------- */}
						<Footer />
					</CardContent>
				</Card>
			</div>
		</div>
	)
}
