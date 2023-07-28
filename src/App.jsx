import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { AppContext, LoginContext } from './API/context';
import LayoutPage from '@components/layout/LayoutPage';
import MainPage from './pages/main/MainPage';
import CatalogPage from './pages/catalog/CatalogPage';
import ProductPage from './pages/product/ProductPage';
import CartPage from './pages/cart/CartPage';
import FavoritePage from './pages/favorite/FavoritePage';
import LoginPage from './pages/login/LoginPage';
import { useFetching } from './hooks/useFatching';


function App() {
  const [catalog, setCatalog, isLoadingCatalog, isErrorCatalog] = useFetching('catalog');
  const [newCollection, setNewCollection,isLoadingNewCollection, isErrorNewCollection] = useFetching('newcollection');
  const [cart, setCart, isLoadingCart, isErrorCart] = useFetching('cart');
  const [favorite, setFavorite, isLoadingFavorite, isErrorFavorite] = useFetching('favorite');

  const [auth, setAuth] = useState(false);

  const contextValue = [
    [catalog, setCatalog, isLoadingCatalog, isErrorCatalog],
    [newCollection, setNewCollection,isLoadingNewCollection, isErrorNewCollection],
    [cart, setCart, isLoadingCart, isErrorCart],
    [favorite, setFavorite, isLoadingFavorite, isErrorFavorite],
    [auth, setAuth]
  ];

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const loginValue = [
    [email, setEmail],
    [password, setPassword],
    [repeatPassword, setRepeatPassword]
  ]

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

                
                <Route exact path="/React_shop/login" element={
                  <LoginContext.Provider value={loginValue}>
                    <LayoutPage>
                        <LoginPage/>
                    </LayoutPage>
                  </LoginContext.Provider>}
                />
               
                
            </Routes>
        </BrowserRouter>
    </AppContext.Provider>
  </>
  );
}

export default App;
