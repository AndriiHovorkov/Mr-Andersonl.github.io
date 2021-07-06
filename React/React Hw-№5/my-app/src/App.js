import { useState } from 'react';
import './App.css';
import Contacts from './components/contacts/Contacts';
import Form from './components/form/Form';

function App() {


  const [contactList, setNewList]  = useState([
    {name: 'Alex', surname: 'Terner',  phone: 30630705432, id: 1623330263719},
    {name: 'Alisa', surname: 'Marco',  phone: 33560703431, id: 1623330263721},
  ])

  const [thisRender, setRender]  = useState({
      render: false
  })

  function addContact(name,surname,phone){

    let list ={ 
      name: name, 
      surname: surname, 
      phone: phone, 
      id: Date.now()
    }

    setNewList({
        ...setNewList,
        list
       
        
    })
  }

  function deleteContact (id){
    const newList = contactList.filter((item) => item.id !== id);
    setNewList(newList);
  }

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
            contactList ={contactList} 
            onDelete={deleteContact}
          />
        ):(
          <Form 
            onAdd={addContact}
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


        