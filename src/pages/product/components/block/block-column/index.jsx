import React from 'react';
import style from './style.module.scss';

const BlockColumn = ({subtitle, children}) => {
    return (
        <div className={style.inner_column}>
            <h2 className={style.subtitle}>{subtitle}</h2>
            {children}
        </div>
    );
};

export default BlockColumn;