import { Component, Inject, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  router = inject(Router)

  usersrv = inject(UserService)

  logoff() {
    localStorage.removeItem('logindata');
    this.router.navigateByUrl('/login')
  }

}
