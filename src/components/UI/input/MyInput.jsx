import React from 'react';
import style from './MyInput.module.scss';

const MyInput = ({ value, onChange, type, text, isRight, ...props }) => {
    return (
      <input
        className={!isRight ? style.input : style.inputRed}
        type={type}
        placeholder={text}
        value={value}
        onChange={onChange}
        {...props}
      />
    );
  };

export default MyInput;