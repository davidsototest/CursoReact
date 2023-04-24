
const persona = {
    nombre: 'david',
    apellido: 'soto',
    edad: 34,
    direccion:{
        una: 'mandula',
        longitud: 34.34534,
    }
}
persona.nombre='mandula';

console.table(persona);

// crear una copia de un obgeto: con ...

const persona2 = {...persona};
persona2.nombre='manduco';
console.log(persona2);