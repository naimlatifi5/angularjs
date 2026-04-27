import { Component, signal, effect, computed, untracked } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
  // Create a signal with an initial value of 0
  count = signal(0);

  name = signal('John'); // remove readonly to see changes
  lastName = signal('Doe');

  constructor() {
    effect(() => {
      console.log(`The count is now: ${this.count()}`);
    });

    effect((onCleanup) => {
      const api: any = {
        subscribe: () => console.log('Subscribe to any API'),
      };

      const subscription = api.subscribe();

      // This will run before the effect runs again or when destroyed
      onCleanup(() => {
        subscription.unsubscribe();
      });
    });
  }
  // Recalculate only when their dependencies change
  // computed signals are read-only and automatically update when their dependencies change. They are useful for deriving values from other signals without having to manually manage updates.
  fullName = computed(() => `${this.name()} ${this.lastName()}`);

  incrementSignal() {
    this.count.set(this.count() + 1);
  }
  decrementSignal() {
    this.count.set(this.count() - 1);
  }

  updateName(newName: string) {
    this.name.set(newName);
  }
  // This is allowed: updating the value inside the signal
  changeName(newName: string) {
    this.name.set(newName); // ✅ Allowed
  }
  // This is NOT allowed: reassigning the signal property
  setNewSignal() {
    this.name = signal('Superman'); // ❌ Error: Cannot assign to 'name' because it is a read-only property.
  }
}
