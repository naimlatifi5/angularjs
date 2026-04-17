import { Component } from '@angular/core';

@Component({
  // decorator used by Angular to define a component
  selector: 'user-profile',
  template: `
    <h1>User profile</h1>
    <p>This is the user profile page</p>
  `, // HTML template that defines the view for the component
  styles: `
    h1 {
      color: blue;
    } // CSS styles specific to this component
  `,
})
export class UserProfileComponent {
  //A TypeScript class with behaviors, such as handling user input or making requests to a server.
}
