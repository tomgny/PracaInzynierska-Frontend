import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HtmlElementService } from 'src/app/services/html-element.service';
import { UmlComponent } from 'src/app/models/uml-component.model';
import { UmlComponentsService } from '../../../services/uml-components.service';

@Component({
  selector: 'app-uml-components-elements',
  templateUrl: './uml-components-elements.component.html',
  styleUrls: ['../uml-elements.component.css']
})
export class UmlComponentsElementsComponent implements OnInit {

  @ViewChild('containerFluid', { static: false }) containerFluid: ElementRef<HTMLElement>;
  @ViewChild('componentList', { static: false }) componentList: ElementRef<HTMLElement>;

  umlComponentsElementsList: UmlComponent[];
  umlDependencyConnectorsList: UmlComponent[];
  umlAggregationConnectorsList: UmlComponent[];
  umlCompositionConnectorsList: UmlComponent[];
  umlRequiredConnectorsList: UmlComponent[];
  umlInterfaceConnectorsList: UmlComponent[];
  showDependency: boolean;
  showAggregation: boolean;
  showComposition: boolean;
  showRequired: boolean;
  showInterface: boolean;

  constructor(private umlComponentsService: UmlComponentsService, private htmlElementService: HtmlElementService) { }

  ngOnInit(): void {
    this.umlComponentsElementsList = this.umlComponentsService.getComponentsElementsList();
    this.umlRequiredConnectorsList = this.umlComponentsService.getRequiredConnectorsList();
    this.umlInterfaceConnectorsList = this.umlComponentsService.getInterfaceConnectorsList();
    this.umlDependencyConnectorsList = this.umlComponentsService.getDependencyConnectorsList();
    this.umlAggregationConnectorsList = this.umlComponentsService.getAggregationConnectorsList();
    this.umlCompositionConnectorsList = this.umlComponentsService.getCompositionConnectorsList();
  }

  ngAfterViewInit(): void {
    this.htmlElementService.add('componentList', this.componentList.nativeElement);
    this.containerFluid.nativeElement.style.height = 'calc(100vh - ' + 64 + 'px)';
  }

  toggleRequired() {
    this.showRequired = !this.showRequired;
  }
  toggleDependency() {
    this.showDependency = !this.showDependency;
  }
  toggleInterface() {
    this.showInterface = !this.showInterface;
  }
  toggleAggregation() {
    this.showAggregation = !this.showAggregation;
  }
  toggleComposition() {
    this.showComposition = !this.showComposition;
  }

}
