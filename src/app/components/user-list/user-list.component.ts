import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { GithubApiService } from '../../services/github-api.service';

@Component({
  selector: 'ghb-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Input() users: any;
  @Input() totalCount: number;
  @Input() title: string;
  @Output() pageEvent = new EventEmitter<any>();

  userDetailsPositionStyle: any;

  pageSizeOptions = [5, 10, 20, 30];
  showUserDetails: boolean;
  userDetailsLoaded: boolean;
  userDetails: any;

  constructor(
    private router: Router,
    private githubApi: GithubApiService
  ) { }

  onPageEvent(page) {
    this.pageEvent.emit(page);
  }

  handleUserClick(login: string) {
    this.router.navigate([`/user/${login}`]);
  }

  onImgMouseEnter(e, user) {
    console.log(e, user);
    this.showUserDetails = true;
    this.userDetailsPositionStyle = {
      top: e.clientY + 10 + 'px',
      left: e.clientX + 10 + 'px'
    };
    this.githubApi.getUser(user.login)
      .subscribe(result => {
        this.userDetails = result;
        this.userDetailsLoaded = true;
      });
  }

  onImgMouseLeave() {
    this.showUserDetails = false;
    this.userDetailsLoaded = false;
  }
}
