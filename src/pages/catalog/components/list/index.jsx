import React, { useContext } from 'react';
import { AppContext } from '@API/context';
import CatalogItem from '@components/itemCatalog';
import style from './list.module.scss';

const GalleryList = ({active}) => {
    const [catalog] = useContext(AppContext)[0];
    
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



