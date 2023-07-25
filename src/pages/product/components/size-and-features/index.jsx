import React from 'react';
import style from './style.module.scss'
import classNames from 'classnames';

const SizeAndFeatures = ({text, info}) => {
    return (
        <div className={style.inner}>
            <p className={style.text}>{text}</p>
            <div className={style.dots}></div>
            <p className={classNames(style.text, style.strong)}>{info}</p>
        </div>
    );
};

export default SizeAndFeatures;