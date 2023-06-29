import React from 'react';
import {importSvg} from '@/utils/importAll'
import style from './SocialList.module.scss'


const SocialList = () => {

    const social = [
        {name: "Facebook", href: "./about"},
        {name: "Instagram", href: "./about"},
        {name: "Pinterest", href: "./about"},
        {name: "WhatsApp", href: "./about"},
        {name: "YouTube", href: "./about"}
    ]
 
    const images = importSvg(require.context('@assets/images/first_page/icon', false, /\.svg$/));

    return (
        <ul className={style.social}>
            {social.map(item => (
                <li className={style.item} key={item.name}>
                    <img src={images[item.name]} alt={item.name} />
                    <a className={style.link} href={item.href}>{item.name}</a>
                </li>
            ))}
        </ul>
    );
};

export default SocialList;