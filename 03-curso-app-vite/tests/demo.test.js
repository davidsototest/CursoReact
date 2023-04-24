
describe('***pruebas en demo***', () => { 

    test('esta prueba no falla', ()=> {
        
        // 1. inicializacion
        const message1 = 'hola mundo';
        
        // 2. estimulo
        // este ,trim() quita los espacios en blanco al principio y al final de un string. 
        const message2 = message1.trim();

        // 3. assercion: observar el comportamiento
        expect (message1).toBe(message2);
    })

 })

