import React from 'react';
import classes from './MyButtonGreen.module.scss'


const MyButtonGreen = ({children, ...props}) => {
    return (
        <button className={classes.button} {...props}>
            {children}
        </button>
    );
};

export default MyButtonGreen;

