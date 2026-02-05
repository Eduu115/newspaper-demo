import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; //Para ngFor
import { RouterLink } from '@angular/router';
import { NewsService, Noticia } from '../../services/news';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  private newsService = inject(NewsService);
  listaNoticias: Noticia[] = [];

  constructor() {
    this.listaNoticias = this.newsService.getAllNoticias();

  }
}