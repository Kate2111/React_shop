import React from 'react';
import style from './MyInput.module.scss';

const MyInput = ({ type, text, value, onChange, ...props }) => {
    return (
      <input
        className={style.input}
        type={type}
        placeholder={text}
        value={value}
        onChange={onChange}
        {...props}
      />
    );
  };

export default MyInput;