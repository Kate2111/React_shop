import React from 'react';
import style from './impty.module.scss'
import classNames from 'classnames';

const ImptyCart = ({title, subtitle, category, imptyImage}) => {
    return (
        <div className='container'>
            <div className={style.impty}>
                <p className={style.imptyTitle}>{title}</p>
                <p className={style.imptySubTitle}>{subtitle}.</p>
                <div className={classNames(style.imptyInner, {
                        [style.imptyInnerColorCart]: category === 'cart',
                        [style.imptyInnerColorFavorite]: category !== 'cart'})}
                >
                    <img className={style.imptyItem} src={imptyImage} alt="imptyFaavorite" />
                </div>
            </div>
        </div>
    );
};

export default ImptyCart;