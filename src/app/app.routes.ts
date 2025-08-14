import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layouts/app/app.component').then((m) => m.AppComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/hero/hero.component').then((m) => m.HeroComponent),
        pathMatch: 'full',
      },
    ],
  },
];
