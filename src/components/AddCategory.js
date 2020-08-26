import React,{ useState }  from 'react'

const AddCategory = () => {

    const [inputValue, setinputValue] = useState('Hola')

    const handledinputChanged = (e) => {
        console.log(e);
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e, 'Submit')
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input type="text" value={ inputValue }  onChange={ handledinputChanged } />
        </form>
    )
}



export default AddCategory
