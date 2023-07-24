import React from 'react';
import CatalogSection from '@components/sectionWithTabs';
import CatalogList from './components/list'
import ProductSearch from './components/search';


const CatalogPage = () => {
    return (<>
        <ProductSearch/>
        <CatalogSection>
            <CatalogList/>
        </CatalogSection>
    </>
    );
};

export default CatalogPage;