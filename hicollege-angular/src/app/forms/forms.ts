import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { NameEditor } from './name-editor/name-editor';
import { ActorFormComponent } from './actor/actorFormComponent';

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule, NameEditor, ActorFormComponent],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})
export class Forms {}
