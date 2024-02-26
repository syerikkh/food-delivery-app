import React from 'react'
import { CategoryLabel } from '../CategoryLabel'
import { FoodsCard } from '../FoodsCard'

export const MenuPage = () => {
    return (
        <div className='w-[1440px] m-auto px-10'>
            <div className='px-30 py-8'>
                <div className='flex justify-between'>
                    <CategoryLabel categoryName='Breakfast' />
                    <CategoryLabel categoryName='Soup' />
                    <CategoryLabel categoryName='Main Course' />
                    <CategoryLabel categoryName='Dessert' />
                </div>
            </div>
            <div className='flex flex-col gap-10 mt-10 mb-20'>
                <div className='flex justify-between'>
                    <FoodsCard foodImage={<img src='FoodPic.png' />} discount={30} foodName='Breakfast' foodPrice={22000} discountPrice={18000} />
                    <FoodsCard foodImage={<img src='FoodPic.png' />} discount={30} foodName='Breakfast' foodPrice={22000} discountPrice={18000} />
                    <FoodsCard foodImage={<img src='FoodPic.png' />} discount={30} foodName='Breakfast' foodPrice={22000} discountPrice={18000} />
                    <FoodsCard foodImage={<img src='FoodPic.png' />} discount={30} foodName='Breakfast' foodPrice={22000} discountPrice={18000} />
                </div>
                <div className='flex justify-between'>
                    <FoodsCard foodImage={<img src='FoodPic.png' />} discount={30} foodName='Breakfast' foodPrice={22000} discountPrice={18000} />
                    <FoodsCard foodImage={<img src='FoodPic.png' />} discount={30} foodName='Breakfast' foodPrice={22000} discountPrice={18000} />
                    <FoodsCard foodImage={<img src='FoodPic.png' />} discount={30} foodName='Breakfast' foodPrice={22000} discountPrice={18000} />
                    <FoodsCard foodImage={<img src='FoodPic.png' />} discount={30} foodName='Breakfast' foodPrice={22000} discountPrice={18000} />
                </div>
                <div className='flex justify-between'>
                    <FoodsCard foodImage={<img src='FoodPic.png' />} discount={30} foodName='Breakfast' foodPrice={22000} discountPrice={18000} />
                    <FoodsCard foodImage={<img src='FoodPic.png' />} discount={30} foodName='Breakfast' foodPrice={22000} discountPrice={18000} />
                    <FoodsCard foodImage={<img src='FoodPic.png' />} discount={30} foodName='Breakfast' foodPrice={22000} discountPrice={18000} />
                    <FoodsCard foodImage={<img src='FoodPic.png' />} discount={30} foodName='Breakfast' foodPrice={22000} discountPrice={18000} />
                </div>
            </div>
        </div>
    )
}
