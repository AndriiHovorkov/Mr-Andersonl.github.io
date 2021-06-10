import React, { Component } from 'react';
import './TableItem.css';
class TableItem extends Component {
    deleteBtn = () => {
        this.props.onDelete(this.props.item.id);
    }
    render() {
        return (
                <tr >
                    <th >{this.props.item.name}</th>
                    <th >{this.props.item.surname}</th>
                    <th >{this.props.item.phone}</th>
                    <th className='delite' onClick={this.deleteBtn}>Delete</th>
                </tr>
        );
    }
}

export default TableItem;