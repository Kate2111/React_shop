import React from 'react';
import style from './Slider.module.scss';

const Slider = () => {
    return (
        <div>
              <div>
                <div className={style.item}>
                  <img className={style.img} src={require(`@assets/images/first_page/slider/slider_1.png`)} alt="slider-1"/>
                  <div className={style.info}>
                    <h2 className={style.title}>Furniture collection</h2>
                    <p>Deep v you probably haven't heard of them banh mi synth actually affogato. Aesthetic lyft ethical drinking vinegar austint
                    </p>
                  </div>
                </div>
              </div>
              
             {/*  <div className="top__slider-item">
                <img className="top__slider-img" src="./img/first_page/slider/slider_2.png" alt="slider-2"/>
                <div className="top__slider-info">
                  <h2 className="top__slider-title">Furniture collection</h2>
                  <p className="top__slider-text">Deep v you probably haven't heard of them banh mi synth actually affogato. Aesthetic lyft ethical drinking vinegar austint
                  </p>
                </div>
              </div>
              <div className="top__slider-item">
                <img className="top__slider-img" src="./img/first_page/slider/slider_3.png" alt="slider-3"/>
                <div className="top__slider-info">
                  <h2 className="top__slider-title">Furniture collection</h2>
                  <p className="top__slider-text">Deep v you probably haven't heard of them banh mi synth actually affogato. Aesthetic lyft ethical drinking vinegar austint
                  </p>
                </div>
              </div>  */}
          </div>
    );
};

export default Slider;