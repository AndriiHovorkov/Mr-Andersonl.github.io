import { useState } from 'react';
import './App.css';
import Contacts from './components/contacts/Contacts';
import Form from './components/form/Form';
import useTodo from './hooks/useTodo';

function App() {

  const { items, deleteTodoItem, addTodoItem, toggleTodoItem } = useTodo();

  const [thisRender, setRender]  = useState({
      render: false
  })

  function onClickBtn(){
    thisRender.render === false ?(
      setRender({
        render: true
      })
    ):(
      setRender({
        render: false
      })
    )
    
  }
    return(
      <>
        {thisRender.render === false ? (
          <Contacts 
            contactList ={items} 
            onDelete={deleteTodoItem}
          />
        ):(
          <Form 
            onAdd={addTodoItem}
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


        