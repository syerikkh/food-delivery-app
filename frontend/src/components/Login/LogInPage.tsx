import React, { useState } from 'react'
import { FooterPart } from '../FooterPart'
import { HeaderPart } from '../HeaderPart'

export const LogInPage = () => {
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMail(event.target.value);
    }

    return (
        <>
            <HeaderPart />
            <div className='flex justify-center items-center w-[1440px] px-10 m-auto mt-20 mb-16'>
                <div className='w-[448px] h-[549px] p-8 flex flex-col gap-12 items-center'>
                    <h1 className='text-2xl font-bold text-[#0D1118]'>Нэвтрэх</h1>
                    <div className='w-full flex flex-col gap-2'>
                        <div>
                            <p className='text-sm'>Имэйл </p>
                            <input value={mail} onChange={handleChange} className='w-full h-12 border text-base px-4 py-2 rounded-md' type="text" placeholder='Имэйл хаягаа оруулна уу' />
                        </div>
                        <div>
                            <p className='text-sm'>Нууц үг </p>
                            <input value={pass} onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setPass(event.target.value) }} className='w-full h-12 border text-base px-4 py-2 rounded-md' type="password" placeholder='Нууц үг' />
                            <button className='text-sm float-right text-[#3F4145]'>Нууц үг сэргээх</button>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-6'>
                        <button className={`w-full h-12 px-4 py-2 border flex justify-center rounded-md ${mail ? 'bg-main text-white' : 'text-[#1C20243D] bg-[#EEEFF2]'}`}>
                            Нэвтрэх
                        </button>
                        <div className='w-full h-12 px-4 py-2 flex justify-center'>
                            Эсвэл
                        </div>
                        <button className='w-full h-12 px-4 py-2 border border-main flex justify-center rounded-md'>
                            Бүртгүүлэх
                        </button>
                    </div>
                </div>
            </div>
            <FooterPart />
        </>
    )
}
