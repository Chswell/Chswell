import { Github, Globe, Linkedin, MessageCircle } from 'lucide-react'

import { siteConfig } from '@/config/site'

export function Footer() {
	return (
		<footer className='border-default-200 mt-10 w-full border-t'>
			<div className='container mx-auto max-w-7xl px-6 py-6'>
				<div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
					<div className='flex flex-col items-center gap-2 sm:items-start'>
						<p className='text-muted-foreground flex items-center gap-2 text-sm'>
							Разработано
							<a
								href={siteConfig.links.github}
								target='_blank'
								className='hover:text-foreground text-blue-600 transition-colors dark:text-blue-400'
								aria-label='Website'
							>
								Streltsov Nikita
							</a>
						</p>
						<p className='text-muted-foreground text-center text-xs sm:text-left'>
							© {new Date().getFullYear()} streltsov-developer. Все права
							защищены.
						</p>
					</div>
					<div className='flex items-center gap-4'>
						<a
							target='_blank'
							href={siteConfig.links.github}
							aria-label='GitHub'
							className='text-default-500 hover:text-foreground transition-all ease-in-out hover:opacity-70'
						>
							<Github size={20} />
						</a>
						<a
							target='_blank'
							href={siteConfig.links.linkedin}
							aria-label='aedIn'
							className='text-default-500 hover:text-foreground transition-all ease-in-out hover:opacity-70'
						>
							<Linkedin size={20} />
						</a>
						<a
							target='_blank'
							href={siteConfig.links.telegram}
							aria-label='Telegram'
							className='text-default-500 hover:text-foreground transition-all ease-in-out hover:opacity-70'
						>
							<MessageCircle size={20} />
						</a>
						<a
							target='_blank'
							href={siteConfig.links.website}
							aria-label='Сайт'
							className='text-default-500 hover:text-foreground transition-all ease-in-out hover:opacity-70'
						>
							<Globe size={20} />
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
