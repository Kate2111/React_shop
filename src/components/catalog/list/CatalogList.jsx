import React, { useContext, useState } from 'react';
import style from './CatalogList.module.scss';
import {CatalogeList} from '@API/context';
import CatalogItem from './CatalogItem';

const GalleryList = ({active}) => {
    const {catalog} = useContext(CatalogeList);

    return (
        <>
            { 
                catalog.map(({category, info}, index) => {
                    if(index === active) {
                        return (<div className={`${style.item} ${style.active}`} key={category}>
                                {
                                    info.map((elem) => {
                                        return <CatalogItem
                                                    key={elem.id}
                                                    elem={elem}
                                                    category={category}
                                            />
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



