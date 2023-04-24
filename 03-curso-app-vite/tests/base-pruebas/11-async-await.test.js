import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('test en async await', () => { 
    
    test('getimagen debe retornar url imagen', async() =>{

        const url = await getImagen();
        expect( typeof url).toEqual('string'); 

    })

 })