import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { AvanzadoComponent } from '../pages/avanzado/avanzado.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        SharedModule,
        PAGES_ROUTES,
        CommonModule
    ],
    declarations: [
        PagesComponent,
        DashboardComponent,
        AvanzadoComponent,
    ],
    exports: [
        DashboardComponent,
        AvanzadoComponent,
    ],
    providers: [],
})
export class PagesModule { }
