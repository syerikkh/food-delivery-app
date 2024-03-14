import React, { useState } from 'react'
import { XIcon } from './Icons/XIcon';

export const CreateCategoryCard = () => {
    const [cardVisible, setCardVisible] = useState(false);

    return (
        <div className={`w-screen h-screen bg-[#00000080] fixed top-0 left-0 bottom-0 z-10 flex items-center justify-center ${cardVisible && "hidden"}`}>
            <div className='bg-white w-[587px] h-[702px] rounded-xl'>
                <div className='py-4 px-6 flex items-center justify-between border-b-2'>
                    <button onClick={() => { setCardVisible(!cardVisible) }}><XIcon /></button>
                    <h1 className='font-semibold text-2xl'>Create food</h1>
                    <div className='p-3'>
                    </div>
                </div>
                <div className='p-6 flex flex-col gap-2'>
                    <div className='w-full'>
                        <p className='text-sm'>Хоолны нэр</p>
                        <input type="text" placeholder='placeholder' className='p-4 w-full bg-[#F4F4F4] mt-2' />
                    </div>

                </div>
            </div>
        </div>
    )
}
