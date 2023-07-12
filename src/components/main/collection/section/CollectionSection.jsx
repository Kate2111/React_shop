import React from 'react';
import style from './CollectionSection.module.scss'
import CollectionList from '../list/CollectionList';

const CollectionSection = () => {
 
     
    return (
        <>
            <section className={style.collection}>
                <div className="container-fluid"> 
                    <div className={style.header}>
                        <h3 className={style.title}>Furniture new collection</h3>
                        <p className={style.text}>Deep v you probably haven't heard of them banh mi synth actually affogato. Aesthetic lyft ethical drinking vinegar austint
                        </p>
                    </div>
                    <CollectionList/>
                </div> 
            </section>
        </>
    );
};

export default CollectionSection;