import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GithubApiService } from '../../services/github-api.service';

@Component({
  selector: 'ghb-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.scss']
})
export class UserIndexComponent implements OnInit {
  searchForm: FormGroup;

  constructor(
    private githubApi: GithubApiService
  ) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      location: new FormControl('')
    });
  }

  onSubmit() {
    const location = this.searchForm.value.location;

    this.githubApi.getUsersByLocation(location)
      .subscribe(result => {
        console.log(result);
      });
  }
}
