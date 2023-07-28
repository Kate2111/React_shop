import React, { useContext } from 'react';
import CatalogSection from '@components/sectionWithTabs';
import CatalogList from './components/list'
import ProductSearch from './components/search';
import { AppContext } from '@API/context';
import LoaderCards from '@components/loaders/loaderCards';



const CatalogPage = () => {
    const [catalog, setCatalog, isLoadingCatalog] = useContext(AppContext)[0]
    const tabs = ['Bedroom furniture', 'Living room furniture', 'Office furniture', 'Dining room futniture', 'Chair']
    
    return (<>
        <ProductSearch/>
        <CatalogSection tabs={tabs}>
            {
                isLoadingCatalog 
                ?   (<LoaderCards numberOfLoaderCards={6}/>) 
                :   (<CatalogList/>)
            }
        </CatalogSection>
    </>
    );
};

export default CatalogPage;