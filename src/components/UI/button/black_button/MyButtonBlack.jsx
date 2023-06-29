import React from 'react';
import classes from './MyButtonBlack.module.scss'


const MyButtonBlack = ({children, ...props}) => {
    return (
        <button className={classes.button} {...props}>
            {children}
        </button>
    );
};

export default MyButtonBlack;

