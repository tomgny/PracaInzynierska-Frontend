import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { DiagramMenuService } from 'src/app/services/diagram-menu.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-load',
  templateUrl: './auth-load.component.html',
  styleUrls: ['./auth-load.component.css']
})
export class AuthLoadComponent implements OnInit {

  constructor(private authService: AuthService, private diagramMenuService: DiagramMenuService, private dataStorageService: DataStorageService) { }

  private userSubscribe: Subscription;
  user: gapi.auth2.GoogleUser;
  showLoad = true;

  ngOnInit() {
    this.user = this.authService.user;
    this.userSubscribe = this.authService.userSubject
      .subscribe((user) => {
        this.user = user
      });
  }

  onClose() {
    this.diagramMenuService.toggleLoadMenu();
  }

  async onLoad() {
    if (this.showLoad) {
      this.dataStorageService.loadDiagram(this.user);
      this.showLoad = false;
    }
  }

  async onLogin() {
    this.authService.authenticate();
  }
}
