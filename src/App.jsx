import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LayoutPage from '@components/layout/LayoutPage';
import MainPage from './pages/main_page/MainPage';
import CatalogPage from './pages/catalog_page/CatalogPage';
import ProductPage from './pages/product_page/ProductPage';

function App() {
  return (<>
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
   
  </>
  );
}

export default App;
