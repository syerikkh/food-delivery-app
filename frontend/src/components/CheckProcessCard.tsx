import React, { ReactElement } from 'react'

export const CheckProcessCard = ({ icon, title, description }: { icon: ReactElement, title: string, description: string }) => {
    return (

        <div className='w-80 h-32 border rounded-md p-4 shadow-lg'>
            <div className='ml-2'>{icon}</div>
            <div className='mt-4'>
                <p className='font-semibold'>{title}</p>
                <p className='text-xs text-gray-500'>{description}</p>
            </div>
        </div>

    )
}
