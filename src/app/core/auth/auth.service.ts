import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { GithubApiService } from '../../services/github-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private githubApi: GithubApiService
  ) { }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GithubAuthProvider())
      .then(result => {
        const credential: any = result.credential;
        this.storeAuthToken(credential.accessToken);
        this.storeUserData();
      });
  }

  logout() {
    this.deleteAuthToken();
    this.deleteUserData();
    this.afAuth.auth.signOut();
  }

  isLoggedIn(): boolean {
    return !!this.getAuthToken();
  }

  getAuthToken(): string {
    return sessionStorage.getItem('authToken');
  }

  getUser() {
    const user = sessionStorage.getItem('userData');
    return JSON.parse(user);
  }

  private storeUserData() {
    this.githubApi.getCurrentUser()
      .subscribe(result => {
        if (result) {
          sessionStorage.setItem('userData', JSON.stringify(result));
        }
      });
  }

  private storeAuthToken(token: string) {
    sessionStorage.setItem('authToken', token);
  }

  private deleteAuthToken() {
    sessionStorage.removeItem('authToken');
  }

  private deleteUserData() {
    sessionStorage.removeItem('userData');
  }
}
