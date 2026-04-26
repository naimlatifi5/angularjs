import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { NameEditor } from './name-editor/name-editor';

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule, NameEditor],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})
export class Forms {}
