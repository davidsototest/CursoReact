// funciones en js

function saludar(nombre){
    return `hola, ${ nombre}`;
};
console.table(saludar('david'));

// funcion flecha gorda o flecha
const objeto1 = () =>{
    return 'no hay nada';

}

// o

const objeto2 = () => ({id:44, name:'carlos'});

//o 

const objeto3= (nombre) => console.log(`el usuario es, ${nombre}`);