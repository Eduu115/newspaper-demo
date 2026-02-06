import { Routes } from '@angular/router';
import { Home } from './vistas/home/home';
import { Login } from './vistas/login/login';
import { Register } from './vistas/register/register';
import { DetallesNoticia } from './vistas/detalles-noticia/detalles-noticia';
import { Categoria } from './vistas/categoria/categoria';
import { Categorias } from './vistas/categorias/categorias';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'noticia/:id', component: DetallesNoticia },
  { path: 'categoria/:categoria', component: Categoria },
  { path: 'categorias', component: Categorias },
  { path: '**', redirectTo: 'home' }
];