import React from 'react';
import classes from './MyButtonYellow.module.scss'


const MyButtonBlack = ({children, ...props}) => {
    return (
        <button className={classes.button} {...props}>
            {children}
        </button>
    );
};

export default MyButtonBlack;

