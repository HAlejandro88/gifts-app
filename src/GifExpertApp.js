import React,{ useState } from 'react';
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Drafon Ball']);

    /* const handleAdd = () => {
        setCategories([...categories, 'One Peace'])
    } */


    return (
        <>
            <h2>GifexpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>

            

            <ol>
                {
                    categories.map(categoria => <li key={categoria}>{ categoria }</li>)
                }
            </ol>
        </>
    )
}

export default GifExpertApp
