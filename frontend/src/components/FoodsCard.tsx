import React, { ReactElement } from 'react'

type FoodsCard = {
    foodImage: ReactElement, discount: number, foodName: string, foodPrice: number, discountPrice: number
}

export const FoodsCard = ({ foodImage, discount, foodName, foodPrice, discountPrice }: FoodsCard) => {
    const formattedFoodPrice = foodPrice.toLocaleString();
    const formattedDiscountPrice = discountPrice.toLocaleString();
    return (
        <div className='flex gap-4'>
            <div className='flex flex-col gap-2'>
                <div className='relative'>
                    {foodImage}
                    <div className='bg-main absolute top-4 right-4 flex justify-center text-white font-bold items-center p-2 rounded-2xl w-[69px] h-[35px]'>
                        {discount}%
                    </div>
                </div>
                <div className='px-3'>
                    <p className='font-bold'>{foodName}</p>
                    <div className='flex gap-2'>
                        <p className='font-bold text-main'>{formattedFoodPrice}</p>
                        <div className='text-decoration-line: line-through'>{formattedDiscountPrice}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
