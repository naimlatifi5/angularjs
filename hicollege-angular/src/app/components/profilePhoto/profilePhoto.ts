import { Component, inject } from '@angular/core';
import { SharedSignalService } from '../../dependecy-injection/ShareSignalService';
@Component({
  selector: 'profile-photo',
  templateUrl: './profile-photo.component.html',
  styleUrls: ['./profile-photo.component.css'],
})
export class ProfilePhotoComponent {
  countSignal = inject(SharedSignalService);
} // this shoulde be included when creating the component using Angular CLI, but it is not included when creating the component manually.
