import { Component, model } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.html',
  styleUrls: ['./counter.css'],
})
export class Counter {
  protected readonly count = model<number>(10); // creates a reactive model object that manage state. Initial value is set to 0.
  hello = 'hello string';
  updateCount(value: number) {
    this.count.update((currentCount) => currentCount + value); // updated is a method provided by the model to update its value based on the current value. It takes a function that receives the current value and returns the new value.
  }
}
