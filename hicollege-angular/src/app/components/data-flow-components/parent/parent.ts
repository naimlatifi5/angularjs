import { Component, signal } from '@angular/core';
import { UsernameFieldComponent } from '../child/usernameField';

@Component({
  selector: 'app-parent',
  imports: [UsernameFieldComponent],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  protected username = signal('Superman'); // bind signal to the child component username
}
