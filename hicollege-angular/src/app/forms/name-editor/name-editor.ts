import { Component, inject } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  imports: [ReactiveFormsModule],
  templateUrl: './name-editor.html',
  styleUrl: './name-editor.css',
})
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
