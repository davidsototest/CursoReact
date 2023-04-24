

// async await


const consultaImagen = async() => {
    
    try {
        
        const apiKey = 'CB0yEYvma4dr72BHCsWBJqq9WNCaB0Yl';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();

        console.log(data);

        const {url} = data.images.original;
        const img = document.createElement('img');
            img.src = url;
            document.body.append(img);

    } catch (error) {
        //manejamos el error. 
        console.error(error);
    }


}

consultaImagen();