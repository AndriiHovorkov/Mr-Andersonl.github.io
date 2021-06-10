import { Component } from 'react';
import './Form.css';

class Form extends Component {
    state = {
        name:'',
        surname: '',
        phone: '',
    }

    changeHendler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name,this.state.surname,this.state.phone);
        this.resetForm();
        this.props.render();
    }

    resetForm() {
        this.setState({
            name:'',
            surname: '',
            phone: '',
        })
    }
    render(){
        return( 
        <form className='form' onSubmit={this.onSubmit}>
            <input 
                type='text' 
                placeholder='name' 
                name='name' 
                onChange={this.changeHendler}
                value={this.state.name}
            />
            <input 
                type='text' 
                placeholder='surname' 
                name='surname' 
                onChange={this.changeHendler}
                value={this.state.surname}
            />
            <input 
                type='text' 
                placeholder='phone' 
                name='phone' 
                onChange={this.changeHendler}
                value={this.state.phone}
            />
            <button>Save</button>
        </form>
        
        )
    }
}

export default Form;