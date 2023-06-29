import React from 'react';
import style from './MyInput.module.scss';

const MyInput = ({text}) => {
    return (
        <input 
            className={style.input} 
            type="text" 
            placeholder={text}
        />
    );
};

export default MyInput;