import { Component, model } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrls: ['./counter.css'],
})
export class Counter {
  count = model<number>(0);

  updateCount(value: number) {
    if (value === 0) return;
    this.count.update((currentCount) => currentCount + value);
  }
}
