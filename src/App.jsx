import React, { useState, useEffect } from 'react';
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
import AboutPage from './pages/about/AboutPage';
import BlogPage from './pages/blog/BlogPage';
import ContactPage from './pages/contact/ContactPage';


function App() {
  const [catalog, setCatalog, isLoadingCatalog, isErrorCatalog] = useFetching('catalog');
  const [newCollection, setNewCollection,isLoadingNewCollection, isErrorNewCollection] = useFetching('newcollection');
  const [cart, setCart, isLoadingCart, isErrorCart] = useFetching('cart');
  const [favorite, setFavorite, isLoadingFavorite, isErrorFavorite] = useFetching('favorite');

  const [auth, setAuth] = useState(false);
  useEffect(() => {
    if(localStorage.getItem('auth')){
      setAuth(true)
    }
  }, [])

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

  
  return (<>
    <AppContext.Provider value={contextValue}>
      <LoginContext.Provider value={loginValue}>
        <BrowserRouter>
            <Routes>
                <Route path="/React_shop" element={<LayoutPage/>}>
                    <Route index element={<MainPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="catalog" element={<CatalogPage />} />
                    <Route path="catalog/:id" element={<ProductPage />} />
                    <Route path="blog" element={<BlogPage />} />
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="cart" element={<CartPage category="cart" />} />
                    <Route path="favorite" element={<FavoritePage category="favorite" />} />
                    <Route path="login" element={<LoginPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
      </LoginContext.Provider>
    </AppContext.Provider>
  </>
  );
}

export default App;
