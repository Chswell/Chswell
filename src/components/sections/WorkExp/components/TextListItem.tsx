import React from 'react'

import { Item, ItemContent, ItemDescription } from '@/components/ui/item.tsx'

interface ITextListItemProps {
	value: string
}

export const TextListItem: React.FC<ITextListItemProps> = ({ value }) => {
	// return <p className={'flex h-13 max-w-[95%] items-center'}>{value}</p>
	return (
		<Item variant='outline'>
			<ItemContent>
				<ItemDescription>{value}</ItemDescription>
			</ItemContent>
		</Item>
	)
}
