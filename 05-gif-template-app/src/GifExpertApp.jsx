import { useState } from "react";
import { AddCategory } from "./components/AddCategory";


export const GifExpertApp = () => {
    //usesStatesSnipper nos cre esta seccion de abajo
    //se debe importar.
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (categoria) => {
        //condicional si existe la categoria no l cargue como nueva
        //directamente se saldra. 
        if (categories.includes(categoria)) return; //si la categoria NO existe sigue el codigo de abajo
        //con los ... permite mantener todos las categorias que tiene el array
        // y agregar la nueva: dracula
         setCategories([...categories, categoria]);
    }
    
  return (
    //1. Titulo de la app
    <>
        <h1>GifExpertApp</h1>
        

        {/* 2.  input  */}
        <AddCategory onNewCategory={(value) => onAddCategory(value)}/>

        {/* 3. listado de gif */}
            {/* <button onClick={onAddCategory}>Agregar Catgoria</button> */}
            <ol>
                {
                    categories.map( category => {
                        return <li key={category}> {category} </li>
                    })
                }
            </ol>

    </>
  )
}
