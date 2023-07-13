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
  const [newCollection, setNewCollection] = useState([]);
  
  useEffect(() => {
    getDataList('catalog')
    .then(res=>setCatalog(res))
    .catch(err=>console.log(err));
  }, [])
  
  useEffect(() => {
    getDataList('newcollection')
    .then(res=>setNewCollection(res))
    .catch(err=>console.log(err));
  }, [])

  const [isMain] = useState(true);
  
  return (<>
      <BrowserRouter>
        <Routes>
        
            <Route exact path="/React_shop" element={
              <CatalogeList.Provider value={{newCollection, setNewCollection}}>
                <LayoutPage isMain={isMain}>
                  <MainPage/>
                </LayoutPage>
              </CatalogeList.Provider>} 
            />
          
            <Route exact path="/React_shop/catalog" element={
              <CatalogeList.Provider value={{catalog, setCatalog}}>
                <LayoutPage>
                  <CatalogPage/>
                </LayoutPage>
              </CatalogeList.Provider> } 
            />
            <Route exact path="/React_shop/catalog/:id" element={
              <CatalogeList.Provider value={{catalog, setCatalog}}>
                <LayoutPage>
                  <ProductPage/>
                </LayoutPage>
              </CatalogeList.Provider> } 
            />
          
        </Routes>
      </BrowserRouter>
  </>
  );
}

export default App;
