import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { StatsComponent } from './modules/stats/stats.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'statistics',
      },
      {
        path: 'statistics',
        data: {
          title: 'stats',
        },
        component: StatsComponent,
      },
    ],
  },
];
