import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { SubscribableOrPromise, Subscription } from 'rxjs';
import { AuthService } from './auth.service';
import { MainBoardService } from './main-board.service';
import { UmlComponentSave } from '../models/uml-component-save-model';
import { UmlComponent } from '../models/uml-component.model';
import { UmlDiagramSave } from '../models/uml-diagram-save.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService implements OnInit {

  diagrams: UmlDiagramSave[];
  componentsToSave: UmlComponentSave[] = [];
  elementsOuterHTML: string[] = [];
  umlDiagramComponentsList: UmlComponent[] = [];
  itemSubscription: Subscription;
  save: boolean = false;
  override: boolean = true;
  overrideConfirm: boolean = false;
  diagramId: number;
  user: gapi.auth2.GoogleUser;

  ROOT_URL: string = 'http://umldiagrams.us-east-2.elasticbeanstalk.com';

  constructor(private http: HttpClient, private mainBoardService: MainBoardService, private authService: AuthService) { }


  ngOnInit() {
    this.itemSubscription = this.mainBoardService.umlItemChanged
      .subscribe((componentList: UmlComponent[]) => {
        this.umlDiagramComponentsList = componentList;
      }
      );
  }

  loadDiagram(user: gapi.auth2.GoogleUser) {
    const userId = user.getBasicProfile().getId();
    return this.http.get<any>(this.ROOT_URL + '/api/diagrams/search/findByUserId?id=' + userId);
  }

  async saveDiagram(user: gapi.auth2.GoogleUser, name: string) {
    const userId = user.getBasicProfile().getId();
    const userEmail = user.getBasicProfile().getEmail();
    const diagramType = this.mainBoardService.diagramType;
    this.umlDiagramComponentsList = this.mainBoardService.getItems();

    for (let elem of this.umlDiagramComponentsList) {
      this.componentsToSave.push(new UmlComponentSave(elem.name, elem.imgUrl, elem.type, elem.svgGroup.outerHTML));
    }
    const diagramSave = new UmlDiagramSave(userId, userEmail, diagramType, name, JSON.stringify(this.componentsToSave));

    await this.http.get<any>(this.ROOT_URL + '/api/diagrams/search/findByUserIdAndDiagramName?id=' + userId + '&diagramName=' + name)
      .subscribe(
        (data) => this.updateRequest(data.id, diagramSave, name),
        (error) => this.saveRequest(diagramSave)
      );
  }

  deleteDiagram(id: number) {
    this.http.delete(this.ROOT_URL + '/api/diagrams/' + id)
      .subscribe(response => {
        console.log(response);

      })
  }

  saveOnGoogleDrive(svgBlob: Blob) {
    this.user = this.authService.user;
    if (this.user != null) {
      this.http.get('https://www.googleapis.com/drive/v3/about')
        .subscribe(response => {
          console.log(response);
        });
    }
  }

  updateRequest(id, diagramSave, name) {
    if (confirm('Diagram o podanej nazwie: ' + name + ' już istnieje, czy chcesz go nadpisać ?')) {
      this.http.put(this.ROOT_URL + '/api/diagrams/' + this.diagramId, diagramSave)
        .subscribe(response => {
          console.log(response);

        });
      this.componentsToSave.splice(0, this.componentsToSave.length);
    }

  }

  saveRequest(diagramSave) {
    this.http.post(this.ROOT_URL + '/api/diagrams', diagramSave)
      .subscribe(response => {
        console.log(response);
      });
    this.componentsToSave.splice(0, this.componentsToSave.length);

  }
}
