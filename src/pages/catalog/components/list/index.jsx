import React, { useContext } from 'react';
import { AppContext } from '@API/context';
import CatalogItem from '@components/itemCatalog';
import style from './list.module.scss';

const CatalogList = ({active}) => {
    const [catalog, setCatalog] = useContext(AppContext)[0];
    
    return (
        <>
            { 
                catalog.map(({category, info}, index) => {
                    if(index === active) {
                        return (<div className={`${style.item} ${style.active}`} key={index}>
                                {
                                    info.map((elem) => {
                                        return <CatalogItem
                                                    key={elem.id}
                                                    id={elem.id}
                                                    elem={elem}
                                                    category={category}
                                                    data={catalog}
                                                    setData={setCatalog}
                                                    source='catalog'
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

export default CatalogList;



