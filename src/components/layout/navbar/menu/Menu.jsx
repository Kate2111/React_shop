import React, { useEffect, useState } from 'react';
import Hamburger from '../../../UI/hamburger/Hamburger';
import MenuList from '../list/MenuList';
import style from '../list/menuList.module.scss'

const Menu = ({isMain}) => {
    const navigationButtons = [
        { text: 'About', href: '/React_shop/about', type: 'link'},  
        { text: 'Catalog', href: '/React_shop/catalog', type: 'link'},
        { text: 'Blog', href: '/React_shop/blog', type: 'link'},
        { text: 'Contact', href: '/React_shop/contact', type: 'link'}
    ]

    const [isOpen, setOpen] = useState(false)
    const [visibleHamburger, setVisibleHamburger] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {setVisibleHamburger(window.innerWidth)}

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        } 
    }, [visibleHamburger])
    return (
        <>
            {visibleHamburger >= 767 ? (
                <MenuList arr={navigationButtons} isMain={isMain} isOpen={isOpen}/>
            ) : (
                <>
                <Hamburger toggled={isOpen} toggle={setOpen}/>
                {isOpen 
                && 
                (<>
                    <div className={style.sideblur} onClick={() => setOpen(false)}/>
                    <MenuList arr={navigationButtons} isMain={isMain} isOpen={isOpen} setOpen={setOpen}/>
                </>)
                }
                </>
            )}
        </>
    );
};

export default Menu;