import React from 'react';
import GallerySection from '@components/main/gallery/section/GallerySection';
import CollectionSection from '../../components/main/collection/section/CollectionSection';
import BlogSection from '../../components/main/blog/section/BlogSection';
import TopSection from '../../components/main/top/TopSection';
import DecorSection from '../../components/main/decor/DecorSection';

const MainPage = () => {
    return (<>
      <TopSection/>  

      <CollectionSection/>

      <DecorSection/>

      <GallerySection/>

      <BlogSection/>
    </>
    );
};

export default MainPage;