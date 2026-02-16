import { ProjectCard } from '@/components/sections/Projects/components/ProjectCard.tsx'

const projects = [
	{
		title: 'AlgoStudy.ru',
		description:
			'Интерактивная веб-платформа для изучения алгоритмов и структур данных.',
		imageSrc: 'public/projects/algostudy.png',
		imageAlt: 'algostudy.ru',
		href: 'https://algostudy.ru/',
		tools: ['Next.js', 'TypeScript', 'Tailwind', 'Shadcn', 'Zustand', 'Vercel']
	},
	{
		title: 'PPFound.ru',
		description: 'Сервис поиска команды для pet-проектов',
		imageSrc: 'public/projects/ppfound.png',
		imageAlt: 'ppfound.ru',
		href: 'https://ppfound.ru/',
		tools: [
			'Next.js',
			'TypeScript',
			'HeroUI',
			'FramerMotion',
			'Tailwind',
			'Vercel'
		]
	},
	{
		title: 'WorkoutTracker.ru',
		description: 'Приложение для отслеживания тренировок',
		imageSrc: 'public/projects/workouttracker.png',
		imageAlt: 'workouttracker.ru',
		href: 'https://workouttracker.ru/',
		tools: [
			'Next.js',
			'TypeScript',
			'NestJS',
			'Prisma',
			'nodemailer',
			'Jest',
			'Tailwind',
			'HeroUI',
			'Zustand',
			'Axios'
		]
	}
]

export const Projects = () => {
	return (
		<div className='mx-auto w-full max-w-7xl sm:px-6 lg:px-8'>
			<div className='grid grid-cols-1 gap-3 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10'>
				{projects.map(project => (
					<ProjectCard key={project.title} {...project} />
				))}
			</div>
		</div>
	)
}
