import React from 'react'
import { PineconeLogoWhite } from './Icons/PineconeLogoWhite'
import { FacebookIcon } from './Icons/FacebookIcon'
import { InstagramIcon } from './Icons/InstagramIcon'
import { TwitterIcon } from './Icons/TwitterIcon'

export const FooterPart = () => {
    return (
        <div className='static bottom-0'>
            <div className='h-[545px] bg-[#18BA51] flex justify-center items-center relative'>
                <div className='w-full h-full absolute left-0 top-0'>
                    <img src="BackgroundImage.png" className='w-full h-full object-cover' alt="" />
                </div>
                <div className='w-1/2 h-1/2 flex flex-col items-center'>
                    <div className='border-b-2 flex flex-col items-center w-full pb-8'>
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
                        <div className='flex gap-3 pt-8'>
                            <FacebookIcon />
                            <InstagramIcon />
                            <TwitterIcon />
                        </div>
                    </div>
                    <div className='text-white text-center text-base mt-8'>
                        <p>© 2024 Pinecone Foods LLC </p>
                        <p>Зохиогчийн эрх хуулиар хамгаалагдсан.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
