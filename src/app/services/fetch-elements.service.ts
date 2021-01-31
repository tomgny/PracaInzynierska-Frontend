import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { Injectable } from '@angular/core';
import { ClassClassnameDirective } from 'src/app/main-nav/directives/class-interface/class-classname.directive';
import { ClassFieldDirective } from 'src/app/main-nav/directives/class-interface/class-field.directive';
import { ClassMethodDirective } from 'src/app/main-nav/directives/class-interface/class-method.directive';
import { UmlComponent } from 'src/app/models/uml-component.model';
import { MoveableDraggableDirective } from 'src/app/main-nav/directives/simple-basic/moveable-draggable.directive';
import { ActivationDirective } from '../main-nav/directives/activation/activation.directive';
import { AggregationBDirective } from '../main-nav/directives/aggregation/aggregation-b.directive';
import { AggregationLDirective } from '../main-nav/directives/aggregation/aggregation-l.directive';
import { AggregationLbDirective } from '../main-nav/directives/aggregation/aggregation-lb.directive';
import { AggregationLtDirective } from '../main-nav/directives/aggregation/aggregation-lt.directive';
import { AggregationRDirective } from '../main-nav/directives/aggregation/aggregation-r.directive';
import { AggregationRbDirective } from '../main-nav/directives/aggregation/aggregation-rb.directive';
import { AggregationRtDirective } from '../main-nav/directives/aggregation/aggregation-rt.directive';
import { AggregationTDirective } from '../main-nav/directives/aggregation/aggregation-t.directive';
import { ArtifactDirective } from '../main-nav/directives/artifact/artifact.directive';
import { AssociationBDirective } from '../main-nav/directives/association/association-b.directive';
import { AssociationLDirective } from '../main-nav/directives/association/association-l.directive';
import { AssociationLbDirective } from '../main-nav/directives/association/association-lb.directive';
import { AssociationLtDirective } from '../main-nav/directives/association/association-lt.directive';
import { AssociationRDirective } from '../main-nav/directives/association/association-r.directive';
import { AssociationRbDirective } from '../main-nav/directives/association/association-rb.directive';
import { AssociationRtDirective } from '../main-nav/directives/association/association-rt.directive';
import { AssociationTDirective } from '../main-nav/directives/association/association-t.directive';
import { ComponentDirective } from '../main-nav/directives/component/component.directive';
import { CompositionBDirective } from '../main-nav/directives/composition/composition-b.directive';
import { CompositionLDirective } from '../main-nav/directives/composition/composition-l.directive';
import { CompositionLbDirective } from '../main-nav/directives/composition/composition-lb.directive';
import { CompositionLtDirective } from '../main-nav/directives/composition/composition-lt.directive';
import { CompositionRDirective } from '../main-nav/directives/composition/composition-r.directive';
import { CompositionRbDirective } from '../main-nav/directives/composition/composition-rb.directive';
import { CompositionRtDirective } from '../main-nav/directives/composition/composition-rt.directive';
import { CompositionTDirective } from '../main-nav/directives/composition/composition-t.directive';
import { FragmentDirective } from '../main-nav/directives/fragment/fragment.directive';
import { ImplemetsBDirective } from '../main-nav/directives/implements/implemets-b.directive';
import { ImplemetsLDirective } from '../main-nav/directives/implements/implemets-l.directive';
import { ImplemetsLbDirective } from '../main-nav/directives/implements/implemets-lb.directive';
import { ImplemetsLtDirective } from '../main-nav/directives/implements/implemets-lt.directive';
import { ImplemetsRDirective } from '../main-nav/directives/implements/implemets-r.directive';
import { ImplemetsRbDirective } from '../main-nav/directives/implements/implemets-rb.directive';
import { ImplemetsRtDirective } from '../main-nav/directives/implements/implemets-rt.directive';
import { ImplemetsTDirective } from '../main-nav/directives/implements/implemets-t.directive';
import { InterfaceBDirective } from '../main-nav/directives/interface/interface-b.directive';
import { InterfaceLDirective } from '../main-nav/directives/interface/interface-l.directive';
import { InterfaceLbDirective } from '../main-nav/directives/interface/interface-lb.directive';
import { InterfaceLtDirective } from '../main-nav/directives/interface/interface-lt.directive';
import { InterfaceRDirective } from '../main-nav/directives/interface/interface-r.directive';
import { InterfaceRbDirective } from '../main-nav/directives/interface/interface-rb.directive';
import { InterfaceRtDirective } from '../main-nav/directives/interface/interface-rt.directive';
import { InterfaceTDirective } from '../main-nav/directives/interface/interface-t.directive';
import { LifelineDirective } from '../main-nav/directives/lifeline/lifeline.directive';
import { LineRDirective } from '../main-nav/directives/line/line-r.directive';
import { LineRtDirective } from '../main-nav/directives/line/line-rt.directive';
import { LineTDirective } from '../main-nav/directives/line/line-t.directive';
import { MessageInternalBDirective } from '../main-nav/directives/message/message-internal-b.directive';
import { MessageInternalTDirective } from '../main-nav/directives/message/message-internal-t.directive';
import { MessageSynchronousDirective } from '../main-nav/directives/message/message-synchronous.directive';
import { NodeDirective } from '../main-nav/directives/node/node.directive';
import { DraggablePathBDirective } from '../main-nav/directives/paths/draggable-path-b.directive';
import { DraggablePathLDirective } from '../main-nav/directives/paths/draggable-path-l.directive';
import { DraggablePathLbDirective } from '../main-nav/directives/paths/draggable-path-lb.directive';
import { DraggablePathLtDirective } from '../main-nav/directives/paths/draggable-path-lt.directive';
import { DraggablePathRDirective } from '../main-nav/directives/paths/draggable-path-r.directive';
import { DraggablePathRbDirective } from '../main-nav/directives/paths/draggable-path-rb.directive';
import { DraggablePathRtDirective } from '../main-nav/directives/paths/draggable-path-rt.directive';
import { DraggablePathTDirective } from '../main-nav/directives/paths/draggable-path-t.directive';
import { RequiredBDirective } from '../main-nav/directives/required/required-b.directive';
import { RequiredLDirective } from '../main-nav/directives/required/required-l.directive';
import { RequiredLbDirective } from '../main-nav/directives/required/required-lb.directive';
import { RequiredLtDirective } from '../main-nav/directives/required/required-lt.directive';
import { RequiredRDirective } from '../main-nav/directives/required/required-r.directive';
import { RequiredRbDirective } from '../main-nav/directives/required/required-rb.directive';
import { RequiredRtDirective } from '../main-nav/directives/required/required-rt.directive';
import { RequiredTDirective } from '../main-nav/directives/required/required-t.directive';

@Injectable({
  providedIn: 'root'
})
export class FetchElementsService {
  renderer2: Renderer2;
  constructor() { }

  addDirective(elem: UmlComponent, umlDiagramElem: ElementRef) {

    if (elem.type.startsWith('lifeline')) {
      const lifelineElem = umlDiagramElem;
      let addDirectiveClass = new LifelineDirective(lifelineElem);
      addDirectiveClass.ngOnInit();
      const svgTextElem = new ElementRef(umlDiagramElem.nativeElement.children[2]);
      svgTextElem.nativeElement.addEventListener('dblclick', () => this.onTextEdit(svgTextElem), true);
    }

    if (elem.type === "activation") {
      const activationElem = umlDiagramElem;
      let addDirectiveClass = new ActivationDirective(activationElem);
      addDirectiveClass.ngOnInit();
    }

    if (elem.type === "fragment") {
      const fragmentElem = umlDiagramElem;
      let addDirectiveClass = new FragmentDirective(fragmentElem);
      addDirectiveClass.ngOnInit();
      const svgTextElem = new ElementRef(umlDiagramElem.nativeElement.children[2]);
      svgTextElem.nativeElement.addEventListener('dblclick', () => this.onTextEdit(svgTextElem), true);
    }

    if (elem.type === "message_synchronous") {
      const messageElem = umlDiagramElem;
      let addDirectiveClass = new MessageSynchronousDirective(messageElem);
      addDirectiveClass.ngOnInit();
    }
    if (elem.type === "path_dependency_l") {
      const pathElem = umlDiagramElem;
      const addDirective = new ImplemetsLDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_association_r") {
      const pathElem = umlDiagramElem;
      const addDirective = new AssociationRDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "message_internal_b") {
      const messageElem = umlDiagramElem;
      let addDirectiveClass = new MessageInternalBDirective(messageElem);
      addDirectiveClass.ngOnInit();
    }

    if (elem.type === "message_internal_t") {
      const messageElem = umlDiagramElem;
      let addDirectiveClass = new MessageInternalTDirective(messageElem);
      addDirectiveClass.ngOnInit();
    }

    if (elem.type === 'class' || elem.type === 'interface') { //dodawanie dyrektyw i eventListenerów
      const rectClass = new ElementRef(umlDiagramElem.nativeElement.children[0].children[0]);
      const rectMethod = new ElementRef(umlDiagramElem.nativeElement.children[0].children[1]);
      const rectField = new ElementRef(umlDiagramElem.nativeElement.children[0].children[2]);
      let addDirectiveClass = new ClassClassnameDirective(rectClass);
      addDirectiveClass.ngOnInit();
      let addDirectiveMethod = new ClassMethodDirective(rectMethod);
      addDirectiveMethod.ngOnInit();
      let addDirectiveField = new ClassFieldDirective(rectField);
      addDirectiveField.ngOnInit();

      const svgTextClassElem = new ElementRef(umlDiagramElem.nativeElement.children[1]);
      const svgTextMethodElem = new ElementRef(umlDiagramElem.nativeElement.children[2]);
      const svgTextFieldElem = new ElementRef(umlDiagramElem.nativeElement.children[3]);

      svgTextClassElem.nativeElement.addEventListener('dblclick', () => this.onTextEdit(svgTextClassElem), true);
      svgTextMethodElem.nativeElement.addEventListener('dblclick', () => this.onTextEdit(svgTextMethodElem), true);
      svgTextFieldElem.nativeElement.addEventListener('dblclick', () => this.onTextEdit(svgTextFieldElem), true);

      const svgRectGroup = umlDiagramElem.nativeElement.children[0];
    }
    if (elem.type === 'text') {
      const textElem = new ElementRef(umlDiagramElem.nativeElement);
      textElem.nativeElement.addEventListener('dblclick', () => this.onTextEdit(textElem), true);
      let addDirective = new MoveableDraggableDirective(textElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_r") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new DraggablePathRDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_rt") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new DraggablePathRtDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_t") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new DraggablePathTDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_lt") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new DraggablePathLtDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_l") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new DraggablePathLDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_lb") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new DraggablePathLbDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_b") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new DraggablePathBDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_rb") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new DraggablePathRbDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_implements_r") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new ImplemetsRDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_implements_rt") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new ImplemetsRtDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_implements_t") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new ImplemetsTDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_implements_lt") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new ImplemetsLtDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_implements_l") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new ImplemetsLDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_implements_lb") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new ImplemetsLbDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_implements_b") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new ImplemetsBDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_implements_rb") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new ImplemetsRbDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_dependency_r") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new ImplemetsRDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_dependency_rt") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new ImplemetsRtDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_dependency_t") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new ImplemetsTDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_dependency_lt") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new ImplemetsLtDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_dependency_l") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new ImplemetsLDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_dependency_lb") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new ImplemetsLbDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_dependency_b") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new ImplemetsBDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_dependency_rb") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new ImplemetsRbDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_association_r") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new AssociationRDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_association_rt") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new AssociationRtDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_association_t") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new AssociationTDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_association_lt") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new AssociationLtDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_association_l") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new AssociationLDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_association_lb") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new AssociationLbDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_association_b") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new AssociationBDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_association_rb") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new AssociationRbDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_aggregation_r") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new AggregationRDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_aggregation_rt") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new AggregationRtDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_aggregation_t") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new AggregationTDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_aggregation_lt") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new AggregationLtDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_aggregation_l") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new AggregationLDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_aggregation_lb") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new AggregationLbDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_aggregation_b") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new AggregationBDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_aggregation_rb") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new AggregationRbDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_composition_r") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new CompositionRDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_composition_rt") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new CompositionRtDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_composition_t") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new CompositionTDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_composition_lt") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new CompositionLtDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_composition_l") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new CompositionLDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_composition_lb") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new CompositionLbDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_composition_b") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new CompositionBDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_line_r") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new LineRDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_line_rt") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new LineRtDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_line_t") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new LineTDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_line_lt") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new LineRtDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_required_r") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new RequiredRDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_required_rt") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new RequiredRtDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_required_t") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new RequiredTDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_required_lt") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new RequiredLtDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_required_l") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new RequiredLDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_required_lb") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new RequiredLbDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_required_b") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new RequiredBDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "path_required_rb") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement.children[0]);
      const addDirective = new RequiredRbDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "provided_interface_r") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement);
      const addDirective = new InterfaceRDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "provided_interface_rt") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement);
      const addDirective = new InterfaceRtDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "provided_interface_t") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement);
      const addDirective = new InterfaceTDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "provided_interface_lt") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement);
      const addDirective = new InterfaceLtDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "provided_interface_l") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement);
      const addDirective = new InterfaceLDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "provided_interface_lb") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement);
      const addDirective = new InterfaceLbDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "provided_interface_b") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement);
      const addDirective = new InterfaceBDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "provided_interface_rb") {
      const pathElem = new ElementRef(umlDiagramElem.nativeElement);
      const addDirective = new InterfaceRbDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (elem.type === "use_case") {
      const umlElem = new ElementRef(umlDiagramElem.nativeElement);
      let addDirectiveClass = new MoveableDraggableDirective(umlElem);
      addDirectiveClass.ngOnInit();
      const svgTextElem = new ElementRef(umlDiagramElem.nativeElement.children[1]);
      svgTextElem.nativeElement.addEventListener('dblclick', () => this.onTextEdit(svgTextElem), true);
    }
    if (elem.type === "actor") {
      const umlElem = new ElementRef(umlDiagramElem.nativeElement);
      let addDirectiveClass = new MoveableDraggableDirective(umlElem);
      addDirectiveClass.ngOnInit();
      const svgTextElem = new ElementRef(umlDiagramElem.nativeElement.children[2]);
      svgTextElem.nativeElement.addEventListener('dblclick', () => this.onTextEdit(svgTextElem), true);
    }
    if (elem.type === "system") {
      const umlElem = new ElementRef(umlDiagramElem.nativeElement);
      let addDirectiveClass = new ActivationDirective(umlElem);
      addDirectiveClass.ngOnInit();
    }
    if (elem.type === "component") {
      const umlElem = new ElementRef(umlDiagramElem.nativeElement);
      let addDirectiveClass = new ComponentDirective(umlElem);
      addDirectiveClass.ngOnInit();
      const svgTextElem = new ElementRef(umlDiagramElem.nativeElement.children[1]);
      svgTextElem.nativeElement.addEventListener('dblclick', () => this.onTextEdit(svgTextElem), true);
    }
    if (elem.type === "port") {
      const umlElem = new ElementRef(umlDiagramElem.nativeElement);
      let addDirectiveClass = new MoveableDraggableDirective(umlElem);
      addDirectiveClass.ngOnInit();
    }
    if (elem.type === "constraint") {
      const umlElem = new ElementRef(umlDiagramElem.nativeElement);
      let addDirectiveClass = new MoveableDraggableDirective(umlElem);
      addDirectiveClass.ngOnInit();
      const svgTextElem = new ElementRef(umlDiagramElem.nativeElement.children[2]);
      svgTextElem.nativeElement.addEventListener('dblclick', () => this.onTextEdit(svgTextElem), true);
    }
    if (elem.type === "node") {
      const umlElem = new ElementRef(umlDiagramElem.nativeElement);
      let addDirectiveClass = new NodeDirective(umlElem);
      addDirectiveClass.ngOnInit();
      const svgTextElem = new ElementRef(umlDiagramElem.nativeElement.children[1]);
      svgTextElem.nativeElement.addEventListener('dblclick', () => this.onTextEdit(svgTextElem), true);
    }
    if (elem.type === "artifact") {
      const umlElem = new ElementRef(umlDiagramElem.nativeElement);
      let addDirectiveClass = new ArtifactDirective(umlElem);
      addDirectiveClass.ngOnInit();
      const svgTextElem = new ElementRef(umlDiagramElem.nativeElement.children[2]);
      svgTextElem.nativeElement.addEventListener('dblclick', () => this.onTextEdit(svgTextElem), true);
    }
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
}

