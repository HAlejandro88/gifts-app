import React,{ useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = ({ defaultCategorie = [] }) => {
    
    const [categories, setCategories] = useState(defaultCategorie);

    /* const [categories, setCategories] = useState(['Dragon Ball']); */


    return (
        <>
            <h2>GifexpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>

            <ol>
                {
                    categories.map(categoria => <GifGrid key={ categoria } category={ categoria } />)
                }
            </ol>
        </>
    )
}

export default GifExpertApp
