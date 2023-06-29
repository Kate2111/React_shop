import React from 'react';
import './mainPage.scss';
import style from '@components/UI/button/MyButtonTab.module.scss';
import Slider from '@components/slider/Slider';
import sliderBg from '@assets/images/first_page/main_slider.jpg'
import CollectionList from '@components/main/collection/CollectionList';
import GallerySection from '../../components/main/gallery/section/GallerySection';


const MainPage = () => {
    return (<>
        <section className="top">
        <img className="top__image" src={sliderBg} alt="slider-bg"/>
        <div className="container top__container">
          <div className="top__inner">
            <Slider></Slider>
    
            <ul className="dots top__dots">
              <li className="dots__item"></li>
              <li className="dots__item"></li>
              <li className="dots__item"></li>
            </ul>
       
          </div>
        </div>
      </section>

      <section className="collection">
        <div className="container-fluid">
            <div className="collection__header">
                <h3 className="collection__header-title">Furniture new collection</h3>
                <p className="collection__header-text">Deep v you probably haven't heard of them banh mi synth actually affogato. Aesthetic lyft ethical drinking vinegar austint
                </p>
            </div>
            <CollectionList/>
        </div>
      </section>

      <section className="decor">
        <div className="container">
          <h3 className="decor__title">Aesthetic ethical drinking</h3>
          <p className="decor__text">Deep v you probably haven't heard of them banh mi synth actually affogato. Artlyft ethical the one drinking vinegar austint</p>
        </div>
      </section>

      <GallerySection/>

      <section className="block-box">
        <div className="container">
          <h3 className="block-box__title">More inspiration ideas in our blog</h3>
        <div className="block-box__items">
          <div className="block-box__item">
            <a className="block-box__img-link" href="#" >
              <img className="block-box__img" src={require("@assets/images/block/img_1.jpg")} alt="block" />
            </a>
            <div className="block-box__links">
              <span className="block-box__date">March 12, 2020 | </span>
              <a className="block-box__autor" href="#">by Ann Summers | </a>
              <a className="block-box__theme" href="#">Inrerior</a>
            </div>
            <a className="block-box__title-link" href="#">
              <h4 className="block-box__item-title">Listicle actually selvage activated charcoal for the drinking vinegar </h4>
            </a>
          </div>

          <div className="block-box__item">
            <a className="block-box__img-link" href="#" >
              <img className="block-box__img" src={require("@assets/images/block/img_2.jpg")} alt="blobk" />
            </a>
            <div className="block-box__links">
              <span className="block-box__date">September 28,2020 | </span>
              <a className="block-box__autor" href="#">by Finnagan Morningstar | </a>
              <a className="block-box__theme" href="#">Dining room interior</a>
            </div>
            <a className="block-box__title-link" href="#">
              <h4 className="block-box__item-title">Red selfies edison bulb four dollar toast humblebrag</h4>
            </a>
          </div>
        </div>
        </div>
      </section>
    </>
    );
};

export default MainPage;