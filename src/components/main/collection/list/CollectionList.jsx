import React, {useContext} from 'react';
import style from './Collection.module.scss';
import CollectionItem from './CollectionItem';
import {importPng} from '@/utils/importAll';
import {CatalogeList} from '@API/context';



const CollectionList = () => {
    const {newCollection, setNewCollection} = useContext(CatalogeList);


   /*  const collections = [
        {href: './about.html', name: 'img_1', title: 'Truffaut literally trust', text: 'Living room furntiture | Chair'},
        {href: './about.html', name: 'img_2', title: 'Truffaut literally trust', text: 'Living room furntiture | Chair'},
        {href: './about.html', name: 'img_3', title: 'Truffaut literally trust', text: 'Living room furntiture | Chair'},
        {href: './about.html', name: 'img_4', title: 'Truffaut literally trust', text: 'Living room furntiture | Chair'},
        {href: './about.html', name: 'img_5', title: 'Truffaut literally trust', text: 'Living room furntiture | Chair'}
    ] */

    /* const images = importPng(require.context('@assets/images/first_page/collection', false, /\.png$/)); */

    return (
        <div className={style.items}>
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
                
        </div>
    );
};

export default CollectionList;