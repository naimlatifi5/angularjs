import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { APP_CONFIG, AppConfigValue } from './dependecy-injection/app.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    { provide: APP_CONFIG, useValue: AppConfigValue }, // this are coming from app.config.ts, we can use this in any component by injecting APP_CONFIG, this is a good way to provide configuration values that can be used across the application
  ],
};
