import React, { useEffect, useState } from 'react'
import { PineconeLogo } from './Icons/PineconeLogo';
import { BasketIcon } from './Icons/BasketIcon';
import { LogInIcon } from './Icons/LogInIcon';
import { SearchIcon } from './Icons/SearchIcon';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import { LogOutIcon } from './Icons/LogOutIcon';
import { useRouter } from 'next/router';

// import { useLocation } from 'react-router-dom';

export const HeaderPart = () => {
    // const location = useLocation();
    const [userName, setUserName] = useState();
    const router = useRouter();

    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
            try {
                const user = JSON.parse(userData);
                if (user) {
                    setUserName(user.name);
                }
            } catch (error) {
                console.error(error)
            }

        }
    }, [])

    const handleLogOut = () => {
        localStorage.removeItem('user');
        setUserName('');
    }

    console.log('user', userName);
    return (
        <div className="w-[1440px] m-auto px- flex items-center justify-center">
            <div className="py-4 px-10 w-full flex justify-between">
                <div className="flex gap-3 items-center">
                    <PineconeLogo />
                    <div className="flex text-sm font-bold gap-8 ml-8 ">
                        <Link href={'/home'} className='hover:text-[#18BA51] cursor-pointer'>НҮҮР</Link>
                        <Link href={'/menu'} className='hover:text-[#18BA51] cursor-pointer'>ХООЛНЫ ЦЭС </Link>
                        <p className='hover:text-[#18BA51] cursor-pointer'>ХҮРГЭЛТИЙН БҮС</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center text-sm">
                    <div className="text-sm flex px-2 items-center border rounded-md gap-2">
                        <button><SearchIcon /></button>
                        <input type="text" name="" id="" placeholder="Хайх" className="p-2" />
                    </div>
                    <button className="flex gap-2 font-bold items-center">
                        <BasketIcon />
                        <p>Сагс</p>
                    </button>
                    {userName ?
                        <>
                            <Link href={'/user'}><button className="flex gap-2 font-bold items-center hover:text-main"> {userName}</button></Link>
                        </>
                        :
                        <button className="flex gap-2 font-bold items-center">
                            <LogInIcon />
                            <Link href={'/logIn'}>Нэвтрэх</Link >
                        </button>}

                </div>
            </div>
        </div >
    )
}
