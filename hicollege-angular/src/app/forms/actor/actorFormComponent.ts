import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export class Actor {
  constructor(
    public id: number,
    public name: string,
    public skill: string,
    public studio?: string,
  ) {}
}

@Component({
  selector: 'app-actor-form',
  imports: [FormsModule],
  templateUrl: './actor.html',
  styleUrl: './actor.css',
})

// Template driven form - the form is defined in the template and we use ngModel to bind the form controls to the template.
// This is useful when we want to have a simple form and we don't need to have a lot of control over the form and its validation
export class ActorFormComponent {
  skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];
  model = new Actor(18, 'Tom Cruise', this.skills[3], 'CW Productions');
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
  newActor() {
    this.model = new Actor(42, '', '');
  }
}
