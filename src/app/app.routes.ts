import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('../app/pages/home/home.component').then(c => c.HomeComponent)
    },
    {
        path: 'intro',
        loadComponent: () => import('../app/pages/intro/intro.component').then(c => c.IntroComponent)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
