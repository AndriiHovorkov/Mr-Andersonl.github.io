import React from 'react';
import './TableItem.css';
import {deliteItem} from '../../store/actions/ListActions'
import { useDispatch} from "react-redux";
function TableItem({item} ) {
    const dispatch = useDispatch();
    function deleteBtn() {
        dispatch(deliteItem(item.id));
    }
    return (
            <tr >
                <th >{item.name}</th>
                <th >{item.surname}</th>
                <th >{item.phone}</th>
                <th className='delite' onClick={deleteBtn}>Delete</th>
            </tr>
    );
    
}

export default TableItem;