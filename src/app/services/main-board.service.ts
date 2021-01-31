import { ElementRef, Injectable, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { HtmlElementService } from 'src/app/services/html-element.service';
import { UmlComponent } from '../models/uml-component.model';

@Injectable({
  providedIn: 'root'
})
export class MainBoardService implements OnInit {

  diagramTypeSubject: Subject<string> = new Subject<string>();
  dropZoneSubscription: Subscription;
  dropZoneElement: HTMLElement;
  diagramType: string;
  constructor(private htmlElementService: HtmlElementService) { }

  ngOnInit() {
  }
  umlItems: UmlComponent[] = [];
  umlItemChanged = new Subject<UmlComponent[]>();

  getItems() {
    return this.umlItems.slice();
  }

  addItem(item: UmlComponent) {
    //console.log("Ilość elementów przed dodaniem: " + this.umlItems.length);
    //console.log("Elementy tablicy prze dodaniem: " + this.umlItems);
    //console.log("=========================================");

    this.umlItems.push(item);
    this.umlItemChanged.next(this.umlItems.slice());

    //console.log("Ilość elementów po dodaniu: " + this.umlItems.length);
    //console.log("Elementy tablicy po dodaniu: " + this.umlItems);
    //console.log("=========================================");
  }

  removeItem(id: number) {
    this.umlItems.splice(id, 1);
    this.umlItemChanged.next(this.umlItems.slice());
  }

  removeAllItems() {
    this.umlItems.splice(0, this.umlItems.length);
    this.umlItemChanged.next(this.umlItems.slice());
    this.dropZoneSubscription = this.htmlElementService.get('dropZone')
      .subscribe((elem: HTMLElement) => {
        this.dropZoneElement = elem;
      });
    const dropZoneElemRef = new ElementRef(this.dropZoneElement);
    const length = dropZoneElemRef.nativeElement.children[0].children.length - 1;
    for (let i = length; i >= 2; i--) {
      dropZoneElemRef.nativeElement.children[0].children[i].remove();
    }
  }

  removeAllItemsFromStorage() {
    localStorage.removeItem(this.diagramType);
  }

  setType(type: string) {
    this.diagramTypeSubject.next(this.diagramType = type);
  }
}
