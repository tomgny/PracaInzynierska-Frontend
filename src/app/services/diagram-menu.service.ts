import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiagramMenuService {

  isVisible = false;
  showSaveMenu = false;
  showLoadMenu = false;

  showSaveSubject: Subject<boolean> = new Subject<boolean>();
  showLoadSubject: Subject<boolean> = new Subject<boolean>();
  showMenu: Subject<boolean> = new Subject<boolean>();

  constructor() {
  }

  toggleVisibility() {
    this.showMenu.next(this.isVisible = !this.isVisible);
  }

  toggleSaveMenu() {
    this.showSaveSubject.next(this.showSaveMenu = !this.showSaveMenu);
  }

  toggleLoadMenu() {
    this.showLoadSubject.next(this.showLoadMenu = !this.showLoadMenu);
  }

}
