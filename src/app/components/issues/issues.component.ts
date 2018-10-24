import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../../services/github-api.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ghb-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {
  issues: any;
  organization: FormControl;
  orgButtonEnabled: boolean;

  constructor(
    private githubApi: GithubApiService
  ) { }

  ngOnInit() {
    this.organization = new FormControl('');
    this.organization.valueChanges
      .subscribe(value => {
        this.orgButtonEnabled = value;
      })

    this.getIssues();
  }

  onMyAndMemberClick() {
    this.getIssues();
  }

  onOrgClick() {
    this.issues = [];
    this.githubApi.getOrganizationIssues(this.organization.value)
      .subscribe(result => {
        this.issues = result;
      })
  }

  private getIssues() {
    this.issues = [];
    this.githubApi.getIssues()
      .subscribe(result => {
        this.issues = result;
      });
  }
}
