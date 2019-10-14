import { Routes, RouterModule, RouterLink } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { AvanzadoComponent } from '../pages/avanzado/avanzado.component';



const pageRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'reporte-avanzado', component: AvanzadoComponent },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild(pageRoutes);

