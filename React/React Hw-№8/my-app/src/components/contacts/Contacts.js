import TableItem from '../TableItem/TableItem';
import './Contacts.css';

function Contacts({ contactList} ){
    return(
        <table className='table_contact'>
            <tbody>
                <tr>
                    <th >Name</th>
                    <th >Surname</th>
                    <th >Phone</th>
                    <th >Button</th>
                </tr>
                {contactList.map((item) => {
                    return (
                    <TableItem 
                        key={item.id} 
                        item={item}
                    />
                    );
                })}
            </tbody>
        </table>
    )

}

export default Contacts;