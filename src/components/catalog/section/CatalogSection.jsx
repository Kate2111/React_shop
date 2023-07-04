import React, { useState } from 'react';
import CatalogList from '../list/CatalogList';
import MyButtonTab from '@components/UI/button/MyButtonTab';
import styleTab from '@components/UI/button/MyButtonTab.module.scss'
import classNames from 'classnames';
import style from './CatalogSection.module.scss';


const GallerySection = () => {
    const tabs = ['Bedroom furniture', 'Living room furniture', 'Office furniture', 'Dining room futniture', 'Chair']

    const [active, setActive] = useState(1);

    return (
        <section className={style.gallery}>
          <div className="container-fluid">
            <div className={style.tabs}>
              {
                  tabs.map((tab, i) => {
                      const tabClass = classNames(styleTab.tab, {
                          [styleTab.active]: i === active,
                        });

                      return  <MyButtonTab 
                                  key={tab}
                                  onClick={() => setActive(i)}
                                  className={tabClass}
                              >
                                  {tab}
                              </MyButtonTab>
                  })
              }
            </div>                      

            <CatalogList active={active}/>
          </div>
      </section>
    );
};

export default GallerySection;