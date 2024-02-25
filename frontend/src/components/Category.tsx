import React from 'react'
import { TitleIcon } from './Icons/TitleIcon'
import { RighArrow } from './Icons/RighArrow'

export const Category = ({ categoryTitle }: { categoryTitle: string }) => {
    return (
        <div className='w-full flex justify-between mt-20'>
            <div className='flex gap-4 items-center'>
                <TitleIcon />
                <h1 className='font-bold text-2xl text-[#272727]'>{categoryTitle}</h1>
            </div>
            <button className='flex gap-2 items-center text-[#18BA51]'>Бүгдийг харах <RighArrow /></button>
        </div>
    )
}
