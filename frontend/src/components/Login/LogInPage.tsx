import React, { useState } from 'react'
import { FooterPart } from '../FooterPart'
import { HeaderPart } from '../HeaderPart'
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';

export const LogInPage = () => {
    const [email, setMail] = useState('');
    const [pass, setPass] = useState('');
    const router = useRouter();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMail(event.target.value);
    };

    const handleLogIn = async () => {
        try {
            const response = await axios.post('http://localhost:8000/logIn', { email: email, password: pass }, { withCredentials: true });
            const userData = response.data.user;
            localStorage.setItem('user', JSON.stringify(userData));
            console.log('Successfully logged in', response.data.user.name)
            if (userData.role === "Admin") {
                router.push('/admin')
            }
            router.push('/')
        } catch (error) {
            console.error("Login failed", error)
        }
    }

    return (
        <>
            <HeaderPart />
            <div className='flex justify-center items-center w-[1440px] px-10 m-auto mt-20 mb-16'>
                <div className='w-[448px] h-[549px] p-8 flex flex-col gap-12 items-center'>
                    <h1 className='text-2xl font-bold text-[#0D1118]'>Нэвтрэх</h1>
                    <div className='w-full flex flex-col gap-2'>
                        <div className='flex flex-col gap-1'>
                            <p className='text-sm'>Имэйл </p>
                            <input value={email} onChange={handleChange} className='w-full h-12 border text-base px-4 py-2 rounded-md' type="email" placeholder='Имэйл хаягаа оруулна уу' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-sm'>Нууц үг </p>
                            <input value={pass} onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setPass(event.target.value) }} className='w-full h-12 border text-base px-4 py-2 rounded-md' type="password" placeholder='Нууц үг' />
                            <button className='text-sm flex justify-end text-[#3F4145]'>Нууц үг сэргээх</button>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-6'>
                        <button onClick={handleLogIn} className={`w-full h-12 px-4 py-2 border flex justify-center rounded-md ${email ? 'bg-main text-white' : 'text-[#1C20243D] bg-[#EEEFF2]'}`}>
                            Нэвтрэх
                        </button>
                        <div className='w-full h-12 px-4 py-2 flex justify-center'>
                            Эсвэл
                        </div>
                        <Link href={'/signUp'} className='w-full h-12 px-4 py-2 border border-main flex justify-center rounded-md'>
                            Бүртгүүлэх
                        </Link>
                    </div>
                </div>
            </div>
            <FooterPart />
        </>
    )
}
