import React from 'react';
import style from './TopSection.module.scss';
import classNames from 'classnames';
import logo from '../../../assets/images/first_page/logo.png'


const TopSection = () => {
	const create3DElem = (event) => {
		Object.assign(document.documentElement, {
			style: `
				--move-x: ${(event.clientX - window.innerWidth / 2) * -0.005}deg;
				--move-y: ${(event.clientY - window.innerHeight / 2) * -0.01}deg
			`
		})
	}


    return (
        <section className={style.layers} onMouseMove={create3DElem}>
			<div className={style.container}>
				<div className={classNames(style.item, style.layer_1)}></div>
				<div className={classNames(style.item, style.layer_2)}>
					<div className={style.content}>
						<img className={style.logo} src={logo} alt="logo" />
						<h1 className={style.title}>Furniture collection</h1>
						<p className={style.subtitle}>We’re here to help everyone, anywhere create their feeling of home.</p>
					</div>
				</div>
				<div className={classNames(style.item, style.layer_3)}></div>
				<div className={classNames(style.item, style.layer_4)}></div>
				<div className={classNames(style.item, style.layer_5)}></div>
			</div>
        </section>
    );
};

export default TopSection;


//import Slider from '@components/slider/Slider';
//import sliderBg from '@assets/images/first_page/main_slider.jpg'
{/* <img className={style.image} src={sliderBg} alt="slider-bg"/>
<div className="container container-top">
  <div className={style.inner}>
    <Slider></Slider>

    <ul className={`${style.dotsTop} ${style.dots}`}>
      <li className={`${style.item} ${style.active}`}></li>
      <li className={style.item}></li>
      <li className={style.item}></li>
    </ul>

  </div>
</div> */}