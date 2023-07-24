import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { AppContext } from './API/context';
import LayoutPage from '@components/layout/LayoutPage';
import MainPage from './pages/main/MainPage';
import CatalogPage from './pages/catalog/CatalogPage';
import ProductPage from './pages/product/ProductPage';
import CartPage from './pages/cart/CartPage';
import FavoritePage from './pages/favorite/FavoritePage';
//import LoginPage from './pages/login/LoginPage';
import { useFetching } from './hooks/useFatching';


function App() {
  const [catalog, setCatalog, isLoadingCatalog, isErrorCatalog] = useFetching('catalog');
  const [newCollection, setNewCollection,isLoadingNewCollection, isErrorNewCollection] = useFetching('newcollection');
  const [cart, setCart, isLoadingCart, isErrorCart] = useFetching('cart');
  const [favorite, setFavorite, isLoadingFavorite, isErrorFavorite] = useFetching('favorite');

  /* const contextValue = {
    newCollection, setNewCollection,
    catalog, setCatalog,
    favorite, setFavorite,
    cart, setCart
  }; */

  const contextValue = [
    [catalog, setCatalog, isLoadingCatalog, isErrorCatalog],
    [newCollection, setNewCollection,isLoadingNewCollection, isErrorNewCollection],
    [cart, setCart, isLoadingCart, isErrorCart],
    [favorite, setFavorite, isLoadingFavorite, isErrorFavorite]
  ];

  const [isMain] = useState(true);
  
  return (<>
    <AppContext.Provider value={contextValue}>
        <BrowserRouter>
            <Routes>
                <Route exact path="/React_shop" element={
                    <LayoutPage isMain={isMain}>
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

                <Route exact path="/React_shop/cart" element={
                    <LayoutPage>
                        <CartPage category='cart'/>
                    </LayoutPage>}
                />

                <Route exact path="/React_shop/favorite" element={
                    <LayoutPage>
                        <FavoritePage  category='favorite'/>
                    </LayoutPage>}
                />
            </Routes>
        </BrowserRouter>
    </AppContext.Provider>
  </>
  );
}

/* 
function App() {
  const [newCollection, setNewCollection] = useState([]);
  const [catalog, setCatalog] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    getDataList('catalog')
    .then(res=>setCatalog(res))
    .catch(err=>console.log(err));
  }, [catalog])
  
  useEffect(() => {
    getDataList('newcollection')
    .then(res=>setNewCollection(res))
    .catch(err=>console.log(err));
  }, [])

  
  useEffect(() => {
    getDataList('cart')
    .then(res=>Object.values(res))
    .then(res=>setCart(res))
    .then(console.log(cart))
    .catch(arr=>console.log(arr))
  }, [cart])

  useEffect(() => {
    getDataList('favorite')
    .then(res=>Object.values(res))
    .then(res=>setFavorite(res))
    .then(console.log(favorite))
    .catch(arr=>console.log(arr))
  }, [favorite])

  const [isMain] = useState(true);
  
  return (<>
      <BrowserRouter>
        <Routes>
            <Route exact path="/React_shop" element={
              <CatalogeList.Provider value={{catalog, setCatalog}}>
                <NewCollection.Provider value={{newCollection, setNewCollection}}>
                      <LayoutPage isMain={isMain}>
                        <MainPage/>
                      </LayoutPage>
                </NewCollection.Provider>
              </CatalogeList.Provider>}
            />
          
            <Route exact path="/React_shop/catalog" element={
              <CatalogeList.Provider value={{catalog, setCatalog}}>
                <FavoritList.Provider value={{favorite, setFavorite}}>
                  <CartList.Provider value={{cart, setCart}}>
                    <LayoutPage>
                      <CatalogPage/>
                    </LayoutPage>
                  </CartList.Provider>
                </FavoritList.Provider>
              </CatalogeList.Provider>}
            />

            <Route exact path="/React_shop/catalog/:id" element={
              <NewCollection.Provider value={{newCollection, setNewCollection}}>
                <CatalogeList.Provider value={{catalog, setCatalog}}>
                  <FavoritList.Provider value={{favorite, setFavorite}}>
                    <CartList.Provider value={{cart, setCart}}>
                      <LayoutPage>
                        <ProductPage/>
                      </LayoutPage>
                    </CartList.Provider>
                  </FavoritList.Provider>
                </CatalogeList.Provider>
              </NewCollection.Provider>} 
            />

            <Route exact path="/React_shop/login" element={
              <React.Fragment>
                <LayoutPage>
                  <LoginPage/>
                </LayoutPage>
              </React.Fragment>}
            />

          
        
          
            <Route exact path="/React_shop/cart" element={
              <CartList.Provider value={{cart, setCart}}>
                <LayoutPage>
                  <CartPage category='cart'/>
                </LayoutPage>
              </CartList.Provider>}
            />

            <Route exact path="/React_shop/favorite" element={
              <FavoritList.Provider value={{favorite, setFavorite}}>
                <LayoutPage>
                  <FavoritePage  category='favorite'/>
                </LayoutPage>
              </FavoritList.Provider>}
            />

        </Routes>
      </BrowserRouter>
  </>
  );
} */

export default App;
