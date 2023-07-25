import React from 'react';
import style from './style.module.scss';
import star from '@assets/images/product_page/Star.svg'


const IconsStars = () => {
    return (

        <div className={style.inner_review}>           
            <div className={style.inner_star}>
                {
                    Array.from({ length: 5 }, (_, index) => {
                        return  <img 
                                    key={index}
                                    src={star}
                                    alt="star"
                                />
                    })
                }
            </div>
            <p className={style.text}>No reviews</p>
        </div>
    );
};

export default IconsStars;