import React from 'react'
import { PineconeLogo } from '../Icons/PineConeLogo';
import { BasketIcon } from '../Icons/BasketIcon';
import { LogInIcon } from '../Icons/LogInIcon';
import { SearchIcon } from '../Icons/SearchIcon';


export const HeaderPart = () => {
    return (
        <div className="w-sceen flex items-center justify-center">
            <div className="py-4 px-32 w-full flex justify-between">
                <div className="flex gap-3 items-center">
                    <PineconeLogo />
                    <div className="flex text-xs font-bold gap-8 ml-8">
                        <p>НҮҮР</p>
                        <p>ХООЛНЫ ЦЭС</p>
                        <p>ХҮРГЭЛТИЙН БҮС</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center text-xs">
                    <div className="text-xs flex px-2 items-center border rounded-md gap-2">
                        <button><SearchIcon /></button>
                        <input type="text" name="" id="" placeholder="Хайх" className="p-2" />
                    </div>
                    <div className="flex gap-2 font-bold items-center">
                        <BasketIcon />
                        <p>Сагс</p>
                    </div>
                    <div className="flex gap-2 font-bold items-center">
                        <LogInIcon />
                        <p>Нэвтрэх</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
