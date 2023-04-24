
// desestructuracion
// asignacion desestructurante

const persona = {
    nombre: 'david',
    edad: 34,
    clave: 'passnew'
}

const {nombre} = persona;
console.log(nombre);

// dentro de las {} debe llevar el nombre del dato a extraer nombre: separado por dos puntos
// el nombre de la nueva const.
// despues del = va el nombre del objeto que vamos a extraer los datos
const {nombre:nombre2} = persona;
console.log(nombre2);

//tambien se puede extraer varios datos del objeto.
//en varias const
const { edad, clave, nombre:nombre3} = persona;
console.log(edad);
console.log(clave);
console.log(nombre3);

//desestruccturacion como argumento.
const retornaPersona = ({nombre, edad}) =>{
    console.log(edad, nombre);
}
retornaPersona(persona);

//si el objeto NO tiene algun dato, se lo podemos asignar en el mismo argumento
// y si el objeto tiene la propiedad, pues la usara. sino usa la que dejamos alli. 
const retornaPersona1 = ({nombre, edad, rango = 'soldadoRazo'}) =>{
    console.log(edad, nombre, rango);
}
retornaPersona1(persona);

//extraer objetos anidados dentro de un objeto.
const objeto1 = () =>{
    return {
        edades: 34,
        vive: 'argentina',
        coordenada: {
            lat: 23,
            lng: 3445
        }
    }
}
console.table(objeto1());
const {edades, vive, coordenada:{lat, lng}} = objeto1();
console.table(edades, vive);
console.table(lat, lng);
