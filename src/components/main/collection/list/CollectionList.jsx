import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import style from './Collection.module.scss';
import {NewCollection} from '@API/context';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Mousewheel, Autoplay} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/parallax';
import 'swiper/css/autoplay';


const CollectionList = () => {
    const {newCollection} = useContext(NewCollection);
    const navigate = useNavigate();


    return (
        <Swiper
            modules={[Mousewheel, Autoplay]}
            mousewheel={true}
            spaceBetween={50}
            autoplay={{delay: 2000 ,disableOnInteraction: false, pauseOnMouseEnter: true}}
            breakpoints={{
                0: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                680: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                }
            }}
        >
             {
                newCollection.map(({info}) => {
                    return info.map(({id, title, price, image}) => {
                        return <SwiperSlide className={style.item} onClick={() => navigate(`/React_shop/catalog/${id}`, { state: { source: 'newcollection' } })}>
                                    <img src={image} alt={title}/>
                                    <div className={style.info}>
                                        <h6 className={style.title}>{title}</h6>
                                        <div className={style.text}>{price}$</div>
                                    </div>
                                </SwiperSlide>
                    })
                })
            }
        </Swiper>
        
    );
};

export default CollectionList;

