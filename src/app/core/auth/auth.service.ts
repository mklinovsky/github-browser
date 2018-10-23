import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken = '';
  user: any;

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GithubAuthProvider())
      .then(result => {
        const credential: any = result.credential;
        const userName = result.user.displayName || result.user.email;

        this.storeAuthData(credential.accessToken, userName);
      });
  }

  logout() {
    this.deleteAuthData();
    this.afAuth.auth.signOut();
  }

  isLoggedIn(): boolean {
    return !!this.getAuthToken();
  }

  getAuthToken(): string {
    return sessionStorage.getItem('authToken');
  }

  getUserName() {
    return sessionStorage.getItem('userName');
  }

  private storeAuthData(token: string, userName: string) {
    sessionStorage.setItem('authToken', token);
    sessionStorage.setItem('userName', userName);
  }

  private deleteAuthData() {
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userName');
  }
}
