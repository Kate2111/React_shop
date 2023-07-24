import React from 'react';
import GallerySection from '../../components/sectionWithTabs';
import GalleryList from './components/gallery';
import CollectionSection from './components/collection-container/section';
import BlogSection from './components/blog-container/section';
import TopSection from './components/top';
import DecorSection from './components/decor';

const MainPage = () => {
    return (<>
      <TopSection/>  

      <CollectionSection/>

      <DecorSection/>

      <GallerySection>
        <GalleryList/>
      </GallerySection>

      <BlogSection/>
    </>
    );
};

export default MainPage;