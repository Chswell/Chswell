import {
	Tooltip,
	TooltipContent,
	TooltipTrigger
} from '@/components/ui/tooltip.tsx'

interface ITextPressureItemProps {
	text: string
	link: string
	engText: string
}

export const TextPressureItem = ({
	text,
	link,
	engText
}: ITextPressureItemProps) => {
	return (
		<h2 className='scroll-m-20 border-b pb-2 text-center font-semibold tracking-tight first:mt-0 sm:text-right'>
			<a href={link}>
				<Tooltip>
					<TooltipTrigger asChild>
						<div className={'flex-col'}>
							<p className={'text-2xl'}>{text}</p>
						</div>
					</TooltipTrigger>
					<TooltipContent>
						<p>{engText}</p>
					</TooltipContent>
				</Tooltip>
				{/*<TextPressure*/}
				{/*	text={text}*/}
				{/*	flex*/}
				{/*	alpha={false}*/}
				{/*	stroke={false}*/}
				{/*	width={false}*/}
				{/*	weight*/}
				{/*	italic*/}
				{/*	textColor='#ffffff'*/}
				{/*	strokeColor='#3300ff'*/}
				{/*	minFontSize={20}*/}
				{/*/>*/}
			</a>
		</h2>
	)
}
