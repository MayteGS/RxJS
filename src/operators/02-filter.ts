//OPeradores Filter

import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// range(1,10).pipe(
//     filter(val => val % 2 === 1)
// ).subscribe(console.log)

// range (20,30).pipe(
//     filter((val, i) =>{
//         console.log('index',i)
//         return val % 2 === 1 
//     })
// ).subscribe(val => console.log('valor',val))

interface Personaje{
    tipo:string,
    nombre:string
    superpoderes?: string
}

const personajes: Personaje[] = [

    {
        tipo: 'heroe',
        nombre: 'Batman',
        superpoderes:'Es millonario'
    },
    {
        tipo:'heroe',
        nombre:'Robin'
    },
    {
        tipo:'Villano',
        nombre: 'Joker',
        superpoderes:'Odiar la sociedad'


    }
]

// const filter$ = from (personajes)
// filter$.subscribe(console.log)

// from (personajes).pipe(
//     filter (({tipo}) => tipo === 'heroe')
// ).subscribe(console.log)

// from (personajes).pipe(
//     filter (({superpoderes}) => superpoderes === 'Odiar la sociedad')
// ).subscribe(console.log)

const keyup$ = fromEvent<KeyboardEvent>(document,'keyup').pipe(
    map(({code})=> code),
    filter(key => key === "Enter")
)

keyup$.subscribe(console.log)