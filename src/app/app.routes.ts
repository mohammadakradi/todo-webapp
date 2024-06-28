import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('../app/pages/home/home.component').then(c => c.HomeComponent)
    },
    {
        path: 'intro',
        loadComponent: () => import('../app/pages/intro/intro.component').then(c => c.IntroComponent)
    },
    // {
    //     path: 'todo-list',
    //     loadChildren: () => import('./pages/todo-list/todo-list.module').then((m) => m.TodoListModule)
    // },
    // {
    //     path: 'dashboard',
    //     loadChildren: () => import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule)
    // },
    // {
    //     path: '',
    //     redirectTo: 'index',
    //     pathMatch: 'full'
    // }
];
