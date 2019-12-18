import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators' ;

// range(1,10).pipe(
//     map<number,string>( val=> (val*10).toString())
// ).subscribe(console.log)

const keyup$ = fromEvent<KeyboardEvent>(document,'keyup');

const keyupCode$ = keyup$.pipe(
    map(({code}) => code)
)

const keyupPluck$ = keyup$.pipe(
    pluck(...['target','baseURI'])
)

const keyuoMapTo$ = keyup$.pipe(
    mapTo('tecla pesionada')
)

keyup$.subscribe(console.log)
keyupCode$.subscribe(code => console.log('map',code))
keyupPluck$.subscribe(res => console.log('pluck',res))
keyuoMapTo$.subscribe(res => console.log('MapTo', res))