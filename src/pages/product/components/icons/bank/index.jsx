import React from 'react';
import style from './style.module.scss';
import citibank from './icons/citibank.svg';
import gazprombank from './icons/gazprombank.svg';
import raiffeisen from './icons/raiffeisen.svg';
import sbp from './icons/sbp.svg';
import tinkoff from './icons/tinkoff.svg';


const IconsBank = () => {
    const icons = [tinkoff, sbp, gazprombank, raiffeisen, citibank]

    return (
        <div className={style.icons}>
            {
                icons.map((icon, index) => {
                    return  <img 
                                key={index}
                                className={style.icon}
                                src={icon}
                                alt="icon"
                            />
                })
            }
        </div>
    );
};

export default IconsBank;