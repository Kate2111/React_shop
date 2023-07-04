import React from 'react';
import CatalogSection from '@components/catalog/section/CatalogSection';
import ProductSearch from '@components/catalog/search/ProductSearch';

const CatalogPage = () => {
    return (<>
        <ProductSearch/>
        <CatalogSection/>
    </>
    );
};

export default CatalogPage;