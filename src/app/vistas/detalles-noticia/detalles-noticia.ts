import { Component, inject } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router'; //activatedRoute para obtener el id de la noticia
import { CommonModule } from '@angular/common'; //para ngFor
import { Breadcrumb } from "../../components/breadcrumb/breadcrumb";
import { Collapse } from "../../components/collapse/collapse";
import { NewsService, Noticia } from '../../services/news';

@Component({
  selector: 'app-detalles-noticia',
  standalone: true,
  imports: [CommonModule, RouterLink, Breadcrumb, Collapse],
  templateUrl: './detalles-noticia.html',
  styleUrl: './detalles-noticia.css',
})
export class DetallesNoticia {
  private activatedRoute = inject(ActivatedRoute);
  private newsService = inject(NewsService);
  noticia: Noticia | undefined;

  constructor() {
    // this.noticia = this.newsService.getNoticiaById();

  }

}
