import { fromEvent } from 'rxjs';

const src1$ = fromEvent<MouseEvent>(document,'click')

const src2$ = fromEvent<KeyboardEvent>(document,'keyup')

src1$.subscribe(
    //Las don son lo mismo pero la segunda es destructuracion
    // (evento)=>{
    //     console.log(evento.x);
    //     console.log(evento.y);    
    // }
    ({x,y})=>{
      console.log(x,y);

    }
)

src2$.subscribe(
    ({key})=>{
        console.log(key);
        
    }
)