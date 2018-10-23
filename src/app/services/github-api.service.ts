import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  private apiEndpoint = 'https://api.github.com';

  constructor(
    private http: HttpClient
  ) { }

  getUsersByLocation(location: string) {
    const url = encodeURI(`${this.apiEndpoint}/search/users?q=location:${location}`);
    return this.http.get(url);
  }

  getUser(username: string) {
    const url = encodeURI(`${this.apiEndpoint}/users/${username}`);
    return this.http.get(url);
  }
}
