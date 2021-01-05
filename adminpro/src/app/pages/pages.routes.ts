import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graph1Component } from './graph1/graph1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const ROUTES: Routes = [
    { 
        path : '',
        component: PagesComponent,
        children: [
            { path : 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
            { path : 'progress', component: ProgressComponent, data: { title: 'Progress' }},
            { path : 'graph1', component: Graph1Component, data: { title: 'Graphs' }},
            { path : 'promises', component: PromisesComponent, data: { title: 'Promises' }},
            { path : 'rxjs', component: RxjsComponent, data: { title: 'RxJs' }},
            { path : 'account-settings', component: AccountSettingsComponent, data: { title: 'Settings' }},
            { path : '', redirectTo: '/dashboard', pathMatch: 'full'},
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(ROUTES);