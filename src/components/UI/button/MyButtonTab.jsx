import React from 'react';
import classes from './MyButtonTab.module.scss'

const MyButtonTab = ({children}) => {
    return (
        <button className={classes.tab}>
            {children}
        </button>
    );
};

export default MyButtonTab;

