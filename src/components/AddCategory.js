import React,{ useState }  from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('')

    const handledinputChanged = (e) => {
        console.log(e, 'handledInputChange');
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(cats => [ inputValue, ...cats]);
            setinputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
        <p>{ inputValue }</p>
            <input type="text" value={ inputValue }  onChange={ handledinputChanged } />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


export default AddCategory
