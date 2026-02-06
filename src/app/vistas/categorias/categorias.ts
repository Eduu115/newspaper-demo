import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NewsService } from '../../services/news';
import { Breadcrumb } from '../../components/breadcrumb/breadcrumb';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule, RouterLink, Breadcrumb],
  templateUrl: './categorias.html',
  styleUrl: './categorias.css'
})
export class Categorias {
  private newsService = inject(NewsService);

  categorias: string[] = [];

  constructor() {
    const todas = this.newsService.getAllNoticias().map(n => n.categoria);
    this.categorias = Array.from(new Set(todas)).sort();
  }
}

