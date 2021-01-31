import { CdkDragEnd, CdkDragRelease } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { UmlComponent } from '../../../models/uml-component.model';

@Component({
  selector: 'app-uml-component-item',
  templateUrl: './uml-component-item.component.html',
  styleUrls: ['./uml-component-item.component.css'],
})
export class UmlComponentItemComponent implements OnInit {
  @Input() umlItem: UmlComponent;

  constructor() { }

  ngOnInit(): void { }

}
