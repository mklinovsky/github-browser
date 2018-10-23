import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserSearchRequest } from '../models/user-search-request';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  private apiEndpoint = 'https://api.github.com';

  constructor(
    private http: HttpClient
  ) { }

  getUsersByLocation(request: UserSearchRequest) {
    const url = `${this.apiEndpoint}/search/users?${this.createQueryStringFromRequest(request)}`;
    return this.http.get(url);
  }

  getUser(username: string) {
    const url = `${this.apiEndpoint}/users/${username}`;
    return this.http.get(url);
  }

  private createQueryStringFromRequest(request: UserSearchRequest): string {
    const sortOrder = `&sort=${request.sort}&order=${request.order}`;
    const paging = `&page=${request.page}&per_page=${request.pageSize}`;

    return `q=location:${encodeURIComponent(request.location)}` + sortOrder + paging;
  }
}
