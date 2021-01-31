import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public gapiSetup: boolean = false; // marks if the gapi library has been loaded
  public authInstance: gapi.auth2.GoogleAuth;
  public error: string;
  public user: gapi.auth2.GoogleUser;
  public userSubject = new Subject<gapi.auth2.GoogleUser>();

  async ngOnInit() {
    if (await this.checkIfUserAuthenticated()) {
      this.user = this.authInstance.currentUser.get();
    }
  }

  async initGoogleAuth(): Promise<void> {
    const pload = new Promise((resolve) => {
      gapi.load('auth2', resolve);
    });
    return pload.then(async () => {
      await gapi.auth2
        .init({
          client_id: 'TO_REPLACE_CLIENT_ID',
        })
        .then(auth => {
          this.gapiSetup = true;
          this.authInstance = auth;
        });
    });
  }

  async authenticate(): Promise<gapi.auth2.GoogleUser> {
    // Initialize gapi if not done yet
    if (!this.gapiSetup) {
      await this.initGoogleAuth();
    }
    return new Promise(async () => {
      await this.authInstance.signIn().then(
        user => this.user = user,
        error => this.error = error,
      );
      this.userSubject.next(this.user);
      console.log('Użytkownik o adresie email: ' + this.user.getBasicProfile().getEmail() + ' został poprawnie zalogowany.');

    });
  }

  async checkIfUserAuthenticated(): Promise<boolean> {
    // Initialize gapi if not done yet
    if (!this.gapiSetup) {
      await this.initGoogleAuth();
    }
    return this.authInstance.isSignedIn.get();
  }
  async signOut() {
    gapi.auth2.getAuthInstance().signOut().then(
      this.user = null,
      this.userSubject.next(this.user),
      console.log("Użytkownik został poprawnie wylogowany.")

    );
  }
}
