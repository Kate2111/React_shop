import React from 'react';
import style from './TopSection.module.scss';
import Slider from '@components/slider/Slider';
import sliderBg from '@assets/images/first_page/main_slider.jpg'


const TopSection = () => {
    return (
        <section className={style.top}>
          <img className={style.image} src={sliderBg} alt="slider-bg"/>
          <div className="container container-top">
            <div className={style.inner}>
              <Slider></Slider>
      
              <ul className={`${style.dotsTop} ${style.dots}`}>
                <li className={`${style.item} ${style.active}`}></li>
                <li className={style.item}></li>
                <li className={style.item}></li>
              </ul>
        
            </div>
          </div>
        </section>
    );
};

export default TopSection;