import { AfterViewInit, ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HtmlElementService } from 'src/app/services/html-element.service';
import { UmlComponent } from 'src/app/models/uml-component.model';
import { UmlComponentsService } from '../../../services/uml-components.service';

@Component({
  selector: 'app-uml-sequence-components',
  templateUrl: './uml-sequence-components.component.html',
  styleUrls: ['../uml-elements.component.css']
})
export class UmlSequenceComponentsComponent implements OnInit, AfterViewInit {

  @ViewChild('componentList', { static: false }) componentList: ElementRef<HTMLElement>;
  @ViewChild('containerFluid', { static: false }) containerFluid: ElementRef<HTMLElement>;

  umlSequenceComponentsList: UmlComponent[];
  umlConnectorsList: UmlComponent[];

  constructor(private umlComponentsService: UmlComponentsService, private htmlElementService: HtmlElementService) { }

  ngOnInit(): void {
    this.umlSequenceComponentsList = this.umlComponentsService.getSequenceComponentsList();
  }

  ngAfterViewInit(): void {
    this.htmlElementService.add('componentList', this.componentList.nativeElement);
    this.containerFluid.nativeElement.style.height = 'calc(100vh - ' + 64 + 'px)';
  }

}
