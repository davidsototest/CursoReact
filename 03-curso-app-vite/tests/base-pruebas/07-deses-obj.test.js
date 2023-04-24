import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"


describe('pruebas en 07-deses-obj', () => { 
    
    test('DEBE RETORNAR UN STRIN Y UN NUMERO', () => { 
        
        //desestruccturamos para leer cada dato por separado.
        const [ letters, numbers ] = retornaArreglo();

        //comparamos con el toBe
        // para ver si son iguales
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        //las aserciones no se colocan varias con &&, sino bajando de linea
        //y ahora para comparar el tipo de dato
        // el typeof es para saber el tipo de dato, devuelve un string indicando el tipo de dato. 
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        // la otra forma que sirve para los tokens
        // que son letras y texto aleatorios
        // nos sirve el expect.any 
        // indica que espera cualquier string.
        expect(letters).toEqual(expect.any(String));
     })

 })