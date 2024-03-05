import React from 'react'
import { CheckIcon } from './Icons/CheckIcon'

export const CreatedSuccess = () => {
    return (
        <div className='flex gap-2 items-center px-6 py-1 border rounded-md'>
            <CheckIcon />
            <p className='text-[#0A4E22] text-base'>Амжилттай бүртгэгдлээ.</p>
        </div>
    )
}
