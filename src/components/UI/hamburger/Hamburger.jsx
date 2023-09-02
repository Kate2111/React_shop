import React from 'react';
import style from './hamburger.module.scss'

const Hamburger = ({toggled, toggle}) => {
    return (
        <>
            {
                !toggled
                ?(  <button 
                        className={style.burger__true}
                        onClick={() => toggle(!toggled)}
                    >
                        <div className={style.oneline}></div>
                        <div className={style.twoline}></div>
                        <div className={style.threeline}></div>
                    </button>
                ):(
                    <button 
                        className={style.burger__false}
                        onClick={() => toggle(!toggled)}
                    >
                        <div className={style.oneline}></div>
                        <div className={style.twoline}></div>
                        <div className={style.threeline}></div>
                    </button>
                )
            }
        </>
    );
};

export default Hamburger;
