import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'ghb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userName: string;

  constructor(
    private auth: AuthService,
    private cd: ChangeDetectorRef,
    private router: Router
  ) { }

  login() {
    this.auth.login()
      .subscribe((user: any) => {
        if (user) {
          this.userName = user.name || user.email || user.login;
          this.cd.detectChanges();
        }
      });
  }

  logout() {
    this.auth.logout();
  }

  userLoggedIn() {
    return this.auth.isLoggedIn();
  }

  getUserName() {
    const user = this.auth.getUser();
    if (user) {
      return user.name || user.email || user.login;
    }
  }

  handleUserProfileClick() {
    const login = this.auth.getUser().login;
    if (login) {
      this.router.navigate([`/user/${login}`]);
    }
  }
}
