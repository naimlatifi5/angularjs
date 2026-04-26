// app.config.ts
import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config'); // since it is object we need to create an InjectionToken for it, this will be used in the providers array of the component where we want to inject this configuration
export interface AppConfig {
  apiEndpoint: string;
}
export const AppConfigValue: AppConfig = {
  apiEndpoint: 'https://api.example.com',
};
