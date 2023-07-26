import {useEffect, useState} from 'react';

const useProductState = (data, pageId) => {
    const [isHeart, setIsHeart] = useState(false);
    const [isCart, setIsCart] = useState(false);
    
    useEffect(() => {
        function getValueFavorite () {
            data.forEach(({info}) => {
                info.forEach((elem) => {
                    if(elem.id === pageId) {
                        setIsHeart(elem.favorite)
                        setIsCart(elem.cart)
                    }
                })
            })
        }
    
        getValueFavorite ();
    }, [data, pageId])

    return [isHeart, setIsHeart, isCart, setIsCart]
}

export default useProductState;