import React from 'react';
import style from './checkbox.module.scss'

const Checkbox = ({text, ...props}) => {
    
    return (
        <label 
            htmlFor="done" 
            className={style.lable}
            {...props}
        >                        
            <input id="done" type="checkbox" />
            {text}
        </label>
    );
};

export default Checkbox;