import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'ghb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }

  userLoggedIn() {
    return this.auth.isLoggedIn();
  }

  userName() {
    const user = this.auth.getUser();
    if (user) {
      return user.name || user.email || user.login;
    }
  }

  handleUserProfileClick() {

  }
}
