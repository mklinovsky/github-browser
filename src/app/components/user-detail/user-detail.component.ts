import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GithubApiService } from '../../services/github-api.service';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'ghb-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: any;
  followersResult: any;
  followersTitle: string;
  reposResult: any;
  isCurrentUser: boolean;
  loadingFollowers: boolean;
  loadingRepos: boolean;

  constructor(
    private route: ActivatedRoute,
    private githubApi: GithubApiService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.githubApi.getUser(params.get('id')))
    ).subscribe((result: any) => {
      this.user = result;
      this.isCurrentUser = this.isLoggedInUser(result.login);
      this.getFollowers(result.login, 0, 5);
      this.getRepos(result.login, 0, 5);
    });
  }

  onFollowersPageEvent(page) {
    this.getFollowers(this.user.login, page.pageIndex, page.pageSize);
  }

  onReposPageEvent(page) {
    this.getRepos(this.user.login, page.pageIndex, page.pageSize);
  }

  private getFollowers(login: string, pageIndex: number, pageSize: number) {
    this.loadingFollowers = true;
    this.githubApi.getFollowers(login, pageIndex, pageSize)
      .subscribe(result => {
        this.loadingFollowers = false;
        this.followersResult = result;
        this.followersTitle = `Followers (${this.user.followers})`;
      });
  }

  private getRepos(login: string, pageIndex: number, pageSize: number) {
    this.loadingRepos = true;
    this.githubApi.getRepositiories(login, pageIndex, pageSize)
      .subscribe(result => {
        this.loadingRepos = false;
        this.reposResult = result;
      });
  }

  private isLoggedInUser(login: string): boolean {
    const loggedUser = this.auth.getUser();
    return loggedUser && loggedUser.login === login;
  }
}
