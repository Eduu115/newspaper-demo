import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UsersService } from '../../services/users';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {

  horaActualizada = new Date();

  constructor(
    public usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit() {
    setInterval(() => {
      this.horaActualizada = new Date();
    }, 1000);
  }

  get session() {
    return this.usersService.getCurrentSession();
  }

  logout(): void {
    this.usersService.clearSession();
    this.router.navigate(['/home']);
  }
}