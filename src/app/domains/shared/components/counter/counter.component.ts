import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration = 0;
  @Input({required: true}) message = '';

  //se ejecuta primero, no async, antes de render
  constructor(){
    console.log('constructor');
    console.log('_'.repeat(10));
  }

  //antes y durante el render, async
  ngOnchanges(changes: SimpleChanges){
    console.log('ngOnchanges');
    console.log('_'.repeat(10));
    console.log(changes);
  }

}
