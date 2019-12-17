//import { fromEvent } from 'rxjs'
//Forma facil, pero vieja
//document.addEventListener('click',()=>console.log('clicked'));
//Forma dificil, pero cool
//const event$ = fromEvent(document, 'click')
//Las dos lineas son lo mismo
//event$.subscribe(informacionEvento=>console.log(informacionEvento))
//event$.subscribe(console.log)
import { Observable, Observer } from 'rxjs';

const observer:Observer<string|Error>={
    next: valor=> console.log('next:',valor),
    error: error=>console.warn('error', error), 
    complete: ()=>console.log('Complete!')
    
}

//const obs$= Observable.create();
const obs$= new Observable<string|Error>(subs=>{
    subs.next('Hola');
    subs.next('Mundo');

    //Forzar un error
    // const a:any = undefined;
    // a.nombre="MG"

    subs.complete();
})

obs$.subscribe(observer)