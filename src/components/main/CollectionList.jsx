import React from 'react';
import CollectionItem from './CollectionItem';

import img_1 from '../../img/first_page/collection/img_1.png';
import img_2 from '../../img/first_page/collection/img_2.png';
import img_3 from '../../img/first_page/collection/img_3.png';
import img_4 from '../../img/first_page/collection/img_4.png';
import img_5 from '../../img/first_page/collection/img_5.png';


const CollectionList = () => {
    const collections = [
        {href: './about.html', url: img_1, title: 'Truffaut literally trust', text: 'Living room furntiture | Chair'},
        {href: './about.html', url: img_2, title: 'Truffaut literally trust', text: 'Living room furntiture | Chair'},
        {href: './about.html', url: img_3, title: 'Truffaut literally trust', text: 'Living room furntiture | Chair'},
        {href: './about.html', url: img_4, title: 'Truffaut literally trust', text: 'Living room furntiture | Chair'},
        {href: './about.html', url: img_5, title: 'Truffaut literally trust', text: 'Living room furntiture | Chair'}
    ]


    return (
        <div className="collection__items">
            {
                collections.map(collection => {
                    return <CollectionItem
                            href={collection.href}
                            url={collection.url}
                            title={collection.title}
                            text={collection.text}
                        />
                })
            }
                
        </div>
    );
};

export default CollectionList;