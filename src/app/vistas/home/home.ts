import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; //Para ngFor
import { RouterLink } from '@angular/router';
import { NewsService, Noticia } from '../../services/news';
import { PremiumToggle } from '../../components/premium-toggle/premium-toggle';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, PremiumToggle],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  private newsService = inject(NewsService);
  listaNoticias: Noticia[] = [];
  excluirPremium: boolean = false;

  constructor() {
    this.listaNoticias = this.newsService.getAllNoticias();
  }

  get noticiasVisibles(): Noticia[] {
    if (!this.excluirPremium) {
      return this.listaNoticias;
    }
    return this.listaNoticias.filter(n => !n.premium);
  }
}