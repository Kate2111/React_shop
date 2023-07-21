import React from 'react';
import classes from './MyButtonYellow.module.scss'


const MyButtonBlack = ({children, isActive, ...props}) => {
    const buttonClass = isActive ? classes.buttonActive : classes.button;

    return (
        <button className={buttonClass} {...props}>
            {children}
        </button>
    );
};

export default MyButtonBlack;

