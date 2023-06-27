import React from 'react';
import './mainPage.scss';
import Slider from '../slider/Slider';
import sliderBg from '../../img/first_page/main_slider.jpg'
import CollectionList from './CollectionList';
import MyButtonTab from '../UI/button/MyButtonTab';



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

      <section className="gallery">
        <div className="container-fluid">
          <div className="gallery__tabs">
            <MyButtonTab>Bedroom furniture</MyButtonTab>
            <MyButtonTab>Living room furniture</MyButtonTab>
            <MyButtonTab>Office furniture</MyButtonTab>
            <MyButtonTab className='tab--active'>Dining room futniture</MyButtonTab>
            <MyButtonTab>Chair</MyButtonTab>
         
          </div>
          <div className="gallery__items">
            <div className="gallery__item">
              <img className="gallery__img-main" src="./img/first_page/gallery/Bedroom furniture/Kyle+4-door+Solid+Wood+Wardrobe+Armoire.jpg" alt="Bedroom furniture"/>
              <img className="gallery__img" src="./img/first_page/gallery/Bedroom furniture/img_1.jpg" alt="Bedroom furniture"/>
              <img className="gallery__img" src="./img/first_page/gallery/Bedroom furniture/img_2.jpg" alt="Bedroom furniture"/>
              <img className="gallery__img" src="./img/first_page/gallery/Bedroom furniture/img_3.jpg" alt="Bedroom furniture"/>
              <img className="gallery__img" src="./img/first_page/gallery/Bedroom furniture/img_4.jpg" alt="Bedroom furniture"/>
            </div>
            <div className="gallery__item  gallery__item--active">
              <img className="gallery__img-main" src="./img/first_page/gallery/Living room furniture/img_1.jpg" alt="Living_room"/>
              <img className="gallery__img" src="./img/first_page/gallery/Living room furniture/Natsuko+85.4_+W+Velvet+Square+Arm+Sofa.webp" alt="Living_room"/>
              <img className="gallery__img" src="./img/first_page/gallery/Living room furniture/img_4.jpg" alt="Living_room"/>
              <img className="gallery__img" src="./img/first_page/gallery/Living room furniture/Caleb-Ryan+Coffee+Table.jpg" alt="Living_room"/>
              <img className="gallery__img" src="./img/first_page/gallery/Living room furniture/img_5.jpg" alt="Living_room"/>
            </div>
            <div className="gallery__item">
              <img className="gallery__img-main" src="./img/first_page/gallery/Office furniture/Faye+Ergonomic+Task+Chair.jpg" alt="Office_furniture"/>
              <img className="gallery__img" src="./img/first_page/gallery/Office furniture/Nido+15.82''+Wide+4+-Drawer+Vertical+Filing+Cabinet.webp" alt="Office_furniture"/>
              <img className="gallery__img" src="./img/first_page/gallery/Office furniture/img_2.jpg" alt="Office_furniture"/>
              <img className="gallery__img" src="./img/first_page/gallery/Office furniture/img_1.jpg" alt="Office_furniture"/>
              <img className="gallery__img" src="./img/first_page/gallery/Office furniture/img_5.jpg" alt="Office_furniture"/> 
            </div>
            <div className="gallery__item">
              <img className="gallery__img-main" src="./img/first_page/gallery/Dining_room_futniture/Isabelle+30''+Wide+China+Cabinet.jpg" alt="Dining_room"/>
              <img className="gallery__img" src="./img/first_page/gallery/Dining_room_futniture/17+Stories+Bartell+Metal+Fruit+Bowl.webp" alt="Dining_room"/>
              <img className="gallery__img" src="./img/first_page/gallery/Dining_room_futniture/img_3.jpg" alt="Dining_room"/>
              <img className="gallery__img" src="./img/first_page/gallery/Dining_room_futniture/Winona+Butterfly+Leaf+Dining+Set.jpg" alt="Dining_room"/>
              <img className="gallery__img" src="./img/first_page/gallery/Dining_room_futniture/Putnam+Side+Chair.webp" alt="Dining_room"/>
            </div>
            <div className="gallery__item">
              <img className="gallery__img-main" src="./img/first_page/gallery/Chair/Hurma+Rocking+Chair.jpg" alt="Chair"/>
              <img className="gallery__img" src="./img/first_page/gallery/Chair/Delzora+Upholstered+Accent+Chair+with+Metal+Legs (1).webp" alt="Chair"/>
              <img className="gallery__img" src="./img/first_page/gallery/Chair/Hendrix+Upholstered+Barrel+Chair.webp" alt="Chair"/>
              <img className="gallery__img" src="./img/first_page/gallery/Chair/Jamyre+26_+Wide+Velvet+Barrel+Chair+and+Ottoman.webp" alt="Chair"/>
              <img className="gallery__img" src="./img/first_page/gallery/Chair/Jazouli+Upholstered+Barrel+Chair.webp" alt="Chair"/>
            </div>
          </div>
        </div>
      </section>

      <section className="block-box">
        <div className="container">
          <h3 className="block-box__title">More inspiration ideas in our blog</h3>
        <div className="block-box__items">
          <div className="block-box__item">
            <a className="block-box__img-link" href="#" >
              <img className="block-box__img" src="./img/block/img_1.jpg" alt="block" />
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
              <img className="block-box__img" src="./img/block/img_2.jpg" alt="blobk" />
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