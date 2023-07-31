import {useContext, useEffect, useState} from 'react';
import { AppContext } from '@API/context';

const useProductState = (data, pageId) => {
    const [isHeart, setIsHeart] = useState(false);
    const [isCart, setIsCart] = useState(false);
    const [auth] = useContext(AppContext)[4]
    
    useEffect(() => {
        function getValueCatalogOrNewcoll () {
            data.forEach(({info}) => {
                info.forEach((elem) => {
                    if(elem.id === pageId) {
                        if(!auth) {
                            setIsHeart(false)
                            setIsCart(false)  
                        } else {
                            setIsHeart(elem.favorite)
                            setIsCart(elem.cart)
                        }
                    }
                })
            })
        }      

        getValueCatalogOrNewcoll ()
    }, [auth, data, pageId])

    return [isHeart, setIsHeart, isCart, setIsCart]
}

export default useProductState;