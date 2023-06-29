import React from 'react';
import style from './Gallery.module.scss';


const GalleryList = ({active}) => {
    const gallery = [
        { category: 'Bedroom furniture', images: ['img_1.jpg', 'img_2.jpg', 'img_3.jpg', 'img_4.jpg', 'img_5.jpg'] },
        { category: 'Living room furniture', images: ['img_1.jpg', 'img_2.webp', 'img_3.jpg', 'img_4.jpg', 'img_5.jpg']},
        { category: 'Office furniture', images: ['img_1.jpg', 'img_2.webp', 'img_3.jpg', 'img_4.webp', 'img_5.jpg']},
        { category: 'Dining_room_futniture', images: ['img_1.jpg', 'img_2.webp', 'img_3.jpg', 'img_4.jpg', 'img_5.webp']},
        { category: 'Chair', images: ['img_1.jpg', 'img_2.webp', 'img_3.webp', 'img_4.webp', 'img_5.webp']},
    ]

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
                                                    src={require(`@assets/images/first_page/gallery/${category}/${image}`)}
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

