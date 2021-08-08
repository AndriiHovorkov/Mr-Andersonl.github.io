import React, { useEffect, useState } from 'react';
import { getItem } from '../Api/Api';

export default function usePhoto() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getItem(setData);
    }, []); 

    return {data}
}
