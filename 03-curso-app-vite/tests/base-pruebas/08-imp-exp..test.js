import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('pruebas en 08', () => { 
    
    test('get heroe regresa un heroe por id', () => {

        const id= 1;
        const hero = getHeroeById(id);
        console.table(hero);

        expect (hero).toEqual({id: 1, name: 'Batman', owner: 'DC'});

    });

    test('get heroe regresa un undefine', () => {

        const id= 100;
        const hero = getHeroeById(id);
        //console.table(hero);

        expect (hero).toEqual(undefined);

    });

 });

 describe('tarea', () => { 
    
    test('retorna los heroes de DC', () => {

        const owner = 'DC';

        const arrayHeroes = getHeroesByOwner(owner);

        expect(arrayHeroes.length).toBe(3);
        //aqui importamos en objeto o array que contiene la data
        // y lo comparamos directamente. asi nos aseguramos que 
        // si los datos cambian, no devemos cambiar nosotoros. 
        expect(arrayHeroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));

    });

 });