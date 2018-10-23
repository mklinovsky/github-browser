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
    const url = `${this.apiEndpoint}/search/users?q=location:${encodeURIComponent(location)}`;
    return this.http.get(url);
  }

  getUser(username: string) {
    const url = `${this.apiEndpoint}/users/${username}`;
    return this.http.get(url);
  }
}
