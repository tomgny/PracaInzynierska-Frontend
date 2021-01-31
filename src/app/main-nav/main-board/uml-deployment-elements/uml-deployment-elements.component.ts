import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HtmlElementService } from 'src/app/services/html-element.service';
import { UmlComponent } from 'src/app/models/uml-component.model';
import { UmlComponentsService } from '../../../services/uml-components.service';

@Component({
  selector: 'app-uml-deployment-elements',
  templateUrl: './uml-deployment-elements.component.html',
  styleUrls: ['../uml-elements.component.css']
})
export class UmlDeploymentElementsComponent implements OnInit {

  @ViewChild('componentList', { static: false }) componentList: ElementRef<HTMLElement>;
  @ViewChild('containerFluid', { static: false }) containerFluid: ElementRef<HTMLElement>;

  umlDeploymentElementsList: UmlComponent[];
  umlLineConnectorsList: UmlComponent[];
  umlDependencyConnectorsList: UmlComponent[];
  showDependency: boolean;
  showLine: boolean;

  constructor(private umlComponentsService: UmlComponentsService, private htmlElementService: HtmlElementService) { }

  ngOnInit(): void {
    this.umlDeploymentElementsList = this.umlComponentsService.getDeploymentElementsList();
    this.umlDependencyConnectorsList = this.umlComponentsService.getDependencyConnectorsList();
    this.umlLineConnectorsList = this.umlComponentsService.getLineConnectorsList();
  }

  ngAfterViewInit(): void {
    this.htmlElementService.add('componentList', this.componentList.nativeElement);
    this.containerFluid.nativeElement.style.height = 'calc(100vh - ' + 64 + 'px)';
  }

  toggleDependency() {
    this.showDependency = !this.showDependency;
  }

  toggleLine() {
    this.showLine = !this.showLine;
  }

}
