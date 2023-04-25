import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ( {category} ) => {

  const {images, isLoading} = useFetchGifs(category);
    console.log({ isLoading})

   

  return (
    <>
    {/* //en los JSX no se usa CLASS sino CLASSNAME */}
        <h3>{category}</h3>
        {
          //este && and es logico, si Isloanding es true ejecuta el codigo que esta despues
          //si es false ya no ejecuta el codigo que sigue. 
          isLoading && (<h2>Cargando...</h2>)
        }

        <div className="card-grid">
            {
              images.map(image =>(
                <GifItem 
                key={image.id}
                image={image}                
                />
              ))
            }
        </div>
    </>
  )
}
