import { Component } from 'react';
import TableItem from '../TableItem/TableItem';
import './Contacts.css';

class Contacts extends Component {
  render(){
    return(
        <table className='table_contact'>
            <tbody>
                <tr>
                    <th >Name</th>
                    <th >Surname</th>
                    <th >Phone</th>
                    <th >Button</th>
                </tr>
                {this.props.contactList.map((item) => {
                    return (
                    <TableItem 
                        key={item.id} 
                        item={item}
                        onDelete={this.props.onDelete}
                    />
                    );
                })}
            </tbody>
        </table>
    )
  }

}

export default Contacts;