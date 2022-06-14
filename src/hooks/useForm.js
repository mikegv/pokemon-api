import { useState } from "react";
const useForm = () => {
    const [value, setValue] = useState('')
    const formIsValid = value.trim() !== ''
    const handleChange = e => {
        setValue(e.target.value)
    }
    const handleSubmit = (e, callback) => {
        e.preventDefault()
        callback(value)
    }
    return (
        {
           value,
           formIsValid,
           handleChange,
           handleSubmit
        }
    );
};

export default useForm;