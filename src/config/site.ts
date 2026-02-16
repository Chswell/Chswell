export type SiteConfig = typeof siteConfig

export const siteConfig = {
	name: 'Streltsov Nikita',
	description: 'Frontend developer',
	links: {
		github: 'https://github.com/Chswell',
		linkedin: 'https://www.linkedin.com/in/nikita-streltsov',
		telegram: 'https://t.me/Chswell',
		website: 'https://streltsov-developer.ru'
	},
	linkButtons: [
		{
			text: 'GitHub',
			link: 'https://github.com/Chswell'
		},
		{
			text: 'LinkedIn',
			link: 'https://www.linkedin.com/in/nikita-streltsov/'
		},
		{
			text: 'Telegram',
			link: 'https://t.me/chswell'
		}
	],
	PROJECT_ROLES: ['Frontend', 'Backend', 'Fullstack', 'Product'] as const,
	STACK_OPTIONS: [
		'React',
		'Vue',
		'Angular',
		'Next.js',
		'TypeScript',
		'JavaScript',
		'Node.js',
		'Python',
		'Go',
		'.NET',
		'Java',
		'PHP',
		'Rust',
		'PostgreSQL',
		'MongoDB',
		'Redis',
		'Docker',
		'Kubernetes'
	] as const
}
