import React from 'react'
import { BookIcon } from '../Icons/BookIcon'
import { CheckProcessCard } from '../CheckProcessCard'
import { ClockIcon } from '../Icons/ClockIcon'
import { HealthIcon } from '../Icons/HealthIcon'
import { FoodsCard } from '../FoodsCard'
import { Category } from '../Category'
import { FooterPart } from '../FooterPart'

export const HomeMainPage = () => {
    return (
        <>
            <div className='w-[1440px] px-10 m-auto mt-20 mb-20 flex flex-col'>
                <div className='flex justify-between items-center'>
                    <CheckProcessCard icon={<BookIcon />} title={"Хүргэлтийн төлөв хянах"} description={"Захиалга бэлтгэлийн явцыг хянах"} />
                    <CheckProcessCard icon={<ClockIcon />} title={"Шуурхай хүргэлт"} description={"Захиалга бэлтгэлийн явцыг хянах"} />
                    <CheckProcessCard icon={<HealthIcon />} title={"Эрүүл, баталгаат орц"} description={"Захиалга бэлтгэлийн явцыг хянах"} />
                    <CheckProcessCard icon={<BookIcon />} title={"Хоолны өргөн сонголт"} description={"Захиалга бэлтгэлийн явцыг хянах"} />
                </div>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-8'>
                        <Category categoryTitle='Хямдралтай' />
                        <div className='flex justify-between'>
                            <FoodsCard foodImage={<img src='FoodPic.png' />} discount={20} foodName='Өглөөний хоол' foodPrice={14800} discountPrice={16800} />
                            <FoodsCard foodImage={<img src='FoodPic.png' />} discount={20} foodName='Өглөөний хоол' foodPrice={14800} discountPrice={16800} />
                            <FoodsCard foodImage={<img src='FoodPic.png' />} discount={20} foodName='Өглөөний хоол' foodPrice={14800} discountPrice={16800} />
                            <FoodsCard foodImage={<img src='FoodPic.png' />} discount={20} foodName='Өглөөний хоол' foodPrice={14800} discountPrice={16800} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <Category categoryTitle='Үндсэн хоол' />
                        <div className='flex justify-between'>
                            <FoodsCard foodImage={<img src='FoodPic.png' />} discount={20} foodName='Өглөөний хоол' foodPrice={14800} discountPrice={16800} />
                            <FoodsCard foodImage={<img src='FoodPic.png' />} discount={20} foodName='Өглөөний хоол' foodPrice={14800} discountPrice={16800} />
                            <FoodsCard foodImage={<img src='FoodPic.png' />} discount={20} foodName='Өглөөний хоол' foodPrice={14800} discountPrice={16800} />
                            <FoodsCard foodImage={<img src='FoodPic.png' />} discount={20} foodName='Өглөөний хоол' foodPrice={14800} discountPrice={16800} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <Category categoryTitle='Салад ба зууш' />
                        <div className='flex justify-between'>
                            <FoodsCard foodImage={<img src='FoodPic.png' />} discount={20} foodName='Өглөөний хоол' foodPrice={14800} discountPrice={16800} />
                            <FoodsCard foodImage={<img src='FoodPic.png' />} discount={20} foodName='Өглөөний хоол' foodPrice={14800} discountPrice={16800} />
                            <FoodsCard foodImage={<img src='FoodPic.png' />} discount={20} foodName='Өглөөний хоол' foodPrice={14800} discountPrice={16800} />
                            <FoodsCard foodImage={<img src='FoodPic.png' />} discount={20} foodName='Өглөөний хоол' foodPrice={14800} discountPrice={16800} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <Category categoryTitle='Амттан' />
                        <div className='flex justify-between'>
                            <FoodsCard foodImage={<img src='FoodPic.png' />} discount={20} foodName='Өглөөний хоол' foodPrice={14800} discountPrice={16800} />
                            <FoodsCard foodImage={<img src='FoodPic.png' />} discount={20} foodName='Өглөөний хоол' foodPrice={14800} discountPrice={16800} />
                            <FoodsCard foodImage={<img src='FoodPic.png' />} discount={20} foodName='Өглөөний хоол' foodPrice={14800} discountPrice={16800} />
                            <FoodsCard foodImage={<img src='FoodPic.png' />} discount={20} foodName='Өглөөний хоол' foodPrice={14800} discountPrice={16800} />
                        </div>
                    </div>
                </div>
            </div>
            <FooterPart />
        </>
    )
}
