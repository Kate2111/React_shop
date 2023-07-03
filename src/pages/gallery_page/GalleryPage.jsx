import React from 'react';
import GallerySection from '@components/main/gallery/section/GallerySection';
import ProductSearch from '../../components/gallery/search/ProductSearch';

const GalleryPage = () => {
    return (<>
        <ProductSearch/>
        <GallerySection/>
    </>
    );
};

export default GalleryPage;