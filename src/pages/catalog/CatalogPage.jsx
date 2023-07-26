import React, { useContext } from 'react';
import CatalogSection from '@components/sectionWithTabs';
import CatalogList from './components/list'
import ProductSearch from './components/search';
import { AppContext } from '@API/context';
import LoaderCards from '../../components/loaders/loaderCards';



const CatalogPage = () => {
    const [catalog, setCatalog, isLoadingCatalog] = useContext(AppContext)[0]
    return (<>
        <ProductSearch/>
        <CatalogSection>
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