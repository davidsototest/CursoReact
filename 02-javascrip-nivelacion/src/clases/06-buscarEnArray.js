//importaciones

import { heroes } from '../clases/data/heroes';


//funcion con .find que permite iterar sobre un array y extraer un elemento para usarlo. 
const getHeroeById = (id) => {
    return heroes.find( (heroes) => {
        if (heroes.id === id){
            return true;
        } else {
            return false;
        };
    } );
};

// console.log('el heroe es:');
// console.log(getHeroeById(3));




// o tambien de esta manera:
export const getHeroeById2 = (id) => {
    return heroes.find( (heroes) => heroes.id === id );
};

// console.log('el heroe es:');
// console.log(getHeroeById2(2));


//////////////////////////////////////

// hacemos lo mismo pero con el filter, para filtrar todos los que tengan esta caracteristicas
const getHeroesByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner);

// console.log('los heroes filtrados son:');
// console.table(getHeroesByOwner('DC'));

