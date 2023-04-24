







//desestruccutarion de arreglos...
const personajes = ['uno', 'dos', 'tres'];

//toma el primer elemento
const [goku] = personajes;
console.log(goku);

//dejamos la , y un espacio vacio adelante, asi tomo el segundo elemento
const [ , p2] = personajes;
console.log(p2);

//dejamos 2 , y 2 espacio vacio adelante, asi tomo el tercer elemento
const [ , , p3] = personajes;
console.log(p3);

//con funciones
const retornaArreglo = () =>{
    return ['ABC', 123];
};
const [letras, numeros] = retornaArreglo();
console.table(letras, numeros);

//tarea:
const funciones = (valor) =>{
    return [valor, ()=>{console.log('hola mundo')}];
}
const [arr, dos ] = funciones('david');
// const [ , setNombre] = useState('david');
// setNombre();
console.log(arr);
dos();