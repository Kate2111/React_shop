import React from 'react';
import {importSvg} from '../../../../utils/importAll'
import style from './SocialList.module.scss'


const SocialList = () => {

    const social = [
        {name: "Facebook", href: "#"},
        {name: "Instagram", href: "#"},
        {name: "Pinterest", href: "#"},
        {name: "WhatsApp", href: "#"},
        {name: "YouTube", href: "#"}
    ]
 
    const images = importSvg(require.context('../../../../assets/images/first_page/icon', false, /\.svg$/));

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