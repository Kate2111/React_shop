import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LayoutPage from '@components/layout/LayoutPage';
import MainPage from './pages/main_page/MainPage';
import GalleryPage from './pages/gallery_page/GalleryPage';

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route exact path="/React_shop" element={
          <LayoutPage>
            <MainPage/>
          </LayoutPage>} 
        />
        <Route exact path="/React_shop/gallery" element={
          <LayoutPage>
            <GalleryPage/>
          </LayoutPage>} 
        />

      </Routes>
    </BrowserRouter>
   
  </>
  );
}

export default App;
