import { of, range, asapScheduler } from 'rxjs' 

// let arreglo=[]
// for(let index =0; index < 1001; index++){
//     arreglo.push(index)
// }
// const src$ = of(...arreglo)

const src$ = range (-5,11, asapScheduler);

console.log('inicio')
src$.subscribe(console.log)
console.log('final');
