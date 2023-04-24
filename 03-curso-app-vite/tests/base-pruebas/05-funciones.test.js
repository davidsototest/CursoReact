import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";


describe('pruebas en 05-funciones', () => { 
    
    test('get user debe retornar un objeto', () =>{

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
    };

        const user = getUser();
        
        //toEqual nos sirve para comparar objetos
        expect (testUser).toEqual(user);

    })

    test('getUsuarioActivo debe retornar un objeto', ()=>{

        const nombre = 'Fernando';

        const getUser1 = getUsuarioActivo(nombre);

        expect(getUsuarioActivo(nombre)).toEqual(getUser1);

    })


 })