import { of, Observer } from 'rxjs';
import { map } from 'rxjs/operators';

const observer:Observer<any>={
    next: valor=> console.log('next:',valor),
    error: error=>console.warn('error', error), 
    complete: ()=>console.log('Complete!')
}
//const obs$ = of([1,2],{a:1, b:2},function(){},true);
const obs$ = of(...[1,2,3,4,5,6,7,8,9,10]).pipe(map(x => x * 5))

obs$.subscribe(observer)

