import { NgZone, Renderer2, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { AfterViewInit, Component, Injector, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { DiagramMenuService } from 'src/app/services/diagram-menu.service';
import { HtmlElementService } from 'src/app/services/html-element.service';
import { FetchElementsService } from 'src/app/services/fetch-elements.service';
import { MainBoardService } from 'src/app/services/main-board.service';
import { UmlComponentSave } from 'src/app/models/uml-component-save-model';
import { UmlComponent } from 'src/app/models/uml-component.model';
import { UmlDiagramSave } from 'src/app/models/uml-diagram-save.model';


@Component({
  selector: 'app-loaded-table',
  templateUrl: './loaded-table.component.html',
  styleUrls: ['./loaded-table.component.css']
})
export class LoadedTableComponent implements OnInit, AfterViewInit {


  constructor(private dataStorageService: DataStorageService, private diagramMenuService: DiagramMenuService, private router: Router, private route: ActivatedRoute, private injector: Injector, private mainBoardService: MainBoardService, private renderer2: Renderer2, private fetchElementsService: FetchElementsService, private htmlElementService: HtmlElementService) { }

  @ViewChild('loadedTable', { static: false }) loadedTable: ElementRef;
  @Input() loggedUser: gapi.auth2.GoogleUser;
  table;
  umlComponentListSusbscription: Subscription;
  dropZone: HTMLElement;
  umlDiagram;

  ngAfterViewInit() {
    this.dataStorageService.loadDiagram(this.loggedUser).subscribe(
      response => {
        this.table = response._embedded.diagrams as UmlDiagramSave[];
      }
    );
    this.umlComponentListSusbscription = this.htmlElementService.get('dropZone')
      .subscribe((elem: HTMLElement) => {
        this.dropZone = elem;
      })
  }

  loadFromServer(diagram) {
    const loadedDiagram = new UmlDiagramSave(diagram.userId, diagram.userEmail, diagram.diagramType, diagram.diagramName, JSON.parse(diagram.diagramElements));
    this.mainBoardService.removeAllItems();
    this.diagramMenuService.toggleLoadMenu();
    this.mainBoardService.setType(diagram.diagramType);
    this.router.navigate(['../diagram', diagram.diagramType], { relativeTo: this.route });
    const newUmlElements: UmlComponentSave[] = JSON.parse(diagram.diagramElements);
    this.umlDiagram = this.dropZone.children[0];
    let i = 2;
    for (let elem of newUmlElements) {
      const readElem = new UmlComponent(elem.name, elem.imgUrl, elem.type);
      const svgGroup: SVGGElement = this.renderer2.createElement('g', this.umlDiagram.namespaceURI);
      this.umlDiagram.appendChild(svgGroup);
      svgGroup.outerHTML = elem.outerHTML;
      const newSvgGroup: SVGGElement = <SVGGElement>this.umlDiagram.children[i];
      const umlElementRef = new ElementRef(this.umlDiagram.children[i])
      this.fetchElementsService.addDirective(readElem, umlElementRef);
      readElem.svgGroup = newSvgGroup;
      this.mainBoardService.addItem(readElem);
      i++;
    }
  }

  deleteFromServer(id, row) {

    this.dataStorageService.deleteDiagram(id);
    let rowToDelete = this.loadedTable.nativeElement.children[1].children[row];
    this.loadedTable.nativeElement.children[1].removeChild(rowToDelete);

  }

  elementRemover(elem: HTMLElement, remover) {
    if (elem != null) {
      elem.remove();
    }
    this.dropZone.removeEventListener('click', remover);
  }

  ngOnInit(): void {
  }

}
