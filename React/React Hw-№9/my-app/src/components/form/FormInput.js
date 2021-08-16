import { useState } from 'react';
import './FormInput.css';
import {addItem} from '../../store/actions/ListActions'
import { useDispatch} from "react-redux";
import {Formik, Form, Field} from 'formik'

function FormInput() {
    const [thisInput, setInput] = useState({
        name:'',
        surname: '',
        phone: ''
    })

    const dispatch = useDispatch();

    
    function onSubmit (e) {
        dispatch(addItem(thisInput))
    }

    return( 
        <Formik initialValues={thisInput} onSubmit={onSubmit} >
            <Form className='form' >
                <Field type="text" name='name' placeholder='name' />
                <Field type="text" name='surname' placeholder='surname' />
                <Field type="text" name='phone' placeholder='phone' />
                <button type =" submit ">Save</button>
            </Form>
        </Formik>
    
    
    )
}

export default FormInput;