import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import style from './Collection.module.scss';
import {CatalogeList} from '@API/context';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Mousewheel, Navigation, Parallax} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/navigation';
import 'swiper/css/parallax';



const CollectionList = () => {
    const {newCollection, setNewCollection} = useContext(CatalogeList);
    const navigate = useNavigate();

    return (
        <Swiper
            modules={[Mousewheel, Navigation, Parallax]}
            spaceBetween={50}
            freeMode={true}
            mousewheel={true}
            navigation
            parallax={true}
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
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
             {
                newCollection.map(({info}) => {
                    return info.map(({id, title, price, image}) => {
                        return <SwiperSlide>
                                    <a className={style.item} onClick={() => navigate(`/React_shop/catalog/${id}`)} target='_blank'>
                                        <img src={image} alt={title}/>
                                        <div className={style.info}>
                                            <h6 className={style.title}>{title}</h6>
                                            <div className={style.text}>{price}$</div>
                                        </div>
                                    </a> 
                                </SwiperSlide>
                    })
                })
            }
        </Swiper>
        
    );
};

export default CollectionList;

{/* <div className={classNames('swiper-wrapper', style.wrapper)}>
            {
                newCollection.map(({info}) => {
                    return info.map(({id, title, price, image}) => {
                        return <CollectionItem
                            key={id}
                            id={id}
                            image={image}
                            title={title}
                            price={price}
                        />
                    })
                })
            }
                
        </div> */}


        