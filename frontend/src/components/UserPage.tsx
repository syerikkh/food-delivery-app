import React, { useEffect, useState } from 'react'
import { HeaderPart } from './HeaderPart'
import { FooterPart } from './FooterPart'
import { LogOutIcon } from './Icons/LogOutIcon'
import { useRouter } from 'next/router'
import { ProfileIcon } from './Icons/ProfileIcon'
import { ContactIcon } from './Icons/ContactIcon'
import { MailIcon } from './Icons/MailIcon'


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
                    <h1 className='text-2xl font-bold text-[#0D1118]'> {user.name}</h1>
                    <div className='w-full flex flex-col gap-3'>
                        <div className='flex gap-2 border py-2 px-5 bg-[#F6F6F6] rounded-sm'>
                            <div className='p-3 rounded-full bg-white'><ProfileIcon /></div>
                            <div>
                                <p className='text-xs text-[#888A99]'>Таны нэр</p>
                                {user.name}
                            </div>
                        </div>
                        <div className='flex gap-2 border py-2 px-5 bg-[#F6F6F6] rounded-sm'>
                            <div className='p-3 rounded-full bg-white'><ContactIcon /></div>
                            <div>
                                <p className='text-xs text-[#888A99]'>Утасны дугаар</p>
                                {user.phoneNumber}
                            </div>
                        </div>
                        <div className='flex gap-2 border py-2 px-5 bg-[#F6F6F6] rounded-sm'>
                            <div className='p-3 rounded-full bg-white'><MailIcon /></div>
                            <div>
                                <p className='text-xs text-[#888A99]'>Имэйл хаяг</p>
                                {user.email}
                            </div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <button className='border p-3 rounded-full' onClick={handleLogOut}>
                                <LogOutIcon />
                            </button>
                            Гарах
                        </div>
                    </div>
                </div>
            </div>
            <FooterPart />
        </>
    )
}
