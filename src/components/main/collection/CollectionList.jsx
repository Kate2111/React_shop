import React from 'react';
import CollectionItem from './CollectionItem';
import {importPng} from '@/utils/importAll'



const CollectionList = () => {
    const collections = [
        {href: './about.html', name: 'img_1', title: 'Truffaut literally trust', text: 'Living room furntiture | Chair'},
        {href: './about.html', name: 'img_2', title: 'Truffaut literally trust', text: 'Living room furntiture | Chair'},
        {href: './about.html', name: 'img_3', title: 'Truffaut literally trust', text: 'Living room furntiture | Chair'},
        {href: './about.html', name: 'img_4', title: 'Truffaut literally trust', text: 'Living room furntiture | Chair'},
        {href: './about.html', name: 'img_5', title: 'Truffaut literally trust', text: 'Living room furntiture | Chair'}
    ]

    const images = importPng(require.context('@assets/images/first_page/collection', false, /\.png$/));

    return (
        <div className="collection__items">
            {
                collections.map(collection => {
                    return <CollectionItem
                            key={collection.name}
                            href={collection.href}
                            url={images[collection.name]}
                            title={collection.title}
                            text={collection.text}
                        />
                })
            }
                
        </div>
    );
};

export default CollectionList;