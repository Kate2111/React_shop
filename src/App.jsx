import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LayoutPage from '@components/layout/LayoutPage';
import MainPage from './pages/main_page/MainPage';
import CatalogPage from './pages/catalog_page/CatalogPage';
import ProductPage from './pages/product_page/ProductPage';
import { useEffect, useState } from 'react';
import {getDataList} from './API/firebase';
import {NewCollection, CatalogeList, FavoritLisr, CartList} from './API/context';

function App() {
  const [newCollection, setNewCollection] = useState([]);
  const [catalog, setCatalog] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [cart, setCart] = useState([]);
  
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
                <NewCollection.Provider value={{newCollection, setNewCollection}}>
                      <LayoutPage isMain={isMain}>
                        <MainPage/>
                      </LayoutPage>
                </NewCollection.Provider>
          
            }/>
          
            <Route exact path="/React_shop/catalog" element={
                <CatalogeList.Provider value={{catalog, setCatalog}}>
                  <FavoritLisr.Provider value={{favorite, setFavorite}}>
                    <CartList.Provider value={{cart, setCart}}>
                      <LayoutPage>
                        <CatalogPage/>
                      </LayoutPage>
                    </CartList.Provider>
                  </FavoritLisr.Provider>
                </CatalogeList.Provider>	
            } />

            <Route exact path="/React_shop/catalog/:id" element={
              <NewCollection.Provider value={{newCollection, setNewCollection}}>
                <CatalogeList.Provider value={{catalog, setCatalog}}>
                  <FavoritLisr.Provider value={{favorite, setFavorite}}>
                    <CartList.Provider value={{cart, setCart}}>
                      <LayoutPage>
                        <ProductPage/>
                      </LayoutPage>
                    </CartList.Provider>
                  </FavoritLisr.Provider>
                </CatalogeList.Provider>
              </NewCollection.Provider>
            } 
            />
          
        </Routes>
      </BrowserRouter>
  </>
  );
}

export default App;
