import { Component } from 'react';
import './App.css';
import Contacts from './components/contacts/Contacts';
import Form from './components/form/Form';

class App extends Component {
  state ={
    contactList:[
      {name: 'Alex', surname: 'Terner',  phone: 30630705432, id: 1623330263719},
      {name: 'Alisa', surname: 'Marco',  phone: 33560703431, id: 1623330263721},
    ],
    render: false,
  }

  addContact = (name,surname,phone) =>{
    this.setState({
      contactList: [
        ...this.state.contactList,
        {
          name: name, 
          surname: surname, 
          phone: phone, 
          id: Date.now()
        }]
    })
  }

  deleteContact = (id) => {
    this.setState({
      contactList: this.state.contactList.filter((item) => item.id !== id)
    })
  }

  onClickBtn = () => {
    this.state.render === false ?(
      this.setState({
        render: true
      })
    ):(
      this.setState({
        render: false
      })
    )
    
  }
  render(){
    return(
      <>
        {this.state.render === false ? (
          <Contacts 
            contactList ={this.state.contactList} 
            onDelete={this.deleteContact}
          />
        ):(
          <Form 
            onAdd={this.addContact}
            render ={this.onClickBtn}
          />
        ) }
        <button className='addBtn' onClick={this.onClickBtn}> 
          {this.state.render === false ? ('Add contact'): ('Cancel')}
        </button>
      </>
    ) 
  }
}
export default App;