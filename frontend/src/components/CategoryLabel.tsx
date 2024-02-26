import React from 'react'

export const CategoryLabel = ({ categoryName }: { categoryName: string }) => {
    return (
        <div className='px-4 py-2 text-center border w-[280px] h-[43px] rounded-lg font-medium cursor-pointer'>
            {categoryName}
        </div>
    )
}
