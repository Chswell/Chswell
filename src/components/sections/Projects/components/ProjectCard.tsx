import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card.tsx'
import { Badge } from '@/components/ui/badge'

export type ProjectCardProps = {
	title: string
	description: string
	imageSrc: string
	imageAlt: string
	href: string
	tools: string[]
}

export const ProjectCard = ({
	title,
	description,
	imageSrc,
	imageAlt,
	href,
	tools
}: ProjectCardProps) => {
	return (
		<a href={href} target='_blank' rel='noreferrer' className='block w-full'>
			<CardContainer
				className='inter-var cursor-pointer'
				containerClassName='py-0 flex items-center justify-center'
			>
				<CardBody className='group/card relative h-auto min-h-0 w-full rounded-xl border border-black/[0.1] bg-gray-50 p-4 sm:p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]'>
					<CardItem
						translateZ='50'
						className='text-lg font-bold text-neutral-600 sm:text-xl dark:text-white'
					>
						{title}
					</CardItem>
					<CardItem
						as='p'
						translateZ='60'
						className='mt-2 h-10 max-w-sm text-sm text-neutral-500 sm:min-h-0 dark:text-neutral-300'
					>
						{description}
					</CardItem>
					<CardItem translateZ='100' className='mt-4 w-full'>
						<img
							src={imageSrc}
							className='h-40 w-full rounded-xl border border-blue-900/30 object-cover transition-shadow group-hover/card:shadow-xl sm:h-52'
							alt={imageAlt}
						/>
					</CardItem>
					<CardItem translateZ='50' className='mt-10 h-20 w-full'>
						<div className={'flex flex-wrap gap-1'}>
							{tools.map((tool, index) => (
								<Badge variant='secondary' key={`${tool}-${index}`}>
									{tool}
								</Badge>
							))}
						</div>
					</CardItem>
				</CardBody>
			</CardContainer>
		</a>
	)
}
