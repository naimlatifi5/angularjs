import { Component, ElementRef, Inject, inject } from '@angular/core';
import { AnalyticsLogger } from './AnalyticsLogger';
import { AuthService } from './AnalyticsLogger'; // we can also inject AuthService if needed
import { APP_CONFIG, AppConfig, AppConfigValue } from './app.config';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection-component.html',
})
export class DependencyInjectionComponent {
  private analytics = inject(AnalyticsLogger); // we inject the AnalyticsLogger service here
  private authService = inject(AuthService); // we can also inject AuthService if needed
  private element = inject(ElementRef); // Example of injecting ElementRef to access the DOM element of the component
  config = inject(APP_CONFIG) as AppConfig; // Example of injecting AppConfigValue to access configuration values, see the providers inside app.config.ts

  navigateToDetail(event: Event) {
    event.preventDefault();
    this.analytics.trackEvent('navigation', '/details');
    console.log('what is isAuthenticated', this.authService.isAuthenticated()); // Example usage of AuthService which can be used in multiple applications
    console.log('what is the api endpoint from config', this.config); // Example usage of AppConfigValue to access configuration values
  }
}
