import React from 'react';
import classes from './MyButtonWhite.module.scss'


const MyButtonWhite = ({children, ...props}) => {
    return (
        <button className={classes.button} {...props}>
            {children}
        </button>
    );
};

export default MyButtonWhite;

