
import React, { useEffect, useState } from 'react';
import GetDataList from '../API/servise';

export const useFetching = (resource) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setisError] = useState('')

    const fetching = async () => {
        try {
            setIsLoading(true);
            const res = await GetDataList.getAll(resource)
            const resData = Array.isArray(res) ? res : Object.values(res);
            setData(resData)
        } catch(e) {
            setisError(e.message)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetching()
    }, [])

    return [data, setData, isLoading, isError]
};
