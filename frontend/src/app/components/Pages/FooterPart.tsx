import React from 'react'
import { Background } from '../Background/Background'
import { lstat } from 'fs'
import { PineconeLogoWhite } from '../Icons/PineconeLogoWhite'

export const FooterPart = () => {
    return (
        <div className='h-[545px] bg-[#18BA51] flex justify-center items-center'>
            <div className='w-1/2 h-1/2 border flex flex-col items-center'>
                <div className='flex gap-2 items-center'>
                    <PineconeLogoWhite />
                    <h1 className='font-bold text-white text-xl'>Food Delivery</h1>
                </div>
                <div className='flex w-full pt-8 justify-between text-white font-semibold'>
                    <p>Нүүр</p>
                    <p>Холбоо барих</p>
                    <p>Хоолны цэс</p>
                    <p>Үйлчилгээний нөхцөл</p>
                    <p>Хүргэлтийн бүс</p>
                    <p>Нууцлалын бодлого</p>
                </div>
            </div>
        </div>
    )
}
