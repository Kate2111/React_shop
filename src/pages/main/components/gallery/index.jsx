import React, { useContext } from 'react';
import { AppContext } from '@API/context';
import {useNavigate} from 'react-router-dom';
import GalleryItem from '@components/itemCollection'
import style from './list.module.scss';
import classNames from 'classnames';

const GalleryList = ({active}) => {
    const [catalog] = useContext(AppContext)[0];
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
                                        return <div className={classNames({"item": true,[style['img-main']]: elem === firstFiveElements[0]})}
                                                    onClick={() => navigate(`/React_shop/catalog/${elem.id}`, { state: { source: 'catalog' } })}
                                                    key={elem.id}
                                                >
                                                    <GalleryItem
                                                        image={elem.image}
                                                        title={elem.title}
                                                        price={elem.price}
                                                    />
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

