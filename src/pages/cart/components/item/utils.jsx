
import { updateElem, deleteElemToDataList } from '@API/firebase';

export const increment = (setData, data) => {
    setData(data + 1);
  };

export const decrement = (setData, data) => {
if (data> 0) {
    setData(data - 1);
}
};

export const deleteElem = (setCart, cart, recourse, pageId, data, setData, source) => {
    deleteElemToDataList(recourse, pageId);              //удаляю элемент с корзины на сервере
    setCart(cart.filter(elem => elem.id !== pageId));    //удаляю элемент локально

    data.forEach(({ info }, index) => {
        info.forEach((elem, indexElem) => {
            if (elem.id === pageId) {
                updateElem(source, index, indexElem, 'cart', false); //изменяю состояние в элементе ключ cart на сервере
                setData(updateElemLocalDataList(pageId, data, 'cart', false) )  //изменяю состояние в элементе ключ cart локально              
            }
        })
    });
    
}

const updateElemLocalDataList = (pageId, arr, propertyName, booleanValue) => {
    const updatedArr = arr.map(({ info }) => {
                            return {
                                info: info.map(elem => {
                                    if (elem.id === pageId) {
                                    return { ...elem, [propertyName]: booleanValue };
                                    }
                                    return elem;
                                })
                            };
    });
    return updatedArr;
}

