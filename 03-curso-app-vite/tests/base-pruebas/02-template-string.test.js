import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('pruebas de 02-template-string', () => { 
    
    test('get saludos regresa el hola nombre', () => { 

        const name = 'Fernando';
        const message = getSaludo(name);

        //toBe nos sirve para comparar variables
        expect  (message).toBe(`Hola ${name}`);

     })


 })