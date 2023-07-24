import React from 'react';
import MyButtonBlack from '@components/UI/button/black_button/MyButtonBlack';
import MyInput from '@components/UI/input/MyInput';
import style from './search.module.scss'

const ProductSearch = () => {
    return (
        <div className='container'>
            <div className={style.wrapper}>
                <MyInput text={'search...'}/>
                <MyButtonBlack>Search</MyButtonBlack>
            </div>
        </div>
    );
};

export default ProductSearch;