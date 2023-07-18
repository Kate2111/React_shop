import React, { useContext } from 'react';
import style from './CatalogList.module.scss';
import buy from '@assets/images/catalog_page/Buy.svg';
import heart from '@assets/images/catalog_page/Heart.svg';
import {useNavigate} from 'react-router-dom';
import {CatalogeList} from '../../../API/context';

const GalleryList = ({active}) => {
    const {catalog} = useContext(CatalogeList);

    const navigate = useNavigate();

    return (
        <>
            { 
                catalog.map(({category, info}, index) => {
                    if(index === active) {
                        return (<div className={`${style.item} ${style.active}`} key={category}>
                                {
                                    info.map((elem) => {
                                        return <div className={style.wrapper} key={elem.id}>
                                                    <a onClick={() => navigate(`/React_shop/catalog/${elem.id}`,  { state: { source: 'catalog' } })} target='_blank'>
                                                        <img
                                                            className={style.img}
                                                            src={elem.image}
                                                            alt={category}
                                                        />
                                                    </a>
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



