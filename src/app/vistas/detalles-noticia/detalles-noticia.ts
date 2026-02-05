import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Breadcrumb } from "../../components/breadcrumb/breadcrumb";
import { Collapse } from "../../components/collapse/collapse";

@Component({
  selector: 'app-detalles-noticia',
  standalone: true,
  imports: [RouterLink, Breadcrumb, Collapse],
  templateUrl: './detalles-noticia.html',
  styleUrl: './detalles-noticia.css',
})
export class DetallesNoticia {

}
