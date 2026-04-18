import { Component } from '@angular/core';
import { ProfilePhotoComponent } from '../profilePhoto/profilePhoto';

@Component({
  selector: 'user-profile-2',
  templateUrl: './user-profile.component.html',
  imports: [ProfilePhotoComponent],
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {} // this shoulde be included when creating the component using Angular CLI, but it is not included when creating the component manually.
