import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/userProfile';
import { UserProfileComponent as UserProfileComponent2 } from './components/userProfile/userProfile';
import { TemplateComponent } from './templates/template';
import { Counter } from './components/counter/counter';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfileComponent, UserProfileComponent2, TemplateComponent, Counter],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('hicollege-angular');
  initialValue = 0;
}
