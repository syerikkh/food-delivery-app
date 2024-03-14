import React, { useState } from 'react'
import { HeaderPart } from '../HeaderPart'
import { FooterPart } from '../FooterPart'
import { Category } from '../Category'
import { CategoryContainer } from '../CategoryContainer'
import { ThreeDotIcon } from '../Icons/ThreeDotIcon'
import { FoodCategoryLabel } from '../FoodCategoryLabel'
import { FoodsCard } from '../FoodsCard'
import { CreateFoodCard } from '../CreateFoodCard'
import { CreateCategoryCard } from '../CreateCategoryCard'

export const CrudPage = () => {
    const [foodCardVisible, setFoodCardVisible] = useState(false);
    const [categoryCardVisible, setCategoryCardVisible] = useState(false);

    return (
        <div>
            {foodCardVisible && <CreateFoodCard />}
            {categoryCardVisible && <CreateCategoryCard />}
            <HeaderPart />
            <div className='flex w-[1440px] gap-5 px-10 m-auto mt-20 mb-16'>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-xl font-bold'>Food menu</h1>
                    <div className='flex flex-col gap-5'>
                        <FoodCategoryLabel name={"Breakfast"} />
                        <FoodCategoryLabel name={"Breakfast"} />
                    </div>
                    <button onClick={() => { setCategoryCardVisible(!categoryCardVisible) }} className='px-4 hover:bg-main text-[#5E6166] hover:text-white py-2 border w-[280px] h-[43px] rounded-lg font-medium cursor-pointer flex justify-between items-center'>
                        Create New Category
                    </button>
                </div>
                <div className='flex flex-col gap-5 w-full'>
                    <div className='flex justify-between'>
                        <h1 className='text-xl font-bold'>Breakfast</h1>
                        <button onClick={() => { setFoodCardVisible(!foodCardVisible) }} className='p-2 bg-main text-white rounded-sm'>Add new food</button>
                    </div>
                    <div className='flex justify-between flex-wrap'>
                        <FoodsCard foodImage={<img src='FoodPic.png' />} discount={20} foodName='haha' foodPrice={20} discountPrice={20} />
                        <FoodsCard foodImage={<img src='FoodPic.png' />} discount={20} foodName='haha' foodPrice={20} discountPrice={20} />
                        <FoodsCard foodImage={<img src='FoodPic.png' />} discount={20} foodName='haha' foodPrice={20} discountPrice={20} />
                        <FoodsCard foodImage={<img src='FoodPic.png' />} discount={20} foodName='haha' foodPrice={20} discountPrice={20} />
                        <FoodsCard foodImage={<img src='FoodPic.png' />} discount={20} foodName='haha' foodPrice={20} discountPrice={20} />
                        <FoodsCard foodImage={<img src='FoodPic.png' />} discount={20} foodName='haha' foodPrice={20} discountPrice={20} />
                        <FoodsCard foodImage={<img src='FoodPic.png' />} discount={20} foodName='haha' foodPrice={20} discountPrice={20} />
                    </div>
                </div>

            </div>
        </div>
    )
}
