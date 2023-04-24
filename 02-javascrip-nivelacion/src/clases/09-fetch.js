
//peticiones get de api a un endpoint
const apiKey = 'CB0yEYvma4dr72BHCsWBJqq9WNCaB0Yl';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// esta es una de las maneras, o hay otra que esta abajo
// peticion.then( (resp) => {
//     resp.json().then( (data) => {
//         console.log(data);
//     });
//     // console.log(resp); 
// });

// la otra manera es esta: promesas en cadena. 
peticion
    .then( resp => resp.json())
    .then( ({data}) => {
        const {url} = data.images.original;
        // console.log(url);

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn);