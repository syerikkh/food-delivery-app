import React from 'react'
import { ThreeDotIcon } from './Icons/ThreeDotIcon'


export const FoodCategoryLabel = ({ name }: { name: String }) => {
    return (
        <div className='px-4 hover:bg-main hover:text-white py-2 border w-[280px] h-[43px] rounded-lg font-medium cursor-pointer flex justify-between items-center'>
            {name}
            <ThreeDotIcon />
        </div>
    )
}
