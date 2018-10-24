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

  getUser(login: string) {
    const url = `${this.apiEndpoint}/users/${login}`;
    return this.http.get(url);
  }

  getCurrentUser() {
    const url = `${this.apiEndpoint}/user`;
    return this.http.get(url);
  }

  getFollowers(login: string, pageIndex: number, pageSize: number) {
    const paging = this.getPageQueryString(pageIndex, pageSize);
    const url = `${this.apiEndpoint}/users/${login}/followers?` + paging;
    return this.http.get(url);
  }

  getRepositiories(login: string, pageIndex: number, pageSize: number) {
    const paging = this.getPageQueryString(pageIndex, pageSize);
    const url = `${this.apiEndpoint}/users/${login}/repos?` + paging;
    return this.http.get(url);
  }

  getIssues() {
    const url = `${this.apiEndpoint}/issues?filter=all`;
    return this.http.get(url);
  }

  getOrganizationIssues(org: string) {
    const url = `${this.apiEndpoint}/orgs/${encodeURIComponent(org)}/issues`;
    return this.http.get(url);
  }

  private createQueryStringFromRequest(request: UserSearchRequest): string {
    const sortOrder = `&sort=${request.sort}&order=${request.order}`;
    const paging = this.getPageQueryString(request.page, request.pageSize);

    return `q=location:${encodeURIComponent(request.location)}` + sortOrder + '&' + paging;
  }

  private getPageQueryString(pageIndex: number, pageSize: number) {
    return `page=${pageIndex + 1}&per_page=${pageSize}`;
  }
}
