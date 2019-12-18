import { interval, Observer, fromEvent, timer } from 'rxjs';

const observer:Observer<number|null> = {
    next: val=>console.log('next', val),
    error: () => null,
    complete: () => console.log('complete')
}

const interval$ = interval(1000);

const ahorita = new Date ();

ahorita.setSeconds(ahorita.getSeconds()+5)

const timer$ = timer(ahorita)

console.log('inicio');
// const subs1 = interval$.subscribe(observer);
timer$.subscribe(observer)
console.log('fin');

//fromEvent (document, 'click').subscribe(()=>subs1.unsubscribe())

