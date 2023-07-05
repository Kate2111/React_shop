import React, {useContext} from 'react';
import CatalogSection from '@components/catalog/section/CatalogSection';
import ProductSearch from '@components/catalog/search/ProductSearch';
import {CatalogeList} from '../../API/context';

const CatalogPage = () => {
    const {catalog, setCatalog} = useContext(CatalogeList);
    console.log(catalog)

    return (<>
        <ProductSearch/>
        <CatalogSection/>
    </>
    );
};

export default CatalogPage;