import React from 'react';
import style from './Gallery.module.scss';
import { importWebp } from '@/utils/importAll';


const GalleryList = ({active}) => {
    const gallery = [
        { category: 'Bedroom furniture', images: ['img_1', 'img_2', 'img_3', 'img_4', 'img_5'] },
        { category: 'Living room furniture', images: ['img_1', 'img_2', 'img_3', 'img_4', 'img_5']},
        { category: 'Office furniture', images: ['img_1', 'img_2', 'img_3', 'img_4', 'img_5']},
        { category: 'Dining_room_futniture', images: ['img_1', 'img_2', 'img_3', 'img_4', 'img_5']},
        { category: 'Chair', images: ['img_1', 'img_2', 'img_3', 'img_4', 'img_5']},
    ]

   
    const imagesAll = importWebp(require.context(`@assets/images/first_page/gallery/Bedroom furniture`, false, /\.(jpe?g|webp)$/));
  

    return (
        <>
            {
                gallery.map(({ category, images }, index) => {
                   
                    if(index === active) {
                        return <div className={`${style.item} ${style.active}`} key={category}>
                                {
                                    images.map((image) => {
                                        return <img
                                        className={style[`img${image === images[0] ? '-main' : ''}`]}
                                        src={imagesAll[image]}
                                        alt={category}
                                        key={image}
                                        />
                                    })
                                }
                            </div>
                    }
                })
            }
        </>
    );
};

export default GalleryList;