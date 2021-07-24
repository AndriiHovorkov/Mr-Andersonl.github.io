import { useEffect, useState } from 'react';
import './App.css';
import Contacts from './components/contacts/Contacts';
import Form from './components/form/Form';
import { useDispatch, useSelector } from "react-redux";
import {fetchItem} from './store/actions/ListActions'

function App() {

  const {items} = useSelector((state) => ({
    items: state.items
}));

  const [thisRender, setRender]  = useState({
      render: false
  })

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItem())
  },[])


  function onClickBtn(){
    thisRender.render === false ?(
      setRender({
        render: !thisRender.render
      })
    ):(
      setRender({
        render: !thisRender.render
      })
    )
    
  }
    return(
      <>
        {thisRender.render === false ? (
          <Contacts 
            contactList ={items} 
          />
        ):(
          <Form
            render ={onClickBtn}
          />
        ) }
        <button className='addBtn' onClick={onClickBtn}> 
          {thisRender.render === false ? ('Add contact'): ('Cancel')}
        </button> 
      </>
    ) 
  }
export default App;


        