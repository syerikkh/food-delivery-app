import React, { useEffect, useState } from 'react'
import { HeaderPart } from './HeaderPart'
import { FooterPart } from './FooterPart'
import { LogOutIcon } from './Icons/LogOutIcon'
import { useRouter } from 'next/router'


export const UserPage = () => {
    const [user, setUser] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
            try {
                const userString = JSON.parse(userData);
                if (userString) {
                    setUser(userString);
                }
            } catch (error) {
                console.log("error")
            }
        }
    }, [])

    const handleLogOut = () => {
        localStorage.removeItem('user');
        setUser('');
        router.push('/')
    }

    return (
        <>
            <HeaderPart />
            <div className='flex justify-center items-center w-[1440px] px-10 m-auto mt-20 mb-16'>
                <div className='w-[448px] h-[549px] p-8 flex flex-col gap-12 items-center'>
                    <h1 className='text-2xl font-bold text-[#0D1118]'></h1>
                    <div className='w-full flex flex-col gap-2'>
                        <div className='flex flex-col gap-1'>
                            {user.name}
                        </div>
                        <div className='flex flex-col gap-1'>
                            {user.phoneNumber}
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-6'>

                        <div className='w-full h-12 px-4 py-2 flex justify-center'>
                            Эсвэл
                        </div>
                        <button onClick={handleLogOut}>
                            <LogOutIcon />
                        </button>
                    </div>
                </div>
            </div>
            <FooterPart />
        </>
    )
}
