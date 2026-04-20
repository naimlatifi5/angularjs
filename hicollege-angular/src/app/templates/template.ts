import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-template',
  imports: [FormsModule, NgClass], // FormsModule is imported to use ngModel for two-way data binding in the template
  templateUrl: './template.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent {
  theme = 'dark';
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  imageAlt: string = 'Placeholder Image';
  imageTitle: string = 'This is a placeholder image';
  firstName: string = 'Superman';
  disabled: boolean = true;
  message: string = '';
  isDisabled: boolean = true;
  isHighlighted: boolean = true;

  onClick() {
    this.message = 'Button clicked!';
  }

  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }

  updateField(event: KeyboardEvent) {
    console.log('Updating fields...');
    console.log('User pressed: ', event.key);
  }

  handleOnEnter() {
    alert('You pressed the enter key!');
  }
}
