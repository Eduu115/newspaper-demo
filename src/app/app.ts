import { Component, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
// Verifica que esta ruta coincida con tu carpeta components
import { Header } from './components/header/header';
import { filter } from 'rxjs/operators'; // Para filtrar eventos
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'newspaper-demo';

  // Variable para controlar si mostramos el menú
  showLayout = true;

  // Inyectamos el Router
  private router = inject(Router);

  constructor() {
    // Nos suscribimos a los cambios de ruta
    this.router.events.pipe(
      // Solo nos interesa cuando la navegación ha TERMINADO
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {

      // Si la URL es '/login', ocultamos el layout
      // (urlAfterRedirects asegura que leemos la url final)
      const currentUrl = event.urlAfterRedirects;
      this.showLayout = currentUrl !== '/login';

    });
  }
}