import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GithubApiService } from '../../services/github-api.service';
import { UserSearchRequest } from '../../models/user-search-request';

@Component({
  selector: 'ghb-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.scss']
})
export class UserIndexComponent implements OnInit {
  searchForm: FormGroup;
  searchResult: any;
  sortOptions = [
    { value: 'repositories.desc', text: 'Most repositories' },
    { value: 'repositories.asc', text: 'Fewest repositories' },
    { value: 'followers.desc', text: 'Most followers' },
    { value: 'followers.asc', text: 'Fewest followers' },
    { value: 'joined.desc', text: 'Most recently joined' },
    { value: 'joined.asc', text: 'Least recently joined' }
  ];

  @ViewChild("searchInput") searchInput: ElementRef;

  constructor(
    private githubApi: GithubApiService
  ) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      location: new FormControl('slovakia'),
      sortOrder: new FormControl('repositories.desc')
    });

    this.searchInput.nativeElement.focus();
  }

  onSubmit() {
    this.getUsers();
  }

  onSortOrderChange() {
    const location = this.searchForm.value.location;
    if (location) {
      this.getUsers();
    }
  }

  onPageEvent(page) {
    this.getUsers(page.pageIndex, page.pageSize);
  }

  private getUsers(page = 0, pageSize = 5) {
    const location = this.searchForm.value.location;
    const sortOrder = this.searchForm.value.sortOrder.split('.');

    this.githubApi.getUsersByLocation(
      new UserSearchRequest(location, sortOrder[0], sortOrder[1], page, pageSize))
      .subscribe(result => {
        this.searchResult = result;
      });
  }
}
