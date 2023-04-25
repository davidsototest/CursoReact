
import React from 'react'



export const GifItem = ({image}) => {

  return (
    <div className="card">
        <p>{image.title}</p>
        <img src={image.url} alt={image.title} />
        
    </div>
  )
}
