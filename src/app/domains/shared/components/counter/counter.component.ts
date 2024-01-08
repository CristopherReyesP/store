import { Component, Input, SimpleChanges, signal } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration = 0;
  @Input({required: true}) message = '';
  counter = signal(0);
  //counterref sirve para guardar la referencia de setinerval y que el setinterval no siga corriendo
  counterRef : number | undefined;

  //se ejecuta primero, no async, antes de render
  constructor(){
    console.log('constructor');
    console.log('_'.repeat(10));
  }

  //antes y durante el render, async
  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnchanges');
    console.log('_'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    if(duration && duration.currentValue != duration.previousValue){
      this.doSomething();
    }
  }
   ngOnInit(){
    //despues del render, solo corre una vez, async, then, subs
    console.log('ngOninit');
    console.log('_'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);

   this.counterRef = window.setInterval(()=>{
      console.log('run interval')
      this.counter.update(statePrev => statePrev + 1);
    }, 1000 )

   }

   ngAfterViewInit(){
    //despues del ngonInit, despues del render, pregunta si los hijos del componente ya fueron renderizados
    console.log('ngAfterviewInit');
    console.log('_'.repeat(10));

   }

   ngOnDestroy(){
    //cuando el componente se destruye
    window.clearInterval(this.counterRef);
    console.log('ngOnDestroy');
    console.log('_'.repeat(10));
   }

   doSomething(){
    console.log('change duration')
   }
}
