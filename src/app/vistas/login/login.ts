import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../services/users';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [RouterLink, FormsModule],
    templateUrl: './login.html',
    styleUrl: './login.css'
})
export class Login implements OnInit {
    email = '';
    password = '';
    errorMessage = '';

    constructor(
        private router: Router,
        private usersService: UsersService
    ) { }

    // no sabia que para el angular se usa un fokin constructor por cojones para las clases
    // wow media hora en rojo estuvo
    // antes, simplemente llamaba al metodo en el login() y ya esta, como en javascript normal fok

    ngOnInit(): void {
        this.usersService.setUsersEjemplo();
    }

    login(): void {
        this.errorMessage = '';
        const user = this.usersService.findUserByEmailAndPassword(this.email, this.password);

        if (user) {
            this.usersService.setCurrentSession(user);
            this.router.navigate(['/home']);
        } else {
            this.errorMessage = 'Correo o contraseña incorrectos.';
        }
    }
}
