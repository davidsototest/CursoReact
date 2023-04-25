

import React, { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

     const [images, setImages] = useState([]);
     const [isLoading, setIsLoading] = useState(true);

    const getImages = async () =>{
      const newImages = await getGifs(category);
      setImages(newImages);
      setIsLoading(false);
    }
        
    //el useEffect es para que se ejecute una sola vez
    //es un hook que 
    useEffect( () => {
        getImages();  
    }, [] );


  return {
    images: images,
    isLoading: isLoading 
  }
}
