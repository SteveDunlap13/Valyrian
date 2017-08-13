
import { Routes } from '@angular/router'

import { Error404Component } from './errors/404.component'
import { DashboardContainer } from './ui/dashboard/dashboard.container';

export const AppRoutes: Routes = [

    { path: '', component: DashboardContainer, },
    { path: '404', component: Error404Component },
    { path: '**', redirectTo: ''},
]
