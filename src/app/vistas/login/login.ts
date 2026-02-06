import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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
    private returnUrl: string | null = null;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private usersService: UsersService
    ) { }

    ngOnInit(): void {
        this.usersService.setUsersEjemplo();
        this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    }

    login(): void {
        this.errorMessage = '';
        const user = this.usersService.findUserByEmailAndPassword(this.email, this.password);

        if (user) {
            this.usersService.setCurrentSession(user);
            // Volver a la noticia (o la URL indicada) si veníamos de ahí; si no, a inicio
            const target = this.returnUrl && this.returnUrl.startsWith('/') ? this.returnUrl : '/home';
            this.router.navigateByUrl(target);
        } else {
            this.errorMessage = 'Correo o contraseña incorrectos.';
        }
    }
}
