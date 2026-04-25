import { Component } from '@angular/core';
import { ProfilePhotoComponent } from '../profilePhoto/profilePhoto';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  imports: [ProfilePhotoComponent],
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfile {} // this shoulde be included when creating the component using Angular CLI, but it is not included when creating the component manually.
