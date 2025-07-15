import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReactiveDemoComponent } from './reactive-demo/reactive-demo.component';
import { ReacterComponent } from './reacter/reacter.component';

export const routes: Routes = [{
    path  : '',
    redirectTo: 'login',
    pathMatch: 'full'
},{
    path      : 'login',
    component : LoginComponent
},{
    path      : 'reactiveForm',
    component : ReacterComponent
},{
    path      : '',
    component:LayoutComponent,
    children:[{
        path: 'dashboard',
        component:DashboardComponent
    }]
}];
