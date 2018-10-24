import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../../services/github-api.service';

@Component({
  selector: 'ghb-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {

  constructor(
    private githubApi: GithubApiService
  ) { }

  ngOnInit() {

    this.githubApi.getIssues()
      .subscribe(issues => {
        console.log(issues);
      });

  }

}
