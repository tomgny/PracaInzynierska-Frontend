import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HtmlElementService } from 'src/app/services/html-element.service';
import { UmlComponent } from 'src/app/models/uml-component.model';
import { UmlComponentsService } from '../../../services/uml-components.service';

@Component({
  selector: 'app-uml-use-cases-components',
  templateUrl: './uml-use-cases-components.component.html',
  styleUrls: ['../uml-elements.component.css']
})
export class UmlUseCasesComponentsComponent implements OnInit {

  @ViewChild('componentList', { static: false }) componentList: ElementRef<HTMLElement>;
  @ViewChild('containerFluid', { static: false }) containerFluid: ElementRef<HTMLElement>;

  umlUseCasesComponentsList: UmlComponent[];
  umlConnectorsList: UmlComponent[];
  umlImplementsConnectorsList: UmlComponent[];
  umlLineConnectorsList: UmlComponent[];
  umlAssociationConnectorsList: UmlComponent[];
  showImplements: boolean;
  showAssociation: boolean;
  showLine: boolean;

  constructor(private umlComponentsService: UmlComponentsService, private htmlElementService: HtmlElementService) { }

  ngOnInit(): void {
    this.umlUseCasesComponentsList = this.umlComponentsService.getUseCasesComponentsList();
    this.umlImplementsConnectorsList = this.umlComponentsService.getImplementsConnectorsList();
    this.umlLineConnectorsList = this.umlComponentsService.getLineConnectorsList();
    this.umlAssociationConnectorsList = this.umlComponentsService.getAssociationConnectorsList();
  }

  toggleImplements() {
    this.showImplements = !this.showImplements;
  }

  toggleLine() {
    this.showLine = !this.showLine;
  }

  toggleAssociation() {
    this.showAssociation = !this.showAssociation;
  }

  ngAfterViewInit(): void {
    this.htmlElementService.add('componentList', this.componentList.nativeElement);
    this.containerFluid.nativeElement.style.height = 'calc(100vh - ' + 64 + 'px)';
  }

}
