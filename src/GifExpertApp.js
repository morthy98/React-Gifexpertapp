import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Rick and Morty']);

    // const handleAdd = () => {
    //     // setCategories( [...categories, 'PornHub'] );
    //     setCategories( cats => [...cats, 'PornHub'] );
    // }

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />


            <ol>
                {
                    categories.map( category => (
                       <GifGrid
                        key={ category }
                        category={ category }
                        />
                    ))
                }
            </ol>
        </>

    )

}

export default GifExpertApp;