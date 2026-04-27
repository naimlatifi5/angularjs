import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SharedSignalService {
  readonly count = signal(100);
}
