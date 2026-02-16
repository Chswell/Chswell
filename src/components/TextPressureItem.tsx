import TextPressure from '@/components/TextPressure.tsx'

interface ITextPressureItemProps {
	text: string
	link: string
}

export const TextPressureItem = ({ text, link }: ITextPressureItemProps) => {
	return (
		<h2 className='scroll-m-20 border-b pb-2 text-center text-2xl font-semibold tracking-tight first:mt-0 sm:text-right sm:text-5xl'>
			<a href={link}>
				<TextPressure
					text={text}
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
	)
}
