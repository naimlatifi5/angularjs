import { Component } from '@angular/core';
import { UserProfile } from './userProfile/userProfile';
import { Counter } from './counter/counter';

@Component({
  // decorator used by Angular to define a component
  selector: 'components',
  imports: [UserProfile, Counter], // array of other components, directives, or pipes that this component depends on
  // HTML template that defines the view for the component
  template: `
    <h1>Hello components</h1>
    <user-profile></user-profile>
    <hr />
    <h2>Counter component</h2>
    <app-counter [(count)]="initialValue"></app-counter>
  `,
  styles: `
    h1 {
      color: blue;
    }
  `,
})
export class Components {
  initialValue = 0;
  //A TypeScript class with behaviors, such as handling user input or making requests to a server.
}
