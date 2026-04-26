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
