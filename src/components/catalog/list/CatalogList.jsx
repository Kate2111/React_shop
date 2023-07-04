import React from 'react';
import style from './CatalogList.module.scss';
import buy from '@assets/images/catalog_page/Buy.svg';
import heart from '@assets/images/catalog_page/Heart.svg';
import {useNavigate} from 'react-router-dom';
import { nanoid } from 'nanoid';

const GalleryList = ({active}) => {
      const catalog = [
        { category: 'Bedroom furniture', info: [{id: nanoid(5), title:'Диван "Ergonomic Rubber Shoes"', price:'35 990 ₽', image: 'img_1.jpg'}, {id: nanoid(5), title:'Диван "Ergonomic Rubber Shoes"', price:'35 990 ₽', image: 'img_2.jpg'}, {id: nanoid(5), title:'Диван "Ergonomic Rubber Shoes"', price:'35 990 ₽', image: 'img_3.jpg'}, {id: nanoid(5), title:'Диван "Ergonomic Rubber Shoes"', price:'35 990 ₽', image: 'img_4.jpg'}, {id: nanoid(5), title:'Диван "Ergonomic Rubber Shoes"', price:'35 990 ₽', image: 'img_3.jpg'}] },
        { category: 'Living room furniture', info: [{id: nanoid(5), title:'Диван "Ergonomic Rubber Shoes"', price:'35 990 ₽', image: 'img_1.jpg'}, {id: nanoid(5), title:'Диван "Ergonomic Rubber Shoes"', price:'35 990 ₽', image: 'img_2.webp'}, {id: nanoid(5), title:'Диван "Ergonomic Rubber Shoes"', price:'35 990 ₽', image: 'img_3.jpg'}, {id: nanoid(5), title:'Диван "Ergonomic Rubber Shoes"', price:'35 990 ₽', image: 'img_4.jpg'}, {id: nanoid(5), title:'Диван "Ergonomic Rubber Shoes"', price:'35 990 ₽', image: 'img_3.jpg'}]},
        { category: 'Office furniture', info: [{id: nanoid(5), title:'Диван "Ergonomic Rubber Shoes"', price:'35 990 ₽', image: 'img_1.jpg'}, {id: nanoid(5), title:'Диван "Ergonomic Rubber Shoes"', price:'35 990 ₽', image: 'img_2.webp'}, {id: nanoid(5), title:'Диван "Ergonomic Rubber Shoes"', price:'35 990 ₽', image: 'img_3.jpg'}, {id: nanoid(5), title:'Диван "Ergonomic Rubber Shoes"', price:'35 990 ₽', image: 'img_4.webp'}, {id: nanoid(5), title:'Диван "Ergonomic Rubber Shoes"', price:'35 990 ₽', image: 'img_3.jpg'}]},
        { category: 'Dining_room_futniture', info: [{id: nanoid(5), title:'Диван "Ergonomic Rubber Shoes"', price:'35 990 ₽', image: 'img_1.jpg'}, {id: nanoid(5), title:'Диван "Ergonomic Rubber Shoes"', price:'35 990 ₽', image: 'img_2.webp'}, {id: nanoid(5), title:'Диван "Ergonomic Rubber Shoes"', price:'35 990 ₽', image: 'img_3.jpg'}, {id: nanoid(5), title:'Диван "Ergonomic Rubber Shoes"', price:'35 990 ₽', image: 'img_4.jpg'}, {id: nanoid(5), title:'Диван "Ergonomic Rubber Shoes"', price:'35 990 ₽', image: 'img_5.webp'}]},
        { category: 'Chair', info: [{id: nanoid(5), title:'Диван "Ergonomic Rubber Shoes"', price:'35 990 ₽', image: 'img_1.jpg'}, {id: nanoid(5), title:'Диван "Ergonomic Rubber Shoes"', price:'35 990 ₽', image: 'img_2.webp'}, {id: nanoid(5), title:'Диван "Ergonomic Rubber Shoes"', price:'35 990 ₽', image: 'img_3.webp'}, {id: nanoid(5), title:'Диван "Ergonomic Rubber Shoes"', price:'35 990 ₽', image: 'img_4.webp'}, {id: nanoid(5), title:'Диван "Ergonomic Rubber Shoes"', price:'35 990 ₽', image: 'img_5.webp'}]},
      ]

      console.log(catalog);

      const navigate = useNavigate();

    return (
        <>
            { 
                catalog.map(({ category, info}, index) => {
                    if(index === active) {
                        return (<div className={`${style.item} ${style.active}`} key={category}>
                                {
                                    info.map((elem) => {
                                        return <div className={style.wrapper} key={elem.id}>
                                                    <img
                                                        onClick={() => navigate(`/React_shop/catalog/${elem.id}`)}
                                                        className={style.img}
                                                        src={require(`@assets/images/first_page/gallery/${category}/${elem.image}`)}
                                                        alt={category}
                                                    />
                                                    <div className={style.info}>
                                                        <h4 className={style.title}>{elem.title}</h4>
                                                        <div className={style.inner}>
                                                            <p className={style.price}>{elem.price}</p>
                                                            <div className={style.icons}>
                                                                <img  className={style.icon} src={heart} alt="heart" />
                                                                <img className={style.icon} src={buy} alt="buy" />
                                                            </div>
                                
                                                            
                                                        </div>
                                                        
                                                    </div>
                                            </div> 
                                    })
                                }
                            </div>)
                    }
                    return null;
                }) 
            } 
        </>
    );
};

export default GalleryList;



