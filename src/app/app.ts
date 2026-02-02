import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Verifica que esta ruta coincida con tu carpeta components
import { Breadcrumb } from './components/breadcrumb/breadcrumb';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Breadcrumb],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'newspaper-demo';
}