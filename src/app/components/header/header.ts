import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UsersService } from '../../services/users';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(
    public usersService: UsersService,
    private router: Router
  ) {}

  get session() {
    return this.usersService.getCurrentSession();
  }

  logout(): void {
    this.usersService.clearSession();
    this.router.navigate(['/home']);
  }
}