import React from 'react';
import './TableItem.css';
function TableItem({onDelete, item} ) {
    function deleteBtn() {
        onDelete(item.id);
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