import React from 'react';
import {SwiperSlide } from 'swiper/react';
import 'swiper/css';

const CollectionItem = ({image, title}) => {
    return (
        <SwiperSlide>
            <img src={image} alt={title}/>
        </SwiperSlide>
    );
};

export default CollectionItem;
