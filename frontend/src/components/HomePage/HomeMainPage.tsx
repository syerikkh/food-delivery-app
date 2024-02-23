import React from 'react'
import { BookIcon } from '../Icons/BookIcon'
import { CheckProcessCard } from '../CheckProcessCard'
import { ClockIcon } from '../Icons/ClockIcon'
import { HealthIcon } from '../Icons/HealthIcon'
import { TitleIcon } from '../Icons/TitleIcon'

export const HomeMainPage = () => {
    return (
        <div className='w-full px-52 mt-20 mb-20 flex flex-col'>
            <div className='flex justify-between items-center'>
                <CheckProcessCard icon={<BookIcon />} title={"Хүргэлтийн төлөв хянах"} description={"Захиалга бэлтгэлийн явцыг хянах"} />
                <CheckProcessCard icon={<ClockIcon />} title={"Шуурхай хүргэлт"} description={"Захиалга бэлтгэлийн явцыг хянах"} />
                <CheckProcessCard icon={<HealthIcon />} title={"Эрүүл, баталгаат орц"} description={"Захиалга бэлтгэлийн явцыг хянах"} />
                <CheckProcessCard icon={<BookIcon />} title={"Хоолны өргөн сонголт"} description={"Захиалга бэлтгэлийн явцыг хянах"} />
            </div>
            <div>
                <div className='w-full flex justify-between mt-20'>
                    <div className='flex gap-4 items-center'>
                        <TitleIcon />
                        <h1 className='font-bold text-2xl'>Хямдралтай</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
