import React from 'react';
import style from './loader.module.scss';
import classNames from 'classnames';


const LoaderCircle = () => {
    return (
        <div className={classNames('container', style.wrapper)}>
            <div className={style.ring}></div>
            <div className={style.ring}></div>
            <div className={style.ring}></div>
            <div className={style.loading}>Loading...</div>
        </div>
    );
};

export default LoaderCircle;