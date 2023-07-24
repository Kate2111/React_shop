import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import { AppContext } from '@API/context';
import CollectionItem from '@components/itemCollection';
import {Swiper, SwiperSlide} from 'swiper/react';
import {swiperModules, swiperOptions} from './swiperSettings'

const CollectionList = () => {
    const [newCollection] = useContext(AppContext)[1];
    const navigate = useNavigate();

    return (
        <Swiper
            modules={swiperModules}   
            {...swiperOptions}
        >
             {
                newCollection.map(({info}) => {
                    return info.map(({id, title, price, image}) => {
                        return <SwiperSlide 
                                    className="item"
                                    onClick={() => navigate(`/React_shop/catalog/${id}`, { state: { source: 'newcollection' } })}
                                >
                                    <CollectionItem 
                                        image={image}
                                        title={title}
                                        price={price}
                                    />
                                </SwiperSlide>
                    })
                })
            }
        </Swiper>
        
    );
};

export default CollectionList;

