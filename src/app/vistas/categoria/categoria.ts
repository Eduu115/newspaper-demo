import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { NewsService, Noticia } from '../../services/news';
import { Breadcrumb } from '../../components/breadcrumb/breadcrumb';
import { PremiumToggle } from '../../components/premium-toggle/premium-toggle';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule, RouterLink, Breadcrumb, PremiumToggle],
  templateUrl: './categoria.html',
  styleUrl: './categoria.css'
})
export class Categoria {
  private activatedRoute = inject(ActivatedRoute);
  private newsService = inject(NewsService);

  noticias: Noticia[] = [];
  nombreCategoria: string = '';
  excluirPremium: boolean = false;

  constructor() {
    this.activatedRoute.paramMap.subscribe(params => {
      const categoria = params.get('categoria') ?? '';
      this.nombreCategoria = categoria;
      this.noticias = this.newsService.getNoticiasByCategoria(categoria);
    });
  }

  get noticiasVisibles(): Noticia[] {
    if (!this.excluirPremium) {
      return this.noticias;
    }
    return this.noticias.filter(n => !n.premium);
  }
}

