import { Component, model } from '@angular/core';

@Component({
  selector: 'app-username-field',
  templateUrl: './username-field.component.html',
  styleUrl: './username-field.component.css',
})
export class UsernameFieldComponent {
  username = model('');

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.username.set(value);
  }
}
