import React from 'react'
import { HeaderPart } from '../HeaderPart'
import { FooterPart } from '../FooterPart'

export const HomeFirstPage = () => {
    return (
        <>
            <HeaderPart />
            <div className='h-[788px] bg-[#18BA51] relative'>
                <img src="BackgroundImage.png" alt="" className='w-full h-full absolute top-0' />
                <div className='w-[1440px] m-auto h-full px-10 flex items-center justify-between'>
                    <div className='flex flex-col'>
                        <h1 className='text-6xl text-white pb-6 border-b-2 font-bold'>Pinecone<br></br> Food delivery</h1>
                        <p className='text-white text-2xl mt-6'>Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div>
                        <img src="HomePageFood.png" alt="" className='w-[588px] h-[438px] relative' />
                    </div>
                </div>
            </div>
        </>
    )
}
