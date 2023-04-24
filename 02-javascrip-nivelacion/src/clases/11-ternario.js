

const activo = true;

let mensaje = '';

if (activo){
    mensaje = 'Activo';
} else {
    mensaje= 'Inactivo';
}
console.log(mensaje);

//todo lo de arriba es igua a esto:
// (activo): condicional, puede tener ===
// 'Activo' es el resultado o codigo si es true la condicion.
// des pues del : viene lo que deseamos que haga si es false la considicion. Inactivo. 
const mensaje1 = (activo) ? 'Activo' : 'Inactivo';

//esta se usa cuando necesitamos mostrar algo si esta activo o true
//forma corta del if
const mensaje2 = activo && 'Activo';

console.log(mensaje1);
console.log(mensaje2);