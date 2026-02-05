import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  imports: [],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.css',
})
export class Breadcrumb {
  @Input() categoria: string = '';
  @Input() titulo: string = '';
}
