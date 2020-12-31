import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graph1Component } from './graph1/graph1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graph1Component,
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
     ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graph1Component,
    ],
    providers: [],
})
export class PagesModule {}