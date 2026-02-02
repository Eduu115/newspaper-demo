import { Routes } from '@angular/router';
import { Home } from './vistas/home/home';
import { Login } from './vistas/login/login';
import { DetallesNoticia } from './vistas/detalles-noticia/detalles-noticia';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'noticia/:id', component: DetallesNoticia },
    { path: 'login', component: Login },
    { path: '**', redirectTo: '' }
];