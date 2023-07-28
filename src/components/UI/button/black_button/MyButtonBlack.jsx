import React from 'react';
import style from './MyButtonBlack.module.scss'



const MyButtonBlack = ({children, type, ...props}) => {
    return (
        <button 
            type={type}
            className={style.button} 
            {...props}
        >
            {children}
        </button>
    );
};

export default MyButtonBlack;

