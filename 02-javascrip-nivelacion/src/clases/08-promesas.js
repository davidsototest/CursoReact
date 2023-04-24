
import { getHeroeById2 } from "./clases/06-buscarEnArray";

//resolve: es lo que debe ejecutarse cuando todo va bien
//reject: si sale mal.
// 3000 son los milisegundos que debe esperar la promesa. 3 seg
const promesa = new Promise( (resolve, reject) => {
    const heroe = getHeroeById2(2);
    resolve(heroe);
    
    // setTimeout( () => {
    //     resolver();
    }, 3000 )  ;


promesa.then( (heroe) => {
    console.log(heroe)
}) 
.catch( error => console.warn( error ));