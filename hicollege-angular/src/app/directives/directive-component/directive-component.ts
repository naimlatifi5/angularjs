import { Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Highlight } from '../custom-directive/highlight';
//Component is an app directive that allows us to create reusable UI components in Angular. It provides a way to define the structure, behavior, and appearance of a part of the user interface. By using the @Component decorator, we can specify the selector, template, styles, and other properties for our component, making it easy to manage and reuse across our application.
@Component({
  selector: 'app-directive-component',
  imports: [NgClass, NgStyle, FormsModule, Highlight],
  templateUrl: './directive-component.html',
  styleUrls: ['./directive-component.css'],
})
export class DirectiveComponent {
  currentStyles: Record<string, string> = {};
  canSave: boolean = false;
  isUnchanged: boolean = false;
  isSpecial: boolean = true;
  isAdmin: boolean = true;
  username: string = '';

  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': this.isUnchanged ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px',
    };
  }

  toggleCanSave() {
    this.canSave = !this.canSave;
    this.setCurrentStyles();
  }

  toggleIsUnchanged() {
    this.isUnchanged = !this.isUnchanged;
    this.setCurrentStyles();
  }
  toggleIsSpecial() {
    this.isSpecial = !this.isSpecial;
    this.setCurrentStyles();
  }
}
