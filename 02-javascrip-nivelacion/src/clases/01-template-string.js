
//template string

const nombre = 'david';
const apellido = 'soto';

const nombreCompleto = nombre + ' ' + apellido;

console.log(nombreCompleto);

// $ { } lo que va dentro de las llaves es codigo JavaScrip
const nombre1 = ` ${nombre}${apellido}`;

// ooo
const nombre2 = `
${nombre}
${apellido}
${1+1}
`;

console.log(nombre2);
console.log(nombre1);

function getSaludo(){
    return 'hola mundo2';
};

console.log(`este es un texto:  ${getSaludo()} `);