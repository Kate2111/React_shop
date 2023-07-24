
import React from 'react';
import style from './MyButtonCart.module.scss';
import classNames from 'classnames';

const MyButtonCart = ({text, children, ...props}) => {
    return (
        <p className={classNames(style.gray, style.grayButton)} {...props}>
            {text}
            {children}
        </p>
    );
};

export default MyButtonCart;