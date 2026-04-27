import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  imports: [ReactiveFormsModule],
  templateUrl: './name-editor.html',
  styleUrl: './name-editor.css',
})

//Reactive forms and the form is defined here in typescript instead of in the template, and we use formControlName to bind the form controls to the template.
// This is useful when we want to have more control over the form and its validation, and when we want to use the form in multiple places in our application.
export class NameEditor {
  private formBuilder = inject(FormBuilder);
  name = new FormControl('');

  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
  });

  updateName() {
    this.name.setValue('Nancy'); //For instace, prefill form with backend data from API
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
