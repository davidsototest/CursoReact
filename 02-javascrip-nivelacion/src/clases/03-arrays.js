// arreglos

const arreglo = [];

arreglo.push(1);

arreglo.push('manuel');

console.table(arreglo);

// agregar de una mejor maner al  array es:

//crea un nuevo arreglo y agrega el 5 y tomas
let arreglo2 = [...arreglo, 5, 'tomas'];

console.table(arreglo2);

//metodo .map lleva dentro una funcion()
//ejemplo
const arreglo3 = arreglo2.map(function(numero){
    return numero * 2;
});

console.table(arreglo3);