import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnChanges, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { UmlComponent } from '../../../models/uml-component.model';
import { HtmlElementService } from 'src/app/services/html-element.service';
import { Subscription } from 'rxjs';
import { MainBoardService } from '../../../services/main-board.service';
import { DroppableDirective } from 'src/app/main-nav/directives/simple-basic/droppable.directive';
import { UmlComponentRect } from 'src/app/models/uml-component-rect.model';
import { DiagramMenuService } from 'src/app/services/diagram-menu.service';
import { UmlComponentSave } from '../../../models/uml-component-save-model';
import { FetchElementsService } from '../../../services/fetch-elements.service';
import { DrawElementsService } from '../../../services/draw-elements.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-uml-board',
  templateUrl: './uml-board.component.html',
  styleUrls: ['./uml-board.component.css']
})
export class UmlBoardComponent implements OnInit, AfterViewInit, OnDestroy, AfterViewChecked {

  @ViewChild('umlDiagram', { static: false }) umlDiagram: ElementRef<SVGElement>;
  @ViewChild('dropZone', { static: false }) dropZone: ElementRef<HTMLElement>;
  @ViewChild(DroppableDirective, { static: false }) droppableDirective: DroppableDirective;

  private draw = false;
  private lastSVGGElem: ElementRef<SVGGElement>;
  private lastUmlComponent;
  private drawElement = '';
  public umlDiagramComponentsList: UmlComponent[] = [];
  private itemSubscription = new Subscription;
  private toolbarSubscription = new Subscription;
  private diagramTypeSubscription = new Subscription;
  private umlComponentListSusbscription = new Subscription;
  private umlComponentListElement: HTMLElement;
  private toolbarElement: HTMLElement;
  private diagramType: string;

  constructor(
    private htmlElementService: HtmlElementService,
    private mainBoardService: MainBoardService,
    private renderer2: Renderer2,
    private diagramMenuSerive: DiagramMenuService,
    private fetchElementsService: FetchElementsService,
    private drawElementsService: DrawElementsService) {
    this.diagramMenuSerive.toggleVisibility();
    this.fetchElementsService.renderer2 = this.renderer2;
    this.drawElementsService.renderer2 = this.renderer2;
  }

  ngOnInit(): void {
    this.itemSubscription = this.mainBoardService.umlItemChanged
      .subscribe((componentList: UmlComponent[]) => {
        this.umlDiagramComponentsList = componentList;
      }
      );
  }

  ngAfterViewChecked() {
    //this.dropZone.nativeElement.style.height = 'calc(100% - ' + this.dropZone.nativeElement.offsetTop + 'px)';
  }

  ngAfterViewInit(): void {
    this.toolbarSubscription = this.htmlElementService.get('toolbar')
      .subscribe((elem: HTMLElement) => {
        this.toolbarElement = elem;
      });
    this.umlComponentListSusbscription = this.htmlElementService.get('componentList')
      .subscribe((elem: HTMLElement) => {
        this.umlComponentListElement = elem;
      })
    this.diagramType = this.mainBoardService.diagramType;
    this.diagramTypeSubscription = this.mainBoardService.diagramTypeSubject
      .subscribe(type => {
        this.diagramType = type;
      });
    this.htmlElementService.add('dropZone', this.dropZone.nativeElement);
    this.dropZone.nativeElement.style.minHeight = this.umlComponentListElement.clientHeight + 'px';
    this.mainBoardService.removeAllItems();
    if (localStorage.getItem(this.diagramType)) {
      const storageObjectsArray = JSON.parse(localStorage.getItem(this.diagramType));
      let i = 2;
      for (let elem of storageObjectsArray) {

        const readElem = new UmlComponent(elem.name, elem.imgUrl, elem.type);
        const svgGroup: SVGGElement = this.renderer2.createElement('g', this.umlDiagram.nativeElement.namespaceURI);
        this.umlDiagram.nativeElement.appendChild(svgGroup);
        svgGroup.outerHTML = elem.outerHTML;
        const newSvgGroup: SVGGElement = <SVGGElement>this.umlDiagram.nativeElement.children[i];
        const umlElementRef = new ElementRef(this.umlDiagram.nativeElement.children[i])
        this.fetchElementsService.addDirective(readElem, umlElementRef);
        umlElementRef.nativeElement.addEventListener('dblclick', () => this.deleteElement(readElem), false);
        readElem.svgGroup = newSvgGroup;
        this.mainBoardService.addItem(readElem);
        i++;
      }
    }
  }

  onClick($event: MouseEvent) {
    let localStorageSaveArray = [];
    for (let elem of this.umlDiagramComponentsList) {
      let saveElem = new UmlComponentSave(elem.name, elem.imgUrl, elem.type, elem.svgGroup.outerHTML);
      localStorageSaveArray.push(saveElem);
    }
    localStorage.setItem(this.diagramType, JSON.stringify(localStorageSaveArray));
  }

  elementRemover(elem: HTMLElement, remover) {
    if (elem != null) {
      elem.remove();
    }
    this.dropZone.nativeElement.removeEventListener('click', remover);
  }

  deleteElement(elem: UmlComponent) {
    const deleteButton: HTMLElement = this.renderer2.createElement('button', this.toolbarElement.namespaceURI);
    deleteButton.innerHTML = 'Delete';
    deleteButton.className += 'btn btn-danger';
    deleteButton.onclick = () => {
      elem.svgGroup.remove();
      this.mainBoardService.removeItem(this.umlDiagramComponentsList.indexOf(elem, 0));
      deleteButton.remove();
    }
    this.toolbarElement.appendChild(deleteButton);
    deleteButton.setAttribute("style", "position: absolute; right: 10%;");
    let remover = () => { this.elementRemover(deleteButton, remover) }
    this.dropZone.nativeElement.addEventListener('click', remover);
  }

  assignTask($event) {
    //=================rect=========
    if ($event.type === "class" || $event.type === "interface") {
      const umlObject = new UmlComponentRect($event.name, $event.imgUrl, $event.type);
      const svgGroup: SVGGElement = this.renderer2.createElement('g', this.umlDiagram.nativeElement.namespaceURI);
      const svgRectGroup: SVGGElement = this.renderer2.createElement('g', svgGroup.namespaceURI);
      const svgRectClass: SVGRectElement = this.renderer2.createElement('rect', svgRectGroup.namespaceURI);
      svgRectClass.setAttributeNS(null, "width", "150");
      svgRectClass.setAttributeNS(null, "height", "20");
      svgRectClass.setAttributeNS(null, "stroke", "black");
      svgRectClass.setAttributeNS(null, "stroke-width", "1");
      svgRectClass.setAttributeNS(null, 'fill', 'white');
      const svgRectMethod: SVGRectElement = this.renderer2.createElement('rect', svgRectGroup.namespaceURI);
      svgRectMethod.setAttributeNS(null, "width", "150");
      svgRectMethod.setAttributeNS(null, "height", "20");
      svgRectMethod.setAttributeNS(null, "stroke", "black");
      svgRectMethod.setAttributeNS(null, "stroke-width", "1");
      svgRectMethod.setAttributeNS(null, 'fill', 'white');
      const svgRectField: SVGRectElement = this.renderer2.createElement('rect', svgRectGroup.namespaceURI);
      svgRectField.setAttributeNS(null, "width", "150");
      svgRectField.setAttributeNS(null, "height", "20");
      svgRectField.setAttributeNS(null, "stroke", "black");
      svgRectField.setAttributeNS(null, "stroke-width", "1");
      svgRectField.setAttributeNS(null, 'fill', 'white');
      const svgTextClassGroup: SVGGElement = this.renderer2.createElement('g', svgGroup.namespaceURI);
      const svgTextMethodGroup: SVGGElement = this.renderer2.createElement('g', svgGroup.namespaceURI);
      const svgTextFieldGroup: SVGGElement = this.renderer2.createElement('g', svgGroup.namespaceURI);
      const svgTextClass: SVGTextElement = this.renderer2.createElement('text', svgTextClassGroup.namespaceURI);
      if ($event.type === "class") {
        svgTextClass.textContent = 'Classname';
      }
      if ($event.type === "interface") {
        svgTextClass.textContent = 'Interface';
      }
      const svgTextMethod: SVGTextElement = this.renderer2.createElement('text', svgTextMethodGroup.namespaceURI);
      svgTextMethod.textContent = 'method';
      const svgTextField: SVGTextElement = this.renderer2.createElement('text', svgTextFieldGroup.namespaceURI);
      svgTextField.textContent = 'field';
      svgGroup.appendChild(svgRectGroup);
      svgGroup.appendChild(svgTextClassGroup);
      svgGroup.appendChild(svgTextMethodGroup);
      svgGroup.appendChild(svgTextFieldGroup);
      svgRectGroup.appendChild(svgRectClass);
      svgRectGroup.appendChild(svgRectMethod);
      svgRectGroup.appendChild(svgRectField);
      svgTextClassGroup.appendChild(svgTextClass);
      svgTextMethodGroup.appendChild(svgTextMethod);
      svgTextFieldGroup.appendChild(svgTextField);
      this.umlDiagram.nativeElement.appendChild(svgGroup);
      umlObject.svgGroup = svgGroup;
      this.mainBoardService.addItem(umlObject);
      const svgGroupElem = new ElementRef(svgGroup);
      this.lastSVGGElem = svgGroupElem;
      svgRectGroup.addEventListener('dblclick', () => this.deleteElement(umlObject), false);
      this.drawElement = 'class';
      this.draw = true;
    }
    //================path========
    if ($event.type.startsWith('path')) {
      const umlObject = new UmlComponent($event.name, $event.imgUrl, $event.type);
      const svgGroup: SVGGElement = this.renderer2.createElement('g', this.umlDiagram.nativeElement.namespaceURI);
      const svgPath: SVGPathElement = this.renderer2.createElement('path', svgGroup.namespaceURI);
      svgGroup.appendChild(svgPath);
      this.lastSVGGElem = new ElementRef(svgGroup);
      this.umlDiagram.nativeElement.appendChild(svgGroup);
      umlObject.svgGroup = svgGroup;
      this.mainBoardService.addItem(umlObject);
      this.lastUmlComponent = umlObject;
      svgGroup.addEventListener('dblclick', () => this.deleteElement(umlObject), false);
      this.drawElement = umlObject.type;
      this.draw = true;
    }
    //================lifeline object========
    if ($event.type === ('lifeline_object')) {
      const umlObject = new UmlComponent($event.name, $event.imgUrl, $event.type);
      const svgGroup: SVGGElement = this.renderer2.createElement('g', this.umlDiagram.nativeElement.namespaceURI);
      const svgPathGroup: SVGGElement = this.renderer2.createElement('g', svgGroup.namespaceURI);
      const svgRectGroup: SVGGElement = this.renderer2.createElement('g', svgGroup.namespaceURI);
      const svgTextGroup: SVGGElement = this.renderer2.createElement('g', svgGroup.namespaceURI);
      const svgPath: SVGPathElement = this.renderer2.createElement('path', svgPathGroup.namespaceURI);
      const svgRect: SVGRectElement = this.renderer2.createElement('rect', svgRectGroup.namespaceURI);
      svgRect.setAttributeNS(null, "width", "150");
      svgRect.setAttributeNS(null, "height", "60");
      svgRect.setAttributeNS(null, "stroke", "black");
      svgRect.setAttributeNS(null, "stroke-width", "1");
      svgRect.setAttributeNS(null, 'fill', 'white');
      const svgText: SVGTextElement = this.renderer2.createElement('text', svgTextGroup.namespaceURI);
      svgText.textContent = 'Object';
      svgPathGroup.appendChild(svgPath);
      svgRectGroup.appendChild(svgRect);
      svgTextGroup.appendChild(svgText);
      svgGroup.appendChild(svgPathGroup);
      svgGroup.appendChild(svgRectGroup);
      svgGroup.appendChild(svgTextGroup);
      this.lastSVGGElem = new ElementRef(svgGroup);
      this.umlDiagram.nativeElement.appendChild(svgGroup);
      umlObject.svgGroup = svgGroup;
      this.mainBoardService.addItem(umlObject);
      this.lastUmlComponent = umlObject;
      svgGroup.addEventListener('dblclick', () => this.deleteElement(umlObject), false);
      this.drawElement = umlObject.type;
      this.draw = true;
    }
    //================lifeline actor========
    if ($event.type === ('lifeline_actor')) {
      const umlObject = new UmlComponent($event.name, $event.imgUrl, $event.type);
      const svgGroup: SVGGElement = this.renderer2.createElement('g', this.umlDiagram.nativeElement.namespaceURI);
      const svgPathGroup: SVGGElement = this.renderer2.createElement('g', svgGroup.namespaceURI);
      const svgCircleGroup: SVGGElement = this.renderer2.createElement('g', svgGroup.namespaceURI);
      const svgTextGroup: SVGGElement = this.renderer2.createElement('g', svgGroup.namespaceURI);
      const svgPath: SVGPathElement = this.renderer2.createElement('path', svgPathGroup.namespaceURI);
      const svgCircle: SVGCircleElement = this.renderer2.createElement('circle', svgCircleGroup.namespaceURI);
      svgCircle.setAttributeNS(null, "stroke", "black");
      svgCircle.setAttributeNS(null, "stroke-width", "1");
      svgCircle.setAttributeNS(null, "r", "4");
      const svgText: SVGTextElement = this.renderer2.createElement('text', svgTextGroup.namespaceURI);
      svgText.textContent = 'Actor';
      svgPathGroup.appendChild(svgPath);
      svgCircleGroup.appendChild(svgCircle);
      svgTextGroup.appendChild(svgText);
      svgGroup.appendChild(svgPathGroup);
      svgGroup.appendChild(svgCircleGroup);
      svgGroup.appendChild(svgTextGroup);
      this.lastSVGGElem = new ElementRef(svgGroup);
      this.umlDiagram.nativeElement.appendChild(svgGroup);
      umlObject.svgGroup = svgGroup;
      this.mainBoardService.addItem(umlObject);
      this.lastUmlComponent = umlObject;
      svgGroup.addEventListener('dblclick', () => this.deleteElement(umlObject), false);
      this.drawElement = umlObject.type;
      this.draw = true;
    }
    //================lifeline circle========
    if ($event.type.startsWith('lifeline_c_')) {
      const umlObject = new UmlComponent($event.name, $event.imgUrl, $event.type);
      const svgGroup: SVGGElement = this.renderer2.createElement('g', this.umlDiagram.nativeElement.namespaceURI);
      const svgPathGroup: SVGGElement = this.renderer2.createElement('g', svgGroup.namespaceURI);
      const svgCircleGroup: SVGGElement = this.renderer2.createElement('g', svgGroup.namespaceURI);
      const svgTextGroup: SVGGElement = this.renderer2.createElement('g', svgGroup.namespaceURI);
      const svgPath: SVGPathElement = this.renderer2.createElement('path', svgPathGroup.namespaceURI);
      const svgCircle: SVGCircleElement = this.renderer2.createElement('circle', svgCircleGroup.namespaceURI);
      svgCircle.setAttributeNS(null, "stroke", "black");
      svgCircle.setAttributeNS(null, "stroke-width", "1");
      svgCircle.setAttributeNS(null, "r", "20");
      svgCircle.setAttributeNS(null, "fill", "white");
      svgCircle.setAttributeNS(null, "fill-opacity", "0.0");
      const svgText: SVGTextElement = this.renderer2.createElement('text', svgTextGroup.namespaceURI);
      if ($event.type === 'lifeline_c_boundary') {
        svgText.textContent = 'Boundary';
      }
      if ($event.type === 'lifeline_c_control') {
        svgText.textContent = 'Control';
      }
      if ($event.type === 'lifeline_c_entity') {
        svgText.textContent = 'Entity';
      }
      svgPathGroup.appendChild(svgPath);
      svgCircleGroup.appendChild(svgCircle);
      svgTextGroup.appendChild(svgText);
      svgGroup.appendChild(svgPathGroup);
      svgGroup.appendChild(svgCircleGroup);
      svgGroup.appendChild(svgTextGroup);
      this.lastSVGGElem = new ElementRef(svgGroup);
      this.umlDiagram.nativeElement.appendChild(svgGroup);
      umlObject.svgGroup = svgGroup;
      this.mainBoardService.addItem(umlObject);
      this.lastUmlComponent = umlObject;
      svgGroup.addEventListener('dblclick', () => this.deleteElement(umlObject), false);
      this.drawElement = umlObject.type;
      this.draw = true;
    }
    //=================activation=========
    if ($event.type === 'activation') {
      const umlObject = new UmlComponent($event.name, $event.imgUrl, $event.type);
      const svgGroup: SVGGElement = this.renderer2.createElement('g', this.umlDiagram.nativeElement.namespaceURI);
      const svgRectClass: SVGRectElement = this.renderer2.createElement('rect', svgGroup.namespaceURI);
      svgRectClass.setAttributeNS(null, "width", "12");
      svgRectClass.setAttributeNS(null, "height", "40");
      svgRectClass.setAttributeNS(null, "stroke", "black");
      svgRectClass.setAttributeNS(null, "stroke-width", "1");
      svgRectClass.setAttributeNS(null, 'fill', 'white');
      svgGroup.appendChild(svgRectClass);
      this.umlDiagram.nativeElement.appendChild(svgGroup);
      umlObject.svgGroup = svgGroup;
      this.mainBoardService.addItem(umlObject);
      const svgGroupElem = new ElementRef(svgGroup);
      this.lastSVGGElem = svgGroupElem;
      svgGroup.addEventListener('dblclick', () => this.deleteElement(umlObject), false);
      this.drawElement = umlObject.type;
      this.draw = true;
    }
    //=================fragment=========
    if ($event.type === 'fragment') {
      const umlObject = new UmlComponent($event.name, $event.imgUrl, $event.type);
      const svgGroup: SVGGElement = this.renderer2.createElement('g', this.umlDiagram.nativeElement.namespaceURI);
      const svgPathGroup: SVGGElement = this.renderer2.createElement('g', svgGroup.namespaceURI);
      const svgRectGroup: SVGGElement = this.renderer2.createElement('g', svgGroup.namespaceURI);
      const svgTextGroup: SVGGElement = this.renderer2.createElement('g', svgGroup.namespaceURI);
      const svgPath: SVGPathElement = this.renderer2.createElement('path', svgPathGroup.namespaceURI);
      const svgRect: SVGRectElement = this.renderer2.createElement('rect', svgRectGroup.namespaceURI);
      svgRect.setAttributeNS(null, "width", "300");
      svgRect.setAttributeNS(null, "height", "150");
      svgRect.setAttributeNS(null, "stroke", "black");
      svgRect.setAttributeNS(null, "stroke-width", "1");
      svgRect.setAttributeNS(null, 'fill', 'white');
      svgRect.setAttributeNS(null, 'fill-opacity', '0.0');
      const svgText: SVGTextElement = this.renderer2.createElement('text', svgTextGroup.namespaceURI);
      svgText.textContent = 'alt';
      if ($event.type === 'lifeline_c_entity') {
        svgText.textContent = 'Entity';
      }
      svgPathGroup.appendChild(svgPath);
      svgRectGroup.appendChild(svgRect);
      svgTextGroup.appendChild(svgText);
      svgGroup.appendChild(svgPathGroup);
      svgGroup.appendChild(svgRectGroup);
      svgGroup.appendChild(svgTextGroup);
      this.lastSVGGElem = new ElementRef(svgGroup);
      this.umlDiagram.nativeElement.appendChild(svgGroup);
      umlObject.svgGroup = svgGroup;
      this.mainBoardService.addItem(umlObject);
      this.lastUmlComponent = umlObject;
      svgGroup.addEventListener('dblclick', () => this.deleteElement(umlObject), false);
      this.drawElement = umlObject.type;
      this.draw = true;
    }
    //================text========
    if ($event.type === 'text') {
      const umlObject = new UmlComponent($event.name, $event.imgUrl, $event.type);
      const svgGroup: SVGGElement = this.renderer2.createElement('g', this.umlDiagram.nativeElement.namespaceURI);
      const svgTextMethod: SVGTextElement = this.renderer2.createElement('text', svgGroup.namespaceURI);
      svgTextMethod.textContent = 'text';
      svgGroup.appendChild(svgTextMethod);
      const svgGroupElem = new ElementRef(svgGroup);
      this.lastSVGGElem = svgGroupElem;
      this.umlDiagram.nativeElement.appendChild(svgGroup);
      umlObject.svgGroup = svgGroup;
      this.mainBoardService.addItem(umlObject);
      svgGroup.addEventListener('dblclick', () => this.deleteElement(umlObject), false);
      this.drawElement = umlObject.type;
      this.draw = true;
    }
    //================message========
    if ($event.type.startsWith('message')) {
      const umlObject = new UmlComponent($event.name, $event.imgUrl, $event.type);
      const svgGroup: SVGGElement = this.renderer2.createElement('g', this.umlDiagram.nativeElement.namespaceURI);
      const svgPath: SVGPathElement = this.renderer2.createElement('path', svgGroup.namespaceURI);
      svgGroup.appendChild(svgPath);
      this.lastSVGGElem = new ElementRef(svgGroup);
      this.umlDiagram.nativeElement.appendChild(svgGroup);
      umlObject.svgGroup = svgGroup;
      this.mainBoardService.addItem(umlObject);
      this.lastUmlComponent = umlObject;
      svgGroup.addEventListener('dblclick', () => this.deleteElement(umlObject), false);
      this.drawElement = umlObject.type;
      this.draw = true;
    }
    //================use-case========
    if ($event.type === 'use_case') {
      const umlObject = new UmlComponent($event.name, $event.imgUrl, $event.type);
      const svgGroup: SVGGElement = this.renderer2.createElement('g', this.umlDiagram.nativeElement.namespaceURI);
      const svgEllipseGroup: SVGGElement = this.renderer2.createElement('g', svgGroup.namespaceURI);
      const svgTextGroup: SVGGElement = this.renderer2.createElement('g', svgGroup.namespaceURI);
      const svgEllipse: SVGEllipseElement = this.renderer2.createElement('ellipse', svgEllipseGroup.namespaceURI);
      svgEllipse.setAttributeNS(null, "rx", "100");
      svgEllipse.setAttributeNS(null, "ry", "50");
      svgEllipse.setAttributeNS(null, "stroke", "black");
      svgEllipse.setAttributeNS(null, "stroke-width", "1");
      svgEllipse.setAttributeNS(null, 'fill', 'white');
      svgEllipse.setAttributeNS(null, 'fill-opacity', '1.0');
      const svgText: SVGTextElement = this.renderer2.createElement('text', svgTextGroup.namespaceURI);
      svgText.textContent = 'Use case';
      if ($event.type === 'lifeline_c_entity') {
        svgText.textContent = 'use case';
      }
      svgEllipseGroup.appendChild(svgEllipse);
      svgTextGroup.appendChild(svgText);
      svgGroup.appendChild(svgEllipseGroup);
      svgGroup.appendChild(svgTextGroup);
      this.lastSVGGElem = new ElementRef(svgGroup);
      this.umlDiagram.nativeElement.appendChild(svgGroup);
      umlObject.svgGroup = svgGroup;
      this.mainBoardService.addItem(umlObject);
      this.lastUmlComponent = umlObject;
      svgGroup.addEventListener('dblclick', () => this.deleteElement(umlObject), false);
      this.drawElement = umlObject.type;
      this.draw = true;
    }
    //================actor========
    if ($event.type === ('actor')) {
      const umlObject = new UmlComponent($event.name, $event.imgUrl, $event.type);
      const svgGroup: SVGGElement = this.renderer2.createElement('g', this.umlDiagram.nativeElement.namespaceURI);
      const svgPathGroup: SVGGElement = this.renderer2.createElement('g', svgGroup.namespaceURI);
      const svgCircleGroup: SVGGElement = this.renderer2.createElement('g', svgGroup.namespaceURI);
      const svgTextGroup: SVGGElement = this.renderer2.createElement('g', svgGroup.namespaceURI);
      const svgPath: SVGPathElement = this.renderer2.createElement('path', svgPathGroup.namespaceURI);
      const svgCircle: SVGCircleElement = this.renderer2.createElement('circle', svgCircleGroup.namespaceURI);
      svgCircle.setAttributeNS(null, "stroke", "black");
      svgCircle.setAttributeNS(null, "stroke-width", "1");
      svgCircle.setAttributeNS(null, "r", "4");
      const svgText: SVGTextElement = this.renderer2.createElement('text', svgTextGroup.namespaceURI);
      svgText.textContent = 'Actor';
      svgPathGroup.appendChild(svgPath);
      svgCircleGroup.appendChild(svgCircle);
      svgTextGroup.appendChild(svgText);
      svgGroup.appendChild(svgPathGroup);
      svgGroup.appendChild(svgCircleGroup);
      svgGroup.appendChild(svgTextGroup);
      this.lastSVGGElem = new ElementRef(svgGroup);
      this.umlDiagram.nativeElement.appendChild(svgGroup);
      umlObject.svgGroup = svgGroup;
      this.mainBoardService.addItem(umlObject);
      this.lastUmlComponent = umlObject;
      svgGroup.addEventListener('dblclick', () => this.deleteElement(umlObject), false);
      this.drawElement = umlObject.type;
      this.draw = true;
    }
    //=================system=========
    if ($event.type === 'system') {
      const umlObject = new UmlComponent($event.name, $event.imgUrl, $event.type);
      const svgGroup: SVGGElement = this.renderer2.createElement('g', this.umlDiagram.nativeElement.namespaceURI);
      const svgRectClass: SVGRectElement = this.renderer2.createElement('rect', svgGroup.namespaceURI);
      svgRectClass.setAttributeNS(null, "width", "300");
      svgRectClass.setAttributeNS(null, "height", "500");
      svgRectClass.setAttributeNS(null, "stroke", "black");
      svgRectClass.setAttributeNS(null, "stroke-width", "1");
      svgRectClass.setAttributeNS(null, 'fill', 'white');
      svgRectClass.setAttributeNS(null, 'fill-opacity', '0.0');
      svgGroup.appendChild(svgRectClass);
      this.umlDiagram.nativeElement.appendChild(svgGroup);
      umlObject.svgGroup = svgGroup;
      this.mainBoardService.addItem(umlObject);
      const svgGroupElem = new ElementRef(svgGroup);
      this.lastSVGGElem = svgGroupElem;
      svgGroup.addEventListener('dblclick', () => this.deleteElement(umlObject), false);
      this.drawElement = umlObject.type;
      this.draw = true;
    }
    //=================component=========
    if ($event.type === 'component') {
      const umlObject = new UmlComponent($event.name, $event.imgUrl, $event.type);
      const svgGroup: SVGGElement = this.renderer2.createElement('g', this.umlDiagram.nativeElement.namespaceURI);
      const svgRectGroup: SVGGElement = this.renderer2.createElement('g', svgGroup.namespaceURI);
      const svgRectComponent: SVGRectElement = this.renderer2.createElement('rect', svgRectGroup.namespaceURI);
      svgRectComponent.setAttributeNS(null, "width", "200");
      svgRectComponent.setAttributeNS(null, "height", "75");
      svgRectComponent.setAttributeNS(null, "stroke", "black");
      svgRectComponent.setAttributeNS(null, "stroke-width", "1");
      svgRectComponent.setAttributeNS(null, 'fill', 'white');
      const svgRectComponentIconMain: SVGRectElement = this.renderer2.createElement('rect', svgRectGroup.namespaceURI);
      svgRectComponentIconMain.setAttributeNS(null, "width", "20");
      svgRectComponentIconMain.setAttributeNS(null, "height", "30");
      svgRectComponentIconMain.setAttributeNS(null, "stroke", "black");
      svgRectComponentIconMain.setAttributeNS(null, "stroke-width", "1");
      svgRectComponentIconMain.setAttributeNS(null, 'fill', 'white');
      const svgRectComponentIconSmall1: SVGRectElement = this.renderer2.createElement('rect', svgRectGroup.namespaceURI);
      svgRectComponentIconSmall1.setAttributeNS(null, "width", "10");
      svgRectComponentIconSmall1.setAttributeNS(null, "height", "5");
      svgRectComponentIconSmall1.setAttributeNS(null, "stroke", "black");
      svgRectComponentIconSmall1.setAttributeNS(null, "stroke-width", "1");
      svgRectComponentIconSmall1.setAttributeNS(null, 'fill', 'white');
      const svgRectComponentIconSmall2: SVGRectElement = this.renderer2.createElement('rect', svgRectGroup.namespaceURI);
      svgRectComponentIconSmall2.setAttributeNS(null, "width", "10");
      svgRectComponentIconSmall2.setAttributeNS(null, "height", "5");
      svgRectComponentIconSmall2.setAttributeNS(null, "stroke", "black");
      svgRectComponentIconSmall2.setAttributeNS(null, "stroke-width", "1");
      svgRectComponentIconSmall2.setAttributeNS(null, 'fill', 'white');
      const svgTextGroup: SVGGElement = this.renderer2.createElement('g', svgGroup.namespaceURI);
      const svgText: SVGTextElement = this.renderer2.createElement('text', svgTextGroup.namespaceURI);
      svgText.textContent = 'Component';
      svgGroup.appendChild(svgRectGroup);
      svgGroup.appendChild(svgTextGroup);
      svgRectGroup.appendChild(svgRectComponent);
      svgRectGroup.appendChild(svgRectComponentIconMain);
      svgRectGroup.appendChild(svgRectComponentIconSmall1);
      svgRectGroup.appendChild(svgRectComponentIconSmall2);
      svgTextGroup.appendChild(svgText);
      this.umlDiagram.nativeElement.appendChild(svgGroup);
      umlObject.svgGroup = svgGroup;
      this.mainBoardService.addItem(umlObject);
      const svgGroupElem = new ElementRef(svgGroup);
      this.lastSVGGElem = svgGroupElem;
      svgRectGroup.addEventListener('dblclick', () => this.deleteElement(umlObject), false);
      this.drawElement = umlObject.type;
      this.draw = true;
    }
    //=================port=========
    if ($event.type === 'port') {
      const umlObject = new UmlComponent($event.name, $event.imgUrl, $event.type);
      const svgGroup: SVGGElement = this.renderer2.createElement('g', this.umlDiagram.nativeElement.namespaceURI);
      const svgRectGroup: SVGGElement = this.renderer2.createElement('g', svgGroup.namespaceURI);
      const svgRect: SVGRectElement = this.renderer2.createElement('rect', svgRectGroup.namespaceURI);
      svgRect.setAttributeNS(null, "width", "25");
      svgRect.setAttributeNS(null, "height", "25");
      svgRect.setAttributeNS(null, "stroke", "black");
      svgRect.setAttributeNS(null, "stroke-width", "1");
      svgRect.setAttributeNS(null, 'fill', 'white');
      svgGroup.appendChild(svgRectGroup);
      svgRectGroup.appendChild(svgRect);
      this.umlDiagram.nativeElement.appendChild(svgGroup);
      umlObject.svgGroup = svgGroup;
      this.mainBoardService.addItem(umlObject);
      const svgGroupElem = new ElementRef(svgGroup);
      this.lastSVGGElem = svgGroupElem;
      svgRectGroup.addEventListener('dblclick', () => this.deleteElement(umlObject), false);
      this.drawElement = umlObject.type;
      this.draw = true;
    }
    //================provided interface========
    if ($event.type.startsWith('provided_interface')) {
      const umlObject = new UmlComponent($event.name, $event.imgUrl, $event.type);
      const svgGroup: SVGGElement = this.renderer2.createElement('g', this.umlDiagram.nativeElement.namespaceURI);
      const svgPathGroup: SVGGElement = this.renderer2.createElement('g', svgGroup.namespaceURI);
      const svgCircleGroup: SVGGElement = this.renderer2.createElement('g', svgGroup.namespaceURI);
      const svgPath: SVGPathElement = this.renderer2.createElement('path', svgPathGroup.namespaceURI);
      const svgCircle: SVGCircleElement = this.renderer2.createElement('circle', svgCircleGroup.namespaceURI);
      svgCircle.setAttributeNS(null, "stroke", "black");
      svgCircle.setAttributeNS(null, "stroke-width", "1");
      svgCircle.setAttributeNS(null, "r", "12");
      svgCircle.setAttributeNS(null, "fill", "white");
      svgCircle.setAttributeNS(null, "fill-opacity", "1.0");
      svgPathGroup.appendChild(svgPath);
      svgCircleGroup.appendChild(svgCircle);
      svgGroup.appendChild(svgPathGroup);
      svgGroup.appendChild(svgCircleGroup);
      this.lastSVGGElem = new ElementRef(svgGroup);
      this.umlDiagram.nativeElement.appendChild(svgGroup);
      umlObject.svgGroup = svgGroup;
      this.mainBoardService.addItem(umlObject);
      this.lastUmlComponent = umlObject;
      svgGroup.addEventListener('dblclick', () => this.deleteElement(umlObject), false);
      this.drawElement = umlObject.type;
      this.draw = true;
    }
    //================constraint========
    if ($event.type === ('constraint')) {
      const umlObject = new UmlComponent($event.name, $event.imgUrl, $event.type);
      const svgGroup: SVGGElement = this.renderer2.createElement('g', this.umlDiagram.nativeElement.namespaceURI);
      const svgPathGroup: SVGGElement = this.renderer2.createElement('g', svgGroup.namespaceURI);
      const svgRectGroup: SVGGElement = this.renderer2.createElement('g', svgGroup.namespaceURI);
      const svgTextGroup: SVGGElement = this.renderer2.createElement('g', svgGroup.namespaceURI);
      const svgPath: SVGPathElement = this.renderer2.createElement('path', svgPathGroup.namespaceURI);
      const svgRect: SVGRectElement = this.renderer2.createElement('rect', svgRectGroup.namespaceURI);
      svgRect.setAttributeNS(null, "width", "150");
      svgRect.setAttributeNS(null, "height", "60");
      svgRect.setAttributeNS(null, "stroke", "black");
      svgRect.setAttributeNS(null, "stroke-width", "1");
      svgRect.setAttributeNS(null, 'fill', 'white');
      const svgText: SVGTextElement = this.renderer2.createElement('text', svgTextGroup.namespaceURI);
      svgText.textContent = 'Constraint';
      svgPathGroup.appendChild(svgPath);
      svgRectGroup.appendChild(svgRect);
      svgTextGroup.appendChild(svgText);
      svgGroup.appendChild(svgPathGroup);
      svgGroup.appendChild(svgRectGroup);
      svgGroup.appendChild(svgTextGroup);
      this.lastSVGGElem = new ElementRef(svgGroup);
      this.umlDiagram.nativeElement.appendChild(svgGroup);
      umlObject.svgGroup = svgGroup;
      this.mainBoardService.addItem(umlObject);
      this.lastUmlComponent = umlObject;
      svgGroup.addEventListener('dblclick', () => this.deleteElement(umlObject), false);
      this.drawElement = umlObject.type;
      this.draw = true;
    }
    //=================node=========
    if ($event.type === 'node') {
      const umlObject = new UmlComponent($event.name, $event.imgUrl, $event.type);
      const svgGroup: SVGGElement = this.renderer2.createElement('g', this.umlDiagram.nativeElement.namespaceURI);
      const svgPathGroup: SVGGElement = this.renderer2.createElement('g', svgGroup.namespaceURI);
      const svgPathCenter: SVGRectElement = this.renderer2.createElement('path', svgPathGroup.namespaceURI);
      svgPathCenter.setAttributeNS(null, "stroke", "black");
      svgPathCenter.setAttributeNS(null, "stroke-width", "1");
      svgPathCenter.setAttributeNS(null, 'fill', 'white');
      const svgPathUp: SVGRectElement = this.renderer2.createElement('path', svgPathGroup.namespaceURI);
      svgPathUp.setAttributeNS(null, "stroke", "black");
      svgPathUp.setAttributeNS(null, "stroke-width", "1");
      svgPathUp.setAttributeNS(null, 'fill', 'white');
      const svgPathRight: SVGRectElement = this.renderer2.createElement('path', svgPathGroup.namespaceURI);
      svgPathRight.setAttributeNS(null, "stroke", "black");
      svgPathRight.setAttributeNS(null, "stroke-width", "1");
      svgPathRight.setAttributeNS(null, 'fill', 'white');
      const svgTextGroup: SVGGElement = this.renderer2.createElement('g', svgGroup.namespaceURI);
      const svgText: SVGTextElement = this.renderer2.createElement('text', svgTextGroup.namespaceURI);
      svgText.textContent = 'Node';
      svgGroup.appendChild(svgPathGroup);
      svgGroup.appendChild(svgTextGroup);
      svgPathGroup.appendChild(svgPathCenter);
      svgPathGroup.appendChild(svgPathUp);
      svgPathGroup.appendChild(svgPathRight);
      svgTextGroup.appendChild(svgText);
      this.umlDiagram.nativeElement.appendChild(svgGroup);
      umlObject.svgGroup = svgGroup;
      this.mainBoardService.addItem(umlObject);
      const svgGroupElem = new ElementRef(svgGroup);
      this.lastSVGGElem = svgGroupElem;
      svgPathGroup.addEventListener('dblclick', () => this.deleteElement(umlObject), false);
      this.drawElement = umlObject.type;
      this.draw = true;
    }
    //================artifact========
    if ($event.type === ('artifact')) {
      const umlObject = new UmlComponent($event.name, $event.imgUrl, $event.type);
      const svgGroup: SVGGElement = this.renderer2.createElement('g', this.umlDiagram.nativeElement.namespaceURI);
      const svgRectGroup: SVGGElement = this.renderer2.createElement('g', svgGroup.namespaceURI);
      const svgPathGroup: SVGGElement = this.renderer2.createElement('g', svgGroup.namespaceURI);
      const svgTextGroup: SVGGElement = this.renderer2.createElement('g', svgGroup.namespaceURI);
      const svgPath: SVGPathElement = this.renderer2.createElement('path', svgPathGroup.namespaceURI);
      svgPath.setAttributeNS(null, "stroke", "black");
      svgPath.setAttributeNS(null, "stroke-width", "1");
      svgPath.setAttributeNS(null, 'fill', 'white');
      const svgRect: SVGRectElement = this.renderer2.createElement('rect', svgRectGroup.namespaceURI);
      svgRect.setAttributeNS(null, "width", "150");
      svgRect.setAttributeNS(null, "height", "60");
      svgRect.setAttributeNS(null, "stroke", "black");
      svgRect.setAttributeNS(null, "stroke-width", "1");
      svgRect.setAttributeNS(null, 'fill', 'white');
      const svgText: SVGTextElement = this.renderer2.createElement('text', svgTextGroup.namespaceURI);
      svgText.textContent = 'Artifact';
      svgRectGroup.appendChild(svgRect);
      svgPathGroup.appendChild(svgPath);
      svgTextGroup.appendChild(svgText);
      svgGroup.appendChild(svgRectGroup);
      svgGroup.appendChild(svgPathGroup);
      svgGroup.appendChild(svgTextGroup);
      this.lastSVGGElem = new ElementRef(svgGroup);
      this.umlDiagram.nativeElement.appendChild(svgGroup);
      umlObject.svgGroup = svgGroup;
      this.mainBoardService.addItem(umlObject);
      this.lastUmlComponent = umlObject;
      svgGroup.addEventListener('dblclick', () => this.deleteElement(umlObject), false);
      this.drawElement = umlObject.type;
      this.draw = true;
    }
  }

  onMouseDown($event: MouseEvent) {
  }

  onTextEdit(elem: ElementRef) {
    let isEmpty = true;
    let textTransform = (elem.nativeElement.children[0].style.transform).match(/-[[0-9]{1,}|[[0-9]{1,}/g);
    let x = +elem.nativeElement.children[0].getAttribute('x');
    let y = +elem.nativeElement.children[0].getAttribute('y');
    if (textTransform != null) {
      x = (+elem.nativeElement.children[0].getAttribute('x') + (+textTransform[0]));
      y = (+elem.nativeElement.children[0].getAttribute('y') + (+textTransform[1]));
    }
    const myforeign = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject')
    const textdiv = document.createElement("div");
    for (let i = 0; i < elem.nativeElement.children.length; i++) {
      let newTextDiv = document.createElement('div');
      if (elem.nativeElement.children[i].textContent === ' ') { //empty line replacement
        newTextDiv.textContent = '-';
      }
      else {
        newTextDiv.textContent = elem.nativeElement.children[i].textContent;
      }
      textdiv.appendChild(newTextDiv);
    }
    textdiv.setAttribute("contentEditable", "true");
    textdiv.setAttribute("width", "auto");
    myforeign.setAttribute("width", "100%");
    myforeign.setAttribute("height", "100%");
    myforeign.classList.add("foreign"); //to make div fit text
    textdiv.classList.add("insideforeign"); //to make div fit text
    myforeign.setAttributeNS(null, "transform", "translate(" + x + ", " + (y - 13) + ")");
    for (let i = 0; i < elem.nativeElement.children.length; i++) {
      elem.nativeElement.children[i].setAttributeNS(null, 'visibility', 'hidden');
    }
    textdiv.addEventListener('focusout', (e: KeyboardEvent) => {
      let innerHTMLArray = textdiv.innerHTML.split(/<div>|<\/div>/);
      for (let word of innerHTMLArray) {
        if (word !== '' && word !== '<br>' && word !== '<div><br>') {
          isEmpty = false;
          break;
        }
      }
      if (isEmpty) {
        for (let i = 0; i < elem.nativeElement.children.length; i++) {
          elem.nativeElement.children[i].setAttributeNS(null, 'visibility', 'visible');
        }
        myforeign.remove();
      }
      else {
        for (let i = 0; i < innerHTMLArray.length; i++) {
          if (innerHTMLArray[i] === '') {
            innerHTMLArray.splice(i, 1);
          }
        }
        while (elem.nativeElement.firstChild) {
          elem.nativeElement.removeChild(elem.nativeElement.lastChild);
        }
        for (let i = 0; i < innerHTMLArray.length; i++) {
          if (innerHTMLArray[i] === '<br>') {
            let newText = this.renderer2.createElement('text', elem.nativeElement.namespaceURI);
            newText.textContent = ' ';
            newText.setAttributeNS(null, 'x', x);
            newText.setAttributeNS(null, 'y', y + (i * 20));
            elem.nativeElement.appendChild(newText);
          }
          else {
            let newText = this.renderer2.createElement('text', elem.nativeElement.namespaceURI);
            newText.textContent = innerHTMLArray[i];
            newText.setAttributeNS(null, 'x', x);
            newText.setAttributeNS(null, 'y', y + (i * 20));
            elem.nativeElement.appendChild(newText);
          }
        }
        myforeign.remove();
      }
    }, false);
    elem.nativeElement.appendChild(myforeign);
    myforeign.appendChild(textdiv);
    textdiv.focus();
  }

  onMouseMove($event: MouseEvent) {
    if (this.draw) {
      let oY = $event.offsetY;
      let oX = $event.offsetX;
      this.drawElementsService.drawElement(this.lastSVGGElem, this.drawElement, oX, oY);
      this.draw = false;
      this.drawElement = '';
    }
  }

  ngOnDestroy() {
    this.diagramMenuSerive.toggleVisibility();
    this.itemSubscription.unsubscribe();
    this.htmlElementService.delete('umlDiagram');
    this.mainBoardService.removeAllItems();
  }
}
