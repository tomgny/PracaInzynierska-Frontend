import { CdkDragDrop, CdkDragRelease } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild, Renderer2, AfterViewInit, AfterViewChecked } from '@angular/core';
import { UmlComponent } from '../../../models/uml-component.model';
import { UmlComponentsService } from '../../../services/uml-components.service';
import { HtmlElementService } from 'src/app/services/html-element.service';
import { Subscription } from 'rxjs';
import { MainBoardService } from '../../../services/main-board.service';

@Component({
  selector: 'app-uml-class-components',
  templateUrl: './uml-class-components.component.html',
  styleUrls: ['../uml-elements.component.css']
})
export class UmlClassComponentsComponent implements OnInit, OnDestroy, AfterViewInit {

  private testObject: UmlComponent;
  private canvasBoardSubscription: Subscription;
  private canvasBoard: HTMLElement;
  public context: CanvasRenderingContext2D;

  @ViewChild('containerFluid', { static: false }) containerFluid: ElementRef<HTMLElement>;
  @ViewChild('componentList', { static: false }) componentList: ElementRef<HTMLElement>;

  umlItemsList: UmlComponent[];
  umlInheritConnectorsList: UmlComponent[];
  umlImplementsConnectorsList: UmlComponent[];
  umlDependencyConnectorsList: UmlComponent[];
  umlAssociationConnectorsList: UmlComponent[];
  umlAggregationConnectorsList: UmlComponent[];
  umlCompositionConnectorsList: UmlComponent[];
  showInheritance: boolean;
  showImplements: boolean;
  showDependency: boolean;
  showAssociation: boolean;
  showAggregation: boolean;
  showComposition: boolean;

  constructor(private umlComponentsService: UmlComponentsService, private htmlElementService: HtmlElementService, private mainBoardService: MainBoardService, private renderer2: Renderer2) { }
  ngAfterViewInit(): void {
    this.htmlElementService.add('componentList', this.componentList.nativeElement);
    this.containerFluid.nativeElement.style.height = 'calc(100vh - ' + 64 + 'px)';
  }

  ngOnInit(): void {
    this.umlItemsList = this.umlComponentsService.getClassComponentsList();
    this.umlInheritConnectorsList = this.umlComponentsService.getInheritanceConnectorsList();
    this.umlImplementsConnectorsList = this.umlComponentsService.getImplementsConnectorsList();
    this.umlDependencyConnectorsList = this.umlComponentsService.getDependencyConnectorsList();
    this.umlAssociationConnectorsList = this.umlComponentsService.getAssociationConnectorsList();
    this.umlAggregationConnectorsList = this.umlComponentsService.getAggregationConnectorsList();
    this.umlCompositionConnectorsList = this.umlComponentsService.getCompositionConnectorsList();
    this.canvasBoardSubscription = this.htmlElementService.get('umlDiagram').subscribe((elem: HTMLElement) => {
      this.canvasBoard = elem;
    });
  }

  toggleInherit() {
    this.showInheritance = !this.showInheritance;
  }
  toggleImplements() {
    this.showImplements = !this.showImplements;
  }
  toggleDependency() {
    this.showDependency = !this.showDependency;
  }
  toggleAssociation() {
    this.showAssociation = !this.showAssociation;
  }
  toggleAggregation() {
    this.showAggregation = !this.showAggregation;
  }
  toggleComposition() {
    this.showComposition = !this.showComposition;
  }

  onRelease($event: CdkDragRelease) {
  }

  drop($event: CdkDragDrop<UmlComponent[]>) {
  }

  ngOnDestroy() {
    this.canvasBoardSubscription.unsubscribe();
  }
}
