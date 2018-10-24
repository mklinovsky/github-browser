import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { GithubApiService } from '../../services/github-api.service';
import { from } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authToken: string;

  constructor(
    private afAuth: AngularFireAuth,
    private githubApi: GithubApiService
  ) { }

  login() {
    const provider = new auth.GithubAuthProvider();
    provider.addScope('repo');

    const signInPromise = this.afAuth.auth.signInWithPopup(provider);
    const signIn$ = from(signInPromise);
    const login$ = signIn$.pipe(
      switchMap(signInResult => {
        const credential: any = signInResult.credential;
        this.authToken = credential.accessToken;
        this.storeAuthToken(credential.accessToken);

        return this.githubApi.getCurrentUser();
      }),
      tap(user => {
        sessionStorage.setItem('userData', JSON.stringify(user));
      })
    );

    return login$;
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
    if (this.authToken) {
      return this.authToken;
    }

    this.authToken = sessionStorage.getItem('authToken');
    return this.authToken;
  }

  getUser() {
    const user = sessionStorage.getItem('userData');
    return JSON.parse(user);
  }

  private storeAuthToken(token: string) {
    sessionStorage.setItem('authToken', token);
  }

  private deleteAuthToken() {
    this.authToken = '';
    sessionStorage.removeItem('authToken');
  }

  private deleteUserData() {
    sessionStorage.removeItem('userData');
  }
}
