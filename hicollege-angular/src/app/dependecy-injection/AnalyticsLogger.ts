import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' }) // This makes the service available application-wide
export class AnalyticsLogger {
  trackEvent(category: string, value: string) {
    console.log('Analytics event logged:', {
      category,
      value,
      timestamp: new Date().toISOString(),
    });
  }
}

// Example of another service that could be injected
@Injectable({ providedIn: 'root' }) // providers tell angular how to create instances of a service, and where to inject them, hower to scope the services to a specific module/compoennt we add providers to that component
export class AuthService {
  isAuthenticated(): boolean {
    return true;
  }
}
