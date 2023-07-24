import React, { useState } from 'react';
import MyButtonTab from '@components/UI/button/MyButtonTab';
import styleTab from '@components/UI/button/MyButtonTab.module.scss'
import classNames from 'classnames';
import style from './section.module.scss';


const SectionWithTabs = ({children}) => {
    const tabs = ['Bedroom furniture', 'Living room furniture', 'Office furniture', 'Dining room futniture', 'Chair']
    const [active, setActive] = useState(1);

    const clonedChildren = React.Children.map(children, (child) => {
        return React.cloneElement(child, { active });
    });

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

            {clonedChildren}
          </div>
      </section>
    );
};

export default SectionWithTabs;