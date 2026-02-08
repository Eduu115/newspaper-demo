import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../services/users';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register implements OnInit {
  email = '';
  password = '';
  errorMessage = '';

  constructor(
    private router: Router,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.usersService.setUsersEjemplo();
  }

  register(): void {
    this.errorMessage = '';

    if (this.usersService.existsByEmail(this.email)) {
      this.errorMessage = 'Ya existe un usuario con ese correo.';
      return;
    }

    const user = { email: this.email.trim(), password: this.password };
    this.usersService.addUser(user);
    this.usersService.setCurrentSession(user);
    this.router.navigate(['/home']);
  }
}
