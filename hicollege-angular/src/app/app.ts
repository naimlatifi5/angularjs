import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/userProfile';
import {UserProfileComponent as UserProfileComponent2} from './components/userProfile/userProfile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfileComponent,UserProfileComponent2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hicollage-angular');
}
