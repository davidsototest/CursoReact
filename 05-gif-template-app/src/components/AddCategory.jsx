import { useState } from "react"


export const AddCategory = ( {onNewCategory} ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) =>{
        setInputValue(target.value);
    }


    const onSubmit=(event) =>{
        //previene que no actualice la web al dar enter
        event.preventDefault();
        // el .trim() permite quitar las espacios en blanco.
        //este if permite no avanzar si el input esta vacio. 
        if(inputValue.trim().length <=1) return;

        console.log(inputValue);
        //traigo la funcion setCategoria de gifExpertApp
        // y le envio el nuevo array con las categorias que ya tiene
        //mas el nuevo dato que tenemos en el input. 
        onNewCategory(inputValue.trim());

        //limpiamos el input
        setInputValue('');
    }

  return (

    <form onSubmit={onSubmit}>
        <input
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={onInputChange}
        />
    
    </form>
    
  )
}
