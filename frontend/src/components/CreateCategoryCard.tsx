import React, { useState } from 'react'
import { XIcon } from './Icons/XIcon';
import axios from 'axios';

export const CreateCategoryCard = () => {
    const [cardVisible, setCardVisible] = useState(false);
    const [name, setName] = useState('');

    const createCategory = async () => {
        const response = await axios.post('http://localhost:8000/category', { name: name });
        try {
            console.log('successfully added', response.data);
            if (response.status === 201) {
                setCardVisible(!cardVisible);
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className={`w-screen h-screen bg-[#00000080] fixed top-0 left-0 bottom-0 z-10 flex items-center justify-center ${cardVisible && "hidden"}`}>
            <div className='bg-white w-[587px] h-[280px] rounded-xl'>
                <div className='py-4 px-6 flex items-center justify-between border-b-2'>
                    <button onClick={() => { setCardVisible(!cardVisible) }}><XIcon /></button>
                    <h1 className='font-semibold text-2xl'>Create new category</h1>
                    <div className='p-3'>
                    </div>
                </div>
                <div className='p-6 flex flex-col gap-2 border-b-2'>
                    <div className='w-full'>
                        <p className='text-sm'>Category name</p>
                        <input value={name} onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setName(event.target.value) }} type="text" placeholder='placeholder' className='p-4 w-full bg-[#F4F4F4] mt-2' />
                    </div>
                </div>
                <div className='flex justify-end py-4 px-6'>
                    <button className='text-[393939] p-2'>Clear</button>
                    <button onClick={createCategory} className='bg-[#393939] text-white p-2 rounded-sm'>Continue</button>
                </div>
            </div>
        </div>
    )
}
