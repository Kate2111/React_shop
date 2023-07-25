import React from 'react';
import style from './style.module.scss';

const BlockRow = ({subtitle, children}) => {
    return (
        <div className={style.inner}>
            <p className={style.text}>{subtitle}</p>
            {children}
        </div>
    );
};

export default BlockRow;