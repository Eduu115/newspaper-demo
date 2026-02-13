import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Nav } from './components/nav/nav';
import { Toast } from './components/toast/toast';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Header, Footer, Nav, Toast],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  showLayout = true;
}