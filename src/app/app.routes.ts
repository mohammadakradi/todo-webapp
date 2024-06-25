import { Routes } from '@angular/router';
import { IntroComponent } from './pages/intro/intro.component';
import { IndexComponent } from './pages/index/index.component';

export const routes: Routes = [
    {
        path: 'intro',
        component: IntroComponent
    },
    {
        path: 'index',
        component: IndexComponent
    },
    // {
    //     path: 'todo-list',
    //     loadChildren: () => import('./pages/todo-list/todo-list.module').then((m) => m.TodoListModule)
    // },
    // {
    //     path: 'dashboard',
    //     loadChildren: () => import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule)
    // },
    {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
    }
];
