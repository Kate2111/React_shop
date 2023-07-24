import React from 'react';
import style from './top.module.scss';
import classNames from 'classnames';
import logo from './logo.png';
import { create3DElemTop } from '../../utils';


const TopSection = () => {
    return (
        <section className={style.layers} onMouseMove={create3DElemTop}>
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
