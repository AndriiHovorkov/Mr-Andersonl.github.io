import React from 'react';
import './TableItem.css';
import {deliteItem} from '../../store/actions/ListActions'
import { useDispatch} from "react-redux";
import { Link } from 'react-router-dom';

function TableItem({item} ) {
    const dispatch = useDispatch();
    function deleteBtn() {
        dispatch(deliteItem(item.id));
    }
    return (
            <tr >
                <th ><Link to={'/PhotoNavigation'+`/Table/` + item.id} >{item.name}</Link></th> 
                <th >{item.surname}</th>
                <th >{item.phone}</th>
                <th className='delite' onClick={deleteBtn}>Delete</th>
            </tr>
    );
    
}

export default TableItem;