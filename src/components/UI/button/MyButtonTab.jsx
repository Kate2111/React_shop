import React from 'react';
import classes from './MyButtonTab.module.scss'


const MyButtonTab = ({children, ...props}) => {
    return (
        <button className={classes.tab} {...props}>
            {children}
        </button>
    );
};

export default MyButtonTab;

