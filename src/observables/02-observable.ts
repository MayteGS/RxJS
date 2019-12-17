//import { fromEvent } from 'rxjs'
//Forma facil, pero vieja
//document.addEventListener('click',()=>console.log('clicked'));
//Forma dificil, pero cool
//const event$ = fromEvent(document, 'click')
//Las dos lineas son lo mismo
//event$.subscribe(informacionEvento=>console.log(informacionEvento))
//event$.subscribe(console.log)
import { Observable, Observer, observable } from 'rxjs';

const observer:Observer<number|Error>={
    next: valor=> console.log('next:',valor),
    error: error=>console.warn('error', error), 
    complete: ()=>console.log('Complete!')
}

const intervalo$ = new Observable<number>(subs=>{
    let count = 0;
    const interval= setInterval(()=>{
        count++
        subs.next(count)
        console.log(count);
        
    },1000)

    setTimeout(()=>{
        subs.complete()
    },3000)

    return()=>{
        clearInterval(interval),
        console.log('intervalo terminado')
    }
})

const subs1= intervalo$.subscribe(observer)
setTimeout(()=>{
    subs1.unsubscribe()
},6000)

//const obs$= Observable.create();
// const obs$= new Observable<string|Error>(subs=>{
//     subs.next('Hola');
//     subs.next('Mundo');

//     //Forzar un error
//     // const a:any = undefined;
//     // a.nombre="MG"

//     subs.complete();
// })

// obs$.subscribe(observer)