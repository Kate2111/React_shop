import React from 'react';
import ContentForm from '../content-form';
import style from '../login.module.scss'

const ActiveContent = ({content, active, setVisible}) => {
    return (
        <>
            {
                content.map((elem, index) => {
                    if(index === active) {
                        return <ContentForm
                                    className={`${style.item} ${style.active}`} key={index}
                                    activeTab={active}
                                    checkbox={elem.checkbox}
                                    setVisible={setVisible}
                                />
                    }
                    return null;
                }) 
            }
        </>
    );
};

export default ActiveContent;