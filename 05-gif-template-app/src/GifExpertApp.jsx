import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {
    //usesStatesSnipper nos cre esta seccion de abajo
    //se debe importar.
    const [categories, setCategories] = useState(['Gatitos']);

    const onAddCategory = (categoria) => {
        //condicional si existe la categoria no l cargue como nueva
        //directamente se saldra. 
        if (categories.includes(categoria)) return; //si la categoria NO existe sigue el codigo de abajo
        //con los ... permite mantener todos las categorias que tiene el array
        // y agregar la nueva: dracula
         setCategories([categoria, ...categories ]);
    }
    
  return (
    //1. Titulo de la app
    <>
        <h1>GifExpertApp</h1>
        

        {/* 2.  input  */}
        <AddCategory onNewCategory={(value) => onAddCategory(value)}/>

        {/* 3. listado de gif */}
            {/* <button onClick={onAddCategory}>Agregar Catgoria</button> */}
            <div>
                {
                    categories.map( (category) => 
                        <GifGrid 
                            key={category}
                            category={category}
                            />
                    )
                }
            </div>

    </>
  )
}
