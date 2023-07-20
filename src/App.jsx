import React, { useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {getDataList} from './API/firebase';
import {NewCollection, CatalogeList, FavoritList, CartList} from './API/context';
import LayoutPage from '@components/layout/LayoutPage';
import MainPage from './pages/main_page/MainPage';
import CatalogPage from './pages/catalog_page/CatalogPage';
import ProductPage from './pages/product_page/ProductPage';
import CartPage from './pages/cart_page/CartPage';
import FavoritePage from './pages/favorite_page/FavoritePage';
import LoginPage from './pages/login/LoginPage';




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

  
  useEffect(() => {
    getDataList('cart')
    .then(res=>Object.values(res))
    .then(res=>setCart(res))
    .then(console.log(cart))
    .catch(arr=>console.log(arr))
  }, [])

  useEffect(() => {
    getDataList('favorite')
    .then(res=>Object.values(res))
    .then(res=>setFavorite(res))
    .then(console.log(favorite))
    .catch(arr=>console.log(arr))
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
              </NewCollection.Provider>}
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

          
          {/* private pages */}
          
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
}

export default App;
