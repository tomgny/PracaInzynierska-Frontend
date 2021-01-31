import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../../services/data-storage.service';
import { DiagramMenuService } from '../../services/diagram-menu.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-save',
  templateUrl: './auth-save.component.html',
  styleUrls: ['./auth-save.component.css']
})
export class AuthSaveComponent implements OnInit {

  constructor(private diagramMenuService: DiagramMenuService, private authService: AuthService, private dataStorageService: DataStorageService) { }

  private userSubscribe: Subscription;
  public user: gapi.auth2.GoogleUser;
  public name: 'Nazwa diagramu';

  ngOnInit() {
    this.user = this.authService.user;
    this.userSubscribe = this.authService.userSubject
      .subscribe((user) => {
        this.user = user
      });
  }

  onClose() {
    this.diagramMenuService.toggleSaveMenu();
  }

  onSave() {
    this.dataStorageService.saveDiagram(this.user, this.name);
  }

  onLogin() {
    this.authService.authenticate();
  }
}
