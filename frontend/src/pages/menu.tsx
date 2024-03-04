import React from 'react'
import { HeaderPart } from '@/components/HeaderPart'
import { FooterPart } from '@/components/FooterPart'
import { MenuPage } from '@/components/MenuPage/MenuPage'

const Menu = () => {
    return (
        <>
            <HeaderPart />
            <MenuPage />
            <FooterPart />
        </>
    )
}
export default Menu