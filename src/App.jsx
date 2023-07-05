import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LayoutPage from '@components/layout/LayoutPage';
import MainPage from './pages/main_page/MainPage';
import CatalogPage from './pages/catalog_page/CatalogPage';
import ProductPage from './pages/product_page/ProductPage';
import { useEffect, useState } from 'react';
import {getDataList} from './API/firebase';
import {CatalogeList} from './API/context'

function App() {
  const [catalog, setCatalog] = useState([]);
  
  useEffect(() => {
    getDataList('catalog')
    .then(res=>setCatalog(res))
    .catch(err=>console.log(err));
  }, [])
  
  //console.log(catalog);

  return (<>
    <CatalogeList.Provider value={{catalog, setCatalog}}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/React_shop" element={
            <LayoutPage>
              <MainPage/>
            </LayoutPage>} 
          />
          <Route exact path="/React_shop/catalog" element={
            <LayoutPage>
              <CatalogPage/>
            </LayoutPage>} 
          />
          <Route exact path="/React_shop/catalog/:id" element={
            <LayoutPage>
              <ProductPage/>
            </LayoutPage>} 
          />
        </Routes>
      </BrowserRouter>
    </CatalogeList.Provider>
  </>
  );
}

export default App;
