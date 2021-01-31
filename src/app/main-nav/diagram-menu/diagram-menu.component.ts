import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { DiagramMenuService } from 'src/app/services/diagram-menu.service';
import { HtmlElementService } from 'src/app/services/html-element.service';
import { MainBoardService } from '../../services/main-board.service';

@Component({
  selector: 'app-diagram-menu',
  templateUrl: './diagram-menu.component.html',
  styleUrls: ['./diagram-menu.component.css']
})
export class DiagramMenuComponent implements OnInit {

  dropZoneSubscribe: Subscription;
  dropZone: HTMLElement;
  fileName: string;
  panelOpenState = false;
  showSaveAlert = false;
  showLoadAlert = false;
  user: gapi.auth2.GoogleUser;
  userSubscribe: Subscription;

  constructor(private mainBoardService: MainBoardService, private htmlElementService: HtmlElementService, private renderer2: Renderer2, private diagramMenuService: DiagramMenuService, private authService: AuthService, private dataStorageService: DataStorageService) { }
  ngOnInit(): void {
    this.user = this.authService.user;
    this.userSubscribe = this.authService.userSubject
      .subscribe(user => {
        this.user = user;
      })
  }

  clearBoard() {
    this.mainBoardService.removeAllItems();
    this.mainBoardService.removeAllItemsFromStorage();
  }

  loadFromServer() {
    this.showLoadAlert = true;
    this.diagramMenuService.toggleLoadMenu();
  }

  logout() {
    this.authService.signOut();
  }

  saveOnServer() {
    this.showSaveAlert = true;
    this.diagramMenuService.toggleSaveMenu();
  }

  saveOnDisc(type: string) {
    this.htmlElementService.get('dropZone')
      .subscribe((elem: HTMLElement) => {
        this.dropZone = elem
      });
    const elementsToPrint = this.dropZone.children[0].children;
    const svgElem: SVGElement = this.renderer2.createElement('svg');
    const svgContainerGroup: SVGGElement = this.renderer2.createElement('g', svgElem.namespaceURI);
    svgElem.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    this.fileName = this.mainBoardService.diagramType;
    for (let i = 2; i < elementsToPrint.length; i++) {
      svgContainerGroup.appendChild(elementsToPrint[i].cloneNode(true));
    }
    svgElem.appendChild(svgContainerGroup);

    const backgroundRect = this.dropZone.children[0].children[1];
    backgroundRect.setAttribute('width', '0%');
    backgroundRect.setAttribute('height', '0%');
    let svgDimensions = <SVGGraphicsElement>this.dropZone.children[0];
    const xOffset = svgDimensions.getBBox().x;
    const yOffset = svgDimensions.getBBox().y;
    const width = svgDimensions.getBBox().width;
    const height = svgDimensions.getBBox().height;
    const padding = 10;
    backgroundRect.setAttribute('width', '100%');
    backgroundRect.setAttribute('height', '100%');

    svgElem.setAttributeNS(null, 'viewBox', xOffset + ' ' + yOffset + ' ' + (width + padding) + ' ' + (height + padding));

    const svgBlob = new Blob([svgElem.outerHTML], { type: "image/svg+xml;charset=utf-8" });
    const svgUrl = URL.createObjectURL(svgBlob);
    if (type === 'png' || type === 'jpg') {

      let image = new Image();
      image.onload = () => {
        let canvas = document.createElement('canvas');
        canvas.width = width + xOffset;
        canvas.height = height + yOffset;
        let context = canvas.getContext('2d');

        //console.log('xOffset: ' + xOffset);
        //console.log('yOffset: ' + yOffset);
        //console.log('width: ' + width);
        //console.log('height: ' + height);

        //context.drawImage(image, xOffset, yOffset, width , height );
        //context.drawImage(image, xOffset, yOffset, width , height , 0, 0, xOffset, yOffset);
        context.drawImage(image, 0, 0);
        const downloadLink = this.renderer2.createElement('a');
        if (type === 'png') {
          let imageType = canvas.toDataURL();
          downloadLink.href = imageType;
          downloadLink.download = this.fileName + ".png";
        }
        if (type === 'jpg') {
          let imageType = canvas.toDataURL('image/jpg');
          downloadLink.href = imageType;
          downloadLink.download = this.fileName + ".jpg";
        }
        this.dropZone.appendChild(downloadLink);
        downloadLink.click();

        this.dropZone.removeChild(downloadLink);
      };
      image.src = svgUrl;
    }
    else if (type === 'svg') {
      const downloadLink = this.renderer2.createElement('a');
      downloadLink.href = svgUrl;
      downloadLink.download = this.fileName + ".svg";
      this.dropZone.appendChild(downloadLink);
      downloadLink.click();
      this.dropZone.removeChild(downloadLink);

    }

  }
}
