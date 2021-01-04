import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graph1Component } from './graph1/graph1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';

const ROUTES: Routes = [
    { 
        path : '',
        component: PagesComponent,
        children: [
            { path : 'dashboard', component: DashboardComponent},
            { path : 'progress', component: ProgressComponent},
            { path : 'graph1', component: Graph1Component},
            { path : 'promises', component: PromisesComponent},
            { path : 'account-settings', component: AccountSettingsComponent},
            { path : '', redirectTo: '/dashboard', pathMatch: 'full'},
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(ROUTES);