import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'ghb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName: string;

  constructor(
    private auth: AuthService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

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

  }
}
