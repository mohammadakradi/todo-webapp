import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('../app/pages/home/home.component').then(c => c.HomeComponent)
    },
    {
        path: 'intro',
        loadComponent: () => import('../app/pages/intro/intro.component').then(c => c.IntroComponent)
    },
    {
        path: 'add-task',
        loadComponent: () => import('../app/pages/add-task/add-task.component').then(c => c.AddTaskComponent)
    },
];
