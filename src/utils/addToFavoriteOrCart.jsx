import { postDataList, updateElem, deleteElemToDataList } from '@API/firebase';

//для изменения catalog или newCollection 
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

//изменения favorite или cart
const addNewElemCartOrFavorite = (pageId, arr, elem, propertyName, source) => {
    const isElemPresent = arr.some(elem => elem.id === pageId);

    if (!isElemPresent) {
        return [...arr, { ...elem, [propertyName]: true, category: source}];
    }
}

//Добавление нового элем или удаление на сервере, catalog или newCollection, favorite или cart
const updateFavoriteData = (setData, data, pageId, source, propertyName, isValue, setFavoriteOrCart, favoriteOrCart, index, indexElem, elem,) => {
    const updatedElem = { ...elem, [propertyName]: isValue };

    if(isValue) {
        postDataList(propertyName, updatedElem, updatedElem.id)
        updateElem(source, index, indexElem, propertyName, true);
        setFavoriteOrCart(addNewElemCartOrFavorite(pageId, favoriteOrCart, elem, propertyName, source));
        setData(updateElemLocalDataList(pageId, data, propertyName, true)); 
    } else {
        setFavoriteOrCart([...favoriteOrCart].filter(elem => elem.id !== pageId))
        setData(updateElemLocalDataList(pageId, data, propertyName, false)); 
        deleteElemToDataList(propertyName, elem.id);
        updateElem(source, index, indexElem, propertyName, false);
    }   
};

export const addToFavoriteOrCart = async(setData, data, pageId, source, setDataHeartOrCart, propertyName, isValue, setFavoriteOrCart, favoriteOrCart) => {
        await data.forEach(({ info }, index) => {
            info.forEach((elem, indexElem) => {
                if (elem.id === pageId) {
                    updateFavoriteData(setData, data, pageId, source,  propertyName, isValue, setFavoriteOrCart, favoriteOrCart, index, indexElem, elem);
                }
        });
    });

    setDataHeartOrCart(isValue);
};
