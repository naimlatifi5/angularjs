import { Routes } from '@angular/router';
// When generating with angular CLI
import HelloWorld from './components/hello-world/hello-world';
import { Components } from './components/components';
import { TemplateComponent } from './templates/template';
import { DirectiveComponent } from './directives/directive-component/directive-component';
import { DependencyInjectionComponent } from './dependecy-injection/DependencyInjection';
import { DataBinding } from './data-binding/data-binding';

export const routes: Routes = [
  {
    path: '',
    component: Components,
    title: 'Components',
  },
  {
    path: 'template',
    component: TemplateComponent,
    title: 'Template',
  },
  {
    path: 'data-binding',
    component: DataBinding,
    title: 'Data binding',
  },
  {
    path: 'directives',
    component: DirectiveComponent,
    title: 'Directives',
  },
  {
    path: 'services',
    component: HelloWorld,
    title: 'Services',
  },
  {
    path: 'dependency-injection',
    component: DependencyInjectionComponent,
    title: 'Dependency Injection',
  },
  {
    path: 'forms',
    component: HelloWorld,
    title: 'Forms',
  },
  {
    path: 'signals',
    component: HelloWorld,
    title: 'Signals',
  },
  {
    path: 'home',
    component: HelloWorld,
    title: 'Home Page',
  },
  // Simple route example with redirect
  {
    path: 'articles',
    redirectTo: '/blog',
  },
  {
    path: 'user/:id/',
    component: HelloWorld,
    title: 'User Profile',
  }, // valid route params names must start with a letter and can contain letters, numbers, and underscores, hyphens.
  // Nested routes example
  {
    path: 'product/:id',
    component: HelloWorld,
    children: [
      {
        path: 'info',
        component: HelloWorld,
      },
      {
        path: 'reviews',
        component: HelloWorld,
      },
    ],
  },

  {
    path: 'hello-world',
    loadComponent: () => import('./components/hello-world/hello-world'),
  },
];
