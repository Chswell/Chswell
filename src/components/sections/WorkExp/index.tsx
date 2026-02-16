import React from 'react'

import CountUp from '@/components/CountUp.tsx'
import GradientText from '@/components/GradientText.tsx'
import { TextListItem } from '@/components/sections/WorkExp/components/TextListItem.tsx'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/components/ui/accordion.tsx'
import { Card, CardContent } from '@/components/ui/card.tsx'

export const WorkExp = () => {
	const items = [
		{
			value: 'web',
			trigger: 'Web разработка',
			content:
				'Разрабатывал интерфейсы веб-сервисов на React и Next.js: личные кабинеты, формы, списки и сложные экраны с бизнес-логикой.\n' +
				'Интегрировал фронтенд с API, настраивал загрузку и обновление данных, участвовал в создании переиспользуемых компонентов и общей UI-системы.'
		},
		{
			value: 'mobile',
			trigger: 'Мобильная разработка',
			content:
				'Создавал и поддерживал мобильные приложения на React Native.\n' +
				'Реализовывал экраны, навигацию, работу с сервером и оптимизировал стабильность и производительность на разных устройствах.'
		},
		{
			value: 'backend',
			trigger: 'Backend',
			content:
				'Настраивал необходимые серверные функции для работы приложений: авторизацию, отправку писем, обработку запросов и безопасное соединение.'
		},
		{
			value: 'devops',
			trigger: 'Devops',
			content:
				'Настроил CI/CD и автоматический деплой, подготовил окружение в Docker, подключал HTTPS и поддерживал стабильные релизы.'
		}
	]
	const frontendSkillTextValues = [
		'Разработка SPA и SSR-приложений на React и Next.js',
		'Разработка мобильных приложений на React Native',
		'Использование TypeScript для типизации данных, компонентов и запросов к API',
		'Архитектура клиентского состояния (Zustand, MobX)',
		'Работа с асинхронными данными и кэшированием (React Query, Axios)',
		'Создание и поддержка дизайн-системы (Tailwind CSS, shadcn/ui, HeroUI, Ant Design)',
		'Анимации и UX-эффекты (Framer Motion)',
		'Тестирование компонентов и бизнес-логики (Jest)',
		'Контейнеризация окружения разработки (Docker)'
	]
	const backendSkillTextValues = [
		'Проектирование и поддержка базовой серверной инфраструктуры',
		'Автоматизация деплоя через CI/CD (GitHub Actions)',
		'Обеспечение безопасного соединения (HTTPS, SSL/TLS)',
		'Настройка email-уведомлений для пользовательских сценариев'
	]
	return (
		<div className={'flex w-full justify-around'}>
			<Card className='w-full max-w-sm bg-black/10'>
				<CardContent>
					<Accordion type='multiple' defaultValue={['web']}>
						{items.map(item => (
							<AccordionItem key={item.value} value={item.value}>
								<AccordionTrigger>{item.trigger}</AccordionTrigger>
								<AccordionContent>{item.content}</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</CardContent>
			</Card>
			<div className={'flex-col'}>
				<GradientText
					colors={['#5227FF', '#FF9FFC', '#B19EEF']}
					animationSpeed={8}
					showBorder={false}
					className='custom-class'
				>
					<h1
						className={
							'mb-5 flex scroll-m-20 gap-5 text-6xl font-extrabold tracking-tight text-balance'
						}
					>
						Опыт работы
					</h1>
				</GradientText>
				<div className={'flex gap-15'}>
					<div className={'mb-5 max-w-xl'}>
						<div className={'flex flex-col gap-2'}>
							<h2 className='mb-5 scroll-m-20 text-3xl font-extrabold tracking-tight text-balance'>
								Web / Mobile
							</h2>
							{frontendSkillTextValues.map((item, index) => (
								<React.Fragment>
									<TextListItem
										key={`frontend-list-item-${index}`}
										value={item}
									/>
								</React.Fragment>
							))}
						</div>
					</div>
					<div className={'mb-5 max-w-xl'}>
						<div className={'flex flex-col gap-2'}>
							<h2 className='mb-5 scroll-m-20 text-3xl font-extrabold tracking-tight text-balance'>
								Backend / DevOps
							</h2>
							{backendSkillTextValues.map((item, index) => (
								<React.Fragment>
									<TextListItem
										key={`backend-list-item-${index}`}
										value={item}
									/>
								</React.Fragment>
							))}
						</div>
					</div>
				</div>
				<div className={'flex justify-center gap-15'}>
					<div
						className={
							'max-w-xs flex-col items-center justify-center text-center'
						}
					>
						<GradientText
							colors={['#5227FF', '#FF9FFC', '#B19EEF']}
							animationSpeed={8}
							showBorder={false}
							className='custom-class'
						>
							<div className={'flex'}>
								<CountUp
									from={0}
									to={4}
									separator=','
									direction='up'
									duration={1}
									className='count-up-text text-5xl'
								/>
								<p className={'text-5xl'}>+</p>
							</div>
						</GradientText>
						<p className={'text-muted-foreground'}>Лет опыта</p>
					</div>
					<div
						className={
							'max-w-xs flex-col items-center justify-center text-center'
						}
					>
						<div>
							<GradientText
								colors={['#5227FF', '#FF9FFC', '#B19EEF']}
								animationSpeed={8}
								showBorder={false}
							>
								<div className={'flex'}>
									<CountUp
										from={0}
										to={1700}
										separator=','
										direction='up'
										duration={1}
										className='count-up-text text-5xl'
									/>
									<p className={'text-5xl'}>+</p>
								</div>
							</GradientText>
						</div>
						<p className={'text-muted-foreground'}>Общий вклад на GitHub</p>
					</div>
				</div>
			</div>
		</div>
	)
}
