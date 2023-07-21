import React, { useContext } from 'react';
import style from './Gallery.module.scss';
import { CatalogeList } from '@API/context';
import {useNavigate} from 'react-router-dom';
import classNames from 'classnames';

const GalleryList = ({active}) => {
    const {catalog} = useContext(CatalogeList);
    const navigate = useNavigate();

    return (
        <>
            { 
                catalog.map(({ category, info }, index) => {
                    const firstFiveElements = info.slice(0, 5);
                    if(index === active) {
                        return (<div className={`${style.items} ${style.active}`} key={category}>
                                {
                                    firstFiveElements.map((elem) => {
                                        return <div className={classNames({[style.item]: true,[style['img-main']]: elem === firstFiveElements[0]})}
                                                    onClick={() => navigate(`/React_shop/catalog/${elem.id}`, { state: { source: 'catalog' } })}
                                                >
                                                    <img
                                                        className={style.img}
                                                        src={elem.image}
                                                        alt={category}
                                                        key={elem.id}
                                                    />
                                                    <div className={style.info}>
                                                        <h6 className={style.title}>{elem.title}</h6>
                                                        <div className={style.text}>{elem.price}$</div>
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

