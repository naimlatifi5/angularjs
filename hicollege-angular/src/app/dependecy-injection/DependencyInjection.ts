import { Component, ElementRef, inject } from '@angular/core';
import { AnalyticsLogger } from './AnalyticsLogger';
import { AuthService } from './AnalyticsLogger'; // we can also inject AuthService if needed

@Component({
  selector: 'app-dependency-injection',
  template: `<a href="#" (click)="navigateToDetail($event)">Detail Page</a>`,
})
export class DependencyInjectionComponent {
  private analytics = inject(AnalyticsLogger); // we inject the AnalyticsLogger service here
  private authService = inject(AuthService); // we can also inject AuthService if needed
  private element = inject(ElementRef); // Example of injecting ElementRef to access the DOM element of the component

  navigateToDetail(event: Event) {
    event.preventDefault();
    this.analytics.trackEvent('navigation', '/details');
    console.log(this.authService.isAuthenticated()); // Example usage of AuthService which can be used in multiple applications
  }
}
