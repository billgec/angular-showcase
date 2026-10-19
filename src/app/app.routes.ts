import { Routes } from '@angular/router';

import { Shell } from './layout/shell/shell';
import { HomePage } from './pages/home-page';
import { NotFoundPage } from './pages/not-found-page';
import { showcasePages } from './showcase/pages';

export const routes: Routes = [
  {
    path: '',
    component: Shell,
    children: [
      { path: '', pathMatch: 'full', component: HomePage, title: 'Angular Showcase' },
      ...showcasePages.map(({ path, label, loadComponent }) => ({
        path,
        loadComponent,
        title: `${label} · Angular Showcase`,
      })),
      { path: '**', component: NotFoundPage, title: 'Seite nicht gefunden · Angular Showcase' },
    ],
  },
];
