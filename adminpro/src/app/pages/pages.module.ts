import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graph1Component } from './graph1/graph1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { ChartsModule } from 'ng2-charts';

import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { DoughnutGraphComponent } from '../components/doughnut-graph/doughnut-graph.component';
import { PromisesComponent } from './promises/promises.component';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graph1Component,
        IncrementadorComponent,
        DoughnutGraphComponent,
        AccountSettingsComponent,
        PromisesComponent
    ],
    imports: [
        SharedModule,
        FormsModule,
        ChartsModule,
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
