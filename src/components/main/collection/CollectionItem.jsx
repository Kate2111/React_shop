import React from 'react';

const CollectionItem = ({href, url, title, text}) => {
    return (
        <a className="collection__item" href={href}>
            <img className="collection__image" src={url} alt='imgCollection'/>
            <div className="collection__info">
                <h6 className="collection__info-title">{title}</h6>
                <div className="collection__info-text">{text}</div>
            </div>
        </a>
    );
};

export default CollectionItem;