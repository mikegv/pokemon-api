import React from 'react';
import './form.css'
import useForm from '../../hooks/useForm';

const Form = ({fetchData}) => {

    const { value, formIsValid, handleChange, handleSubmit } = useForm()

    return (
        <form onSubmit={(e)=>handleSubmit(e, fetchData)}>
            <input type='text' placeholder='Enter A Pokemon...' onChange={handleChange} value={value} />
            <br />
            <button type='submit' disabled={!formIsValid}>Submit</button>
        </form>
    );
};

export default Form;