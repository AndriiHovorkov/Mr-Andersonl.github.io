import { useState } from 'react';
import './Form.css';
import {addItem} from '../../store/actions/ListActions'
import { useDispatch} from "react-redux";


function Form({render }) {
    const [thisInput, setInput] = useState({
        name:'',
        surname: '',
        phone: ''
    })

    const dispatch = useDispatch();

    function changeHendler(e) {
        setInput({
            ...thisInput,
            [e.target.name]: e.target.value,
        });
    }
    function onSubmit (e) {
        e.preventDefault();
        dispatch(addItem(thisInput))
        resetForm();
        render();
    }

    function resetForm (e) {
        let newInput = {
            name:'',
            surname: '',
            phone: '',
        }
        setInput(newInput)
    }

       
        return( 
        <form className='form' onSubmit={onSubmit}>
            <input 
                type='text' 
                placeholder='name' 
                name='name' 
                onChange={changeHendler}
                value={thisInput.name}
            />
            <input 
                type='text' 
                placeholder='surname' 
                name='surname' 
                onChange={changeHendler}
                value={thisInput.surname}
            />
            <input 
                type='text' 
                placeholder='phone' 
                name='phone' 
                onChange={changeHendler}
                value={thisInput.phone}
            />
            <button>Save</button>
        </form>
        
        )
}

export default Form;