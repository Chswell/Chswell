import {
	Tooltip,
	TooltipContent,
	TooltipTrigger
} from '@/components/ui/tooltip.tsx'

export const IconsLine = () => {
	return (
		<div className={'mb-30 hidden bg-black/0 px-10 sm:inline-block'}>
			<div className={'flex'}>
				<Tooltip>
					<TooltipTrigger asChild>
						<div className={'flex-col'}>
							<p className={'text-5xl'}>Творецъ Писаний</p>
							<p className={'text-5xl'}>Машинныхъ</p>
						</div>
					</TooltipTrigger>
					<TooltipContent>
						<p>Software developer</p>
					</TooltipContent>
				</Tooltip>
				<div className={'z-10 flex w-full items-center justify-between pl-10'}>
					<Tooltip>
						<TooltipTrigger asChild>
							<img
								src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
								className={'h-15'}
								alt='typescript logo'
							/>
						</TooltipTrigger>
						<TooltipContent>
							<p>TypeScript</p>
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<img
								src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
								className={'h-15'}
								alt='react logo'
							/>
						</TooltipTrigger>
						<TooltipContent>
							<p>React / React Native</p>
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<img
								src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
								className={'h-15'}
								alt='nextjs logo'
							/>
						</TooltipTrigger>
						<TooltipContent>
							<p>Next.js</p>
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<img
								src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
								className={'h-15'}
								alt='javascript logo'
							/>
						</TooltipTrigger>
						<TooltipContent>
							<p>JavaScript</p>
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<img
								src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
								className={'h-15'}
								alt='html5 logo'
							/>
						</TooltipTrigger>
						<TooltipContent>
							<p>html</p>
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<img
								src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
								className={'h-15'}
								alt='css logo'
							/>
						</TooltipTrigger>
						<TooltipContent>
							<p>css</p>
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<img
								src='https://skillicons.dev/icons?i=tailwind'
								className={'h-15'}
								alt='tailwindcss logo'
							/>
						</TooltipTrigger>
						<TooltipContent>
							<p>Tailwind</p>
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<img
								src='https://cdn.simpleicons.org/docker/2496ED'
								className={'h-15'}
								alt='docker logo'
							/>
						</TooltipTrigger>
						<TooltipContent>
							<p>Docker</p>
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<img
								src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg'
								className={'h-15'}
								alt='jest logo'
							/>
						</TooltipTrigger>
						<TooltipContent>
							<p>Jest</p>
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<img
								src='https://cdn.simpleicons.org/git/F05032'
								className={'h-15'}
								alt='git logo'
							/>
						</TooltipTrigger>
						<TooltipContent>
							<p>Git</p>
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<img
								src='https://cdn.simpleicons.org/gitlab/FC6D26'
								className={'h-15'}
								alt='gitlab logo'
							/>
						</TooltipTrigger>
						<TooltipContent>
							<p>GitLab</p>
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<img
								src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg'
								className={'h-15'}
								alt='jira logo'
							/>
						</TooltipTrigger>
						<TooltipContent>
							<p>Jira</p>
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<img
								src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg'
								className={'h-15'}
								alt='nestjs logo'
							/>
						</TooltipTrigger>
						<TooltipContent>
							<p>NestJS</p>
						</TooltipContent>
					</Tooltip>
				</div>
			</div>
		</div>
	)
}
