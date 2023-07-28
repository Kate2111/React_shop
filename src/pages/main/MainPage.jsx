import React from 'react';
import GallerySection from '../../components/sectionWithTabs';
import GalleryList from './components/gallery';
import CollectionSection from './components/collection-container/section';
import BlogSection from './components/blog-container/section';
import TopSection from './components/top';
import DecorSection from './components/decor';

const MainPage = () => {
  const tabs = ['Bedroom furniture', 'Living room furniture', 'Office furniture', 'Dining room futniture', 'Chair']
  
    return (<>
      <TopSection/>  

      <CollectionSection/>

      <DecorSection/>

      <GallerySection tabs={tabs}>
        <GalleryList/>
      </GallerySection>

      <BlogSection/>
    </>
    );
};

export default MainPage;