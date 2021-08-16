import TableItem from '../TableItem/TableItem';
import './Contacts.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from 'react';
import { fetchItem } from '../../store/actions/ListActions';
import {Link} from "react-router-dom";


function Contacts(){
    const {items} = useSelector((state) => ({
        items: state.items
    }));
    
      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(fetchItem())
      },[])
    return(

        <div>
            
            <table className='table_contact'>
                <tbody>
                    <tr>
                        <th >Name</th>
                        <th >Surname</th>
                        <th >Phone</th>
                        <th >Button</th>
                    </tr>
                    {items.map((item) => {
                        return (
                        <TableItem 
                            key={item.id} 
                            item={item}
                        />
                        );
                    })}
                    <Link to="/FormInput">Form</Link>
                </tbody>
            </table>
        </div>

        
    )

}

export default Contacts;