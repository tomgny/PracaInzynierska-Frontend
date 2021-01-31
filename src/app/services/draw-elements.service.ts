import { ElementRef, Injectable, Renderer2 } from '@angular/core';
import { ClassClassnameDirective } from 'src/app/main-nav/directives/class-interface/class-classname.directive';
import { ClassFieldDirective } from 'src/app/main-nav/directives/class-interface/class-field.directive';
import { ClassMethodDirective } from 'src/app/main-nav/directives/class-interface/class-method.directive';
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
export class DrawElementsService {
  renderer2: Renderer2;

  constructor() { }

  drawElement(elem: ElementRef, type: string, X, Y) {
    if (type === 'text') {
      elem.nativeElement.children[0].setAttributeNS(null, "y", Y.toString());
      elem.nativeElement.children[0].setAttributeNS(null, "x", X.toString());

      const svgTextElem = new ElementRef(elem.nativeElement);
      console.log('text: ' + svgTextElem);

      svgTextElem.nativeElement.addEventListener('dblclick', () => this.onTextEdit(svgTextElem), true);

      let addDirective = new MoveableDraggableDirective(svgTextElem);
      addDirective.ngOnInit();
    }

    if (type === "class") {
      //console.log(elem);
      elem.nativeElement.children[0].children[0].setAttributeNS(null, "y", Y.toString());
      elem.nativeElement.children[0].children[0].setAttributeNS(null, "x", X.toString());

      elem.nativeElement.children[0].children[1].setAttributeNS(null, "y", (Y + 20).toString());
      elem.nativeElement.children[0].children[1].setAttributeNS(null, "x", X.toString());

      elem.nativeElement.children[0].children[2].setAttributeNS(null, "y", (Y + 40).toString());
      elem.nativeElement.children[0].children[2].setAttributeNS(null, "x", X.toString());

      elem.nativeElement.children[1].children[0].setAttributeNS(null, "y", (Y + 15).toString());
      elem.nativeElement.children[1].children[0].setAttributeNS(null, "x", (X + 4).toString());

      elem.nativeElement.children[2].children[0].setAttributeNS(null, "y", (Y + 35).toString());
      elem.nativeElement.children[2].children[0].setAttributeNS(null, "x", (X + 4).toString());

      elem.nativeElement.children[3].children[0].setAttributeNS(null, "y", (Y + 55).toString());
      elem.nativeElement.children[3].children[0].setAttributeNS(null, "x", (X + 4).toString());

      const rectClass = new ElementRef(elem.nativeElement.children[0].children[0]);
      const rectMethod = new ElementRef(elem.nativeElement.children[0].children[1]);
      const rectField = new ElementRef(elem.nativeElement.children[0].children[2]);
      let addDirectiveClass = new ClassClassnameDirective(rectClass);
      addDirectiveClass.ngOnInit();
      let addDirectiveMethod = new ClassMethodDirective(rectMethod);
      addDirectiveMethod.ngOnInit();
      let addDirectiveField = new ClassFieldDirective(rectField);
      addDirectiveField.ngOnInit();

      const svgTextClassElem = new ElementRef(elem.nativeElement.children[1]);
      const svgTextMethodElem = new ElementRef(elem.nativeElement.children[2]);
      const svgTextFieldElem = new ElementRef(elem.nativeElement.children[3]);
      console.log("CLASS TEXT: " + svgTextClassElem);


      svgTextClassElem.nativeElement.addEventListener('dblclick', () => this.onTextEdit(svgTextClassElem), true);
      svgTextMethodElem.nativeElement.addEventListener('dblclick', () => this.onTextEdit(svgTextMethodElem), true);
      svgTextFieldElem.nativeElement.addEventListener('dblclick', () => this.onTextEdit(svgTextFieldElem), true);

    }

    if (type === "lifeline_object") {
      console.log(elem);
      elem.nativeElement.children[0].children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 3) + "  " + Y
        + " L " + (X + 3) + "  " + (Y + 40)
        + " L " + X + "  " + (Y + 40)
        + " M " + X + "  " + (Y + 240)
        + " L " + (X + 3) + "  " + (Y + 240)
        + " L " + (X + 3) + "  " + (Y + 200)
        + " L " + X + "  " + (Y + 200)
        + " M " + X + "  " + (Y + 50)
        + " L " + (X + 3) + "  " + (Y + 50)
        + " L " + (X + 3) + "  " + (Y + 90)
        + " L " + X + "  " + (Y + 90)
        + " M " + X + "  " + (Y + 140)
        + " L " + (X + 3) + "  " + (Y + 140)
        + " L " + (X + 3) + "  " + (Y + 100)
        + " L " + X + "  " + (Y + 100)
        + " M " + X + "  " + (Y + 190)
        + " L " + (X + 3) + "  " + (Y + 190)
        + " L " + (X + 3) + "  " + (Y + 150)
        + " L " + X + "  " + (Y + 150));

      elem.nativeElement.children[1].children[0].setAttributeNS(null, "y", (Y - 75).toString());
      elem.nativeElement.children[1].children[0].setAttributeNS(null, "x", (X - 75).toString());
      elem.nativeElement.children[2].children[0].setAttributeNS(null, "y", (Y - 40).toString());
      elem.nativeElement.children[2].children[0].setAttributeNS(null, "x", (X - 70).toString());

      const group = elem;
      let addDirectiveClass = new LifelineDirective(group);
      addDirectiveClass.ngOnInit();

      const svgTextElem = new ElementRef(elem.nativeElement.children[2]);
      svgTextElem.nativeElement.addEventListener('dblclick', () => this.onTextEdit(svgTextElem), true);
      console.log(svgTextElem);

    }

    if (type === "lifeline_actor") {
      console.log(elem);
      elem.nativeElement.children[0].children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 3) + "  " + Y
        + " L " + (X + 3) + "  " + (Y + 40)
        + " L " + X + "  " + (Y + 40)
        + " M " + X + "  " + (Y + 240)
        + " L " + (X + 3) + "  " + (Y + 240)
        + " L " + (X + 3) + "  " + (Y + 200)
        + " L " + X + "  " + (Y + 200)
        + " M " + X + "  " + (Y + 50)
        + " L " + (X + 3) + "  " + (Y + 50)
        + " L " + (X + 3) + "  " + (Y + 90)
        + " L " + X + "  " + (Y + 90)
        + " M " + X + "  " + (Y + 140)
        + " L " + (X + 3) + "  " + (Y + 140)
        + " L " + (X + 3) + "  " + (Y + 100)
        + " L " + X + "  " + (Y + 100)
        + " M " + X + "  " + (Y + 190)
        + " L " + (X + 3) + "  " + (Y + 190)
        + " L " + (X + 3) + "  " + (Y + 150)
        + " L " + X + "  " + (Y + 150)
        + " M " + (X + -8) + "  " + (Y + -26)
        + " L " + X + "  " + (Y + -49)
        + " L " + (X + 1) + "  " + (Y + -48)
        + " L " + (X + -7) + "  " + (Y + -26)
        + " M " + (X + 11) + "  " + (Y + -26)
        + " L " + (X + 2) + "  " + (Y + -48)
        + " L " + (X + 3) + "  " + (Y + -49)
        + " L " + (X + 12) + "  " + (Y + -26)
        + " M " + (X + 1) + "  " + (Y + -49)
        + " L " + (X + 2) + "  " + (Y + -49)
        + " L " + (X + 2) + "  " + (Y + -76)
        + " L " + (X + 1) + "  " + (Y + -76)
        + " M " + (X + -7) + "  " + (Y + -70)
        + " L " + (X + -7) + "  " + (Y + -69)
        + " L " + (X + 10) + "  " + (Y + -69)
        + " L " + (X + 10) + "  " + (Y + -70));

      elem.nativeElement.children[1].children[0].setAttributeNS(null, "cy", (Y - 80).toString());
      elem.nativeElement.children[1].children[0].setAttributeNS(null, "cx", (X + 1).toString());
      elem.nativeElement.children[2].children[0].setAttributeNS(null, "y", (Y - 10).toString());
      elem.nativeElement.children[2].children[0].setAttributeNS(null, "x", (X - 18).toString());


      const group = elem;
      let addDirectiveClass = new LifelineDirective(group);
      addDirectiveClass.ngOnInit();

      const svgTextElem = new ElementRef(elem.nativeElement.children[2]);
      svgTextElem.nativeElement.addEventListener('dblclick', () => this.onTextEdit(svgTextElem), true);
      console.log(svgTextElem);

    }

    if (type === "lifeline_c_boundary") {
      console.log(elem);
      elem.nativeElement.children[0].children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 3) + "  " + Y
        + " L " + (X + 3) + "  " + (Y + 40)
        + " L " + X + "  " + (Y + 40)
        + " M " + X + "  " + (Y + 240)
        + " L " + (X + 3) + "  " + (Y + 240)
        + " L " + (X + 3) + "  " + (Y + 200)
        + " L " + X + "  " + (Y + 200)
        + " M " + X + "  " + (Y + 50)
        + " L " + (X + 3) + "  " + (Y + 50)
        + " L " + (X + 3) + "  " + (Y + 90)
        + " L " + X + "  " + (Y + 90)
        + " M " + X + "  " + (Y + 140)
        + " L " + (X + 3) + "  " + (Y + 140)
        + " L " + (X + 3) + "  " + (Y + 100)
        + " L " + X + "  " + (Y + 100)
        + " M " + X + "  " + (Y + 190)
        + " L " + (X + 3) + "  " + (Y + 190)
        + " L " + (X + 3) + "  " + (Y + 150)
        + " L " + X + "  " + (Y + 150)
        + " M " + (X + -26) + "  " + (Y + -53)
        + " L " + (X + -21) + "  " + (Y + -53)
        + " L " + (X + -21) + "  " + (Y + -54)
        + " L " + (X + -26) + "  " + (Y + -54)
        + " L " + (X + -26) + "  " + (Y + -66)
        + " L " + (X + -27) + "  " + (Y + -66)
        + " L " + (X + -27) + "  " + (Y + -41)
        + " L " + (X + -26) + "  " + (Y + -41));

      elem.nativeElement.children[1].children[0].setAttributeNS(null, "cy", (Y - 55).toString());
      elem.nativeElement.children[1].children[0].setAttributeNS(null, "cx", (X + 1).toString());
      elem.nativeElement.children[2].children[0].setAttributeNS(null, "y", (Y - 10).toString());
      elem.nativeElement.children[2].children[0].setAttributeNS(null, "x", (X - 25).toString());


      const group = elem;
      let addDirectiveClass = new LifelineDirective(group);
      addDirectiveClass.ngOnInit();

      const svgTextElem = new ElementRef(elem.nativeElement.children[2]);
      svgTextElem.nativeElement.addEventListener('dblclick', () => this.onTextEdit(svgTextElem), true);
      console.log(svgTextElem);

    }

    if (type === "lifeline_c_control") {
      console.log(elem);
      elem.nativeElement.children[0].children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 3) + "  " + Y
        + " L " + (X + 3) + "  " + (Y + 40)
        + " L " + X + "  " + (Y + 40)
        + " M " + X + "  " + (Y + 240)
        + " L " + (X + 3) + "  " + (Y + 240)
        + " L " + (X + 3) + "  " + (Y + 200)
        + " L " + X + "  " + (Y + 200)
        + " M " + X + "  " + (Y + 50)
        + " L " + (X + 3) + "  " + (Y + 50)
        + " L " + (X + 3) + "  " + (Y + 90)
        + " L " + X + "  " + (Y + 90)
        + " M " + X + "  " + (Y + 140)
        + " L " + (X + 3) + "  " + (Y + 140)
        + " L " + (X + 3) + "  " + (Y + 100)
        + " L " + X + "  " + (Y + 100)
        + " M " + X + "  " + (Y + 190)
        + " L " + (X + 3) + "  " + (Y + 190)
        + " L " + (X + 3) + "  " + (Y + 150)
        + " L " + X + "  " + (Y + 150)
        + " M " + (X + 3) + "  " + (Y + -68)
        + " L " + (X + -2) + "  " + (Y + -74)
        + " L " + (X + -1) + "  " + (Y + -75)
        + " L " + (X + 4) + "  " + (Y + -69)
        + " M " + (X + -1) + "  " + (Y + -75)
        + " L " + (X + 5) + "  " + (Y + -80)
        + " L " + (X + 4) + "  " + (Y + -81)
        + " L " + (X + -2) + "  " + (Y + -76)
        + " L " + (X + -2) + "  " + (Y + -74));

      elem.nativeElement.children[1].children[0].setAttributeNS(null, "cy", (Y - 55).toString());
      elem.nativeElement.children[1].children[0].setAttributeNS(null, "cx", (X + 1).toString());
      elem.nativeElement.children[2].children[0].setAttributeNS(null, "y", (Y - 10).toString());
      elem.nativeElement.children[2].children[0].setAttributeNS(null, "x", (X - 25).toString());


      const group = elem;
      let addDirectiveClass = new LifelineDirective(group);
      addDirectiveClass.ngOnInit();

      const svgTextElem = new ElementRef(elem.nativeElement.children[2]);
      svgTextElem.nativeElement.addEventListener('dblclick', () => this.onTextEdit(svgTextElem), true);
      console.log(svgTextElem);

    }

    if (type === "lifeline_c_entity") {
      console.log(elem);
      elem.nativeElement.children[0].children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 3) + "  " + Y
        + " L " + (X + 3) + "  " + (Y + 40)
        + " L " + X + "  " + (Y + 40)
        + " M " + X + "  " + (Y + 240)
        + " L " + (X + 3) + "  " + (Y + 240)
        + " L " + (X + 3) + "  " + (Y + 200)
        + " L " + X + "  " + (Y + 200)
        + " M " + X + "  " + (Y + 50)
        + " L " + (X + 3) + "  " + (Y + 50)
        + " L " + (X + 3) + "  " + (Y + 90)
        + " L " + X + "  " + (Y + 90)
        + " M " + X + "  " + (Y + 140)
        + " L " + (X + 3) + "  " + (Y + 140)
        + " L " + (X + 3) + "  " + (Y + 100)
        + " L " + X + "  " + (Y + 100)
        + " M " + X + "  " + (Y + 190)
        + " L " + (X + 3) + "  " + (Y + 190)
        + " L " + (X + 3) + "  " + (Y + 150)
        + " L " + X + "  " + (Y + 150)
        + " M " + (X + 23) + "  " + (Y + -34)
        + " L " + (X + -20) + "  " + (Y + -34)
        + " L " + (X + -20) + "  " + (Y + -35)
        + " L " + (X + 23) + "  " + (Y + -35)
      );

      elem.nativeElement.children[1].children[0].setAttributeNS(null, "cy", (Y - 55).toString());
      elem.nativeElement.children[1].children[0].setAttributeNS(null, "cx", (X + 1).toString());
      elem.nativeElement.children[2].children[0].setAttributeNS(null, "y", (Y - 10).toString());
      elem.nativeElement.children[2].children[0].setAttributeNS(null, "x", (X - 18).toString());

      const group = elem;
      let addDirectiveClass = new LifelineDirective(group);
      addDirectiveClass.ngOnInit();

      const svgTextElem = new ElementRef(elem.nativeElement.children[2]);
      svgTextElem.nativeElement.addEventListener('dblclick', () => this.onTextEdit(svgTextElem), true);
      console.log(svgTextElem);

    }

    if (type === "activation") {
      console.log(elem);
      elem.nativeElement.children[0].setAttributeNS(null, "y", Y.toString());
      elem.nativeElement.children[0].setAttributeNS(null, "x", X.toString());

      let addDirectiveClass = new ActivationDirective(elem);
      addDirectiveClass.ngOnInit();
    }

    if (type === "fragment") {
      console.log(elem);
      elem.nativeElement.children[0].children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 1) + "  " + Y
        + " L " + (X + 1) + "  " + (Y + 16)
        + " L " + X + "  " + (Y + 16)
        + " M " + X + "  " + (Y + 16)
        + " L " + (X + -21) + "  " + (Y + 37)
        + " L " + (X + -21) + "  " + (Y + 38)
        + " L " + (X + 1) + "  " + (Y + 16)
        + " M " + (X + -21) + "  " + (Y + 37)
        + " L " + (X + -80) + "  " + (Y + 37)
        + " L " + (X + -80) + "  " + (Y + 38)
        + " L " + (X + -21) + "  " + (Y + 38)
      );

      elem.nativeElement.children[1].children[0].setAttributeNS(null, "y", Y.toString());
      elem.nativeElement.children[1].children[0].setAttributeNS(null, "x", (X - 81).toString());
      elem.nativeElement.children[2].children[0].setAttributeNS(null, "y", (Y + 20).toString());
      elem.nativeElement.children[2].children[0].setAttributeNS(null, "x", (X - 70).toString());

      let addDirectiveClass = new FragmentDirective(elem);
      addDirectiveClass.ngOnInit();

      const svgTextElem = new ElementRef(elem.nativeElement.children[2]);
      svgTextElem.nativeElement.addEventListener('dblclick', () => this.onTextEdit(svgTextElem), true);
      console.log(svgTextElem);

    }

    if (type === "message_synchronous") { //M -86 -5 L -86 5 L 4 5 L 4 -5 M 5 -15 L 5 15 L 22 0 M 4 18 L 4 -18 L 27 0
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + X + "  " + (Y + 10)
        + " L " + (X + 90) + "  " + (Y + 10)
        + " L " + (X + 90) + "  " + Y
        + " M " + (X + 90) + "  " + (Y + 23)
        + " L " + (X + 90) + "  " + (Y + -13)
        + " L " + (X + 113) + "  " + (Y + 5));

      let addDirectiveClass = new MessageSynchronousDirective(elem);
      addDirectiveClass.ngOnInit();
    }

    if (type === "message_internal_b") { //M -86 -5 L -86 5 L 4 5 L 4 -5 M 5 -15 L 5 15 L 22 0 M 4 18 L 4 -18 L 27 0
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 24) + "  " + Y
        + " L " + (X + 24) + "  " + (Y + -3)
        + " L " + X + "  " + (Y + -3)
        + " M " + (X + 27) + "  " + (Y + -3)
        + " L " + (X + 24) + "  " + (Y + -3)
        + " L " + (X + 24) + "  " + (Y + 24)
        + " L " + (X + 27) + "  " + (Y + 24)
        + " M " + (X + 27) + "  " + (Y + 27)
        + " L " + (X + 17) + "  " + (Y + 27)
        + " L " + (X + 17) + "  " + (Y + 24)
        + " L " + (X + 27) + "  " + (Y + 24)
        + " M " + (X + 6) + "  " + (Y + 26)
        + " L " + (X + 17) + "  " + (Y + 16)
        + " L " + (X + 17) + "  " + (Y + 35));

      let addDirectiveClass = new MessageInternalBDirective(elem);
      addDirectiveClass.ngOnInit();
    }

    if (type === "message_internal_t") { //M -86 -5 L -86 5 L 4 5 L 4 -5 M 5 -15 L 5 15 L 22 0 M 4 18 L 4 -18 L 27 0
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 24) + "  " + Y
        + " L " + (X + 24) + "  " + (Y + -3)
        + " L " + X + "  " + (Y + -3)
        + " M " + (X + 27) + "  " + Y
        + " L " + (X + 24) + "  " + Y
        + " L " + (X + 24) + "  " + (Y + -27)
        + " L " + (X + 27) + "  " + (Y + -27)
        + " M " + (X + 27) + "  " + (Y + -27)
        + " L " + (X + 17) + "  " + (Y + -27)
        + " L " + (X + 17) + "  " + (Y + -30)
        + " L " + (X + 27) + "  " + (Y + -30)
        + " M " + (X + 6) + "  " + (Y + -28)
        + " L " + (X + 17) + "  " + (Y + -38)
        + " L " + (X + 17) + "  " + (Y + -19));
      let addDirectiveClass = new MessageInternalTDirective(elem);
      addDirectiveClass.ngOnInit();
    }

    if (type === "path_r") { //M -86 -5 L -86 5 L 4 5 L 4 -5 M 5 -15 L 5 15 L 22 0 M 4 18 L 4 -18 L 27 0
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        "M " + X + " " + Y
        + " L " + X + " " + (Y + 10)
        + " L " + (X + 90) + " " + (Y + 10)
        + " L " + (X + 90) + " " + Y
        + " M " + (X + 91) + " " + (Y - 10)
        + " L " + (X + 91) + " " + (Y + 20)
        + " L " + (X + 108) + " " + (Y + 5)
        + " M " + (X + 90) + " " + (Y + 23)
        + " L " + (X + 90) + " " + (Y - 13)
        + " L " + (X + 113) + " " + (Y + 5));
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new DraggablePathRDirective(pathElem);
      addDirective.ngOnInit();
    }

    if (type === "path_rt") { //M -61 64 L -55 70 L 0 16 L -6 10 M 7 23 L -13 3 L 12 -1 M -10 5 L 5 20 L 7 4
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        "M " + X + " " + Y
        + " L " + (X + 6) + " " + (Y + 6)
        + " L " + (X + 61) + " " + (Y - 48)
        + " L " + (X + 55) + " " + (Y - 54)
        + " M " + (X + 68) + " " + (Y - 41)
        + " L " + (X + 48) + " " + (Y - 61)
        + " L " + (X + 73) + " " + (Y - 65)
        + " M " + (X + 51) + " " + (Y - 59)
        + " L " + (X + 66) + " " + (Y - 44)
        + " L " + (X + 68) + " " + (Y - 60));
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new DraggablePathRtDirective(pathElem);
      addDirective.ngOnInit();
    }

    if (type === "path_t") { //M -57 33 L -50 33 L -49 -38 L -57 -38 M -65 -39 L -41 -39 L -53 -51 M -38 -38 L -68 -38 L -53 -56
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        "M " + X + " " + Y
        + " L " + (X + 8) + " " + Y
        + " L " + (X + 8) + " " + (Y - 71)
        + " L " + X + " " + (Y - 71)
        + " M " + (X - 9) + " " + (Y - 72)
        + " L " + (X + 16) + " " + (Y - 72)
        + " L " + (X + 4) + " " + (Y - 84)
        + " M " + (X + 19) + " " + (Y - 71)
        + " L " + (X - 11) + " " + (Y - 71)
        + " L " + (X + 4) + " " + (Y - 89));
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new DraggablePathTDirective(pathElem);
      addDirective.ngOnInit();
    }

    if (type === "path_lt") { //M -61 64 L -67 70 L -122 16 L -115 9 M -128 21 L -129 4 L -111 4 M -134 -1 L -130 24 L -108 2
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        "M " + X + " " + Y
        + " L " + (X - 6) + " " + (Y + 6)
        + " L " + (X - 61) + " " + (Y - 48)
        + " L " + (X - 54) + " " + (Y - 55)
        + " M " + (X - 67) + " " + (Y - 43)
        + " L " + (X - 68) + " " + (Y - 60)
        + " L " + (X - 50) + " " + (Y - 60)
        + " M " + (X - 73) + " " + (Y - 65)
        + " L " + (X - 69) + " " + (Y - 40)
        + " L " + (X - 47) + " " + (Y - 62));
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new DraggablePathLtDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_l") { //M -86 -5 L -86 5 L -162 5 L -162 -5 M -164 -15 L -164 15 L -180 0 M -162 18 L -162 -18 L -185 0
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        "M " + X + " " + Y
        + " L " + X + " " + (Y + 10)
        + " L " + (X - 76) + " " + (Y + 10)
        + " L " + (X - 76) + " " + Y
        + " M " + (X - 78) + " " + (Y - 10)
        + " L " + (X - 78) + " " + (Y + 20)
        + " L " + (X - 94) + " " + (Y + 5)
        + " M " + (X - 76) + " " + (Y + 23)
        + " L " + (X - 76) + " " + (Y - 13)
        + " L " + (X - 99) + " " + (Y + 5));
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new DraggablePathLDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_lb") { //M -61 64 L -55 70 L -98 110 L -104 104 M -90 118 L -112 96 L -116 120 M -110 99 L -93 116 L -111 115
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        "M " + X + " " + Y
        + " L " + (X + 6) + " " + (Y + 6)
        + " L " + (X - 37) + " " + (Y + 46)
        + " L " + (X - 43) + " " + (Y + 40)
        + " M " + (X - 29) + " " + (Y + 54)
        + " L " + (X - 51) + " " + (Y + 32)
        + " L " + (X - 55) + " " + (Y + 56)
        + " M " + (X - 49) + " " + (Y + 33)
        + " L " + (X - 32) + " " + (Y + 52)
        + " L " + (X - 50) + " " + (Y + 51));
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new DraggablePathLbDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_b") { //M -57 33 L -50 33 L -50 107 L -57 107 M -64 108 L -42 108 L -53 121 M -38 107 L -68 107 L -53 126
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        "M " + X + " " + Y
        + " L " + (X + 7) + " " + Y
        + " L " + (X + 7) + " " + (Y + 74)
        + " L " + X + " " + (Y + 74)
        + " M " + (X - 7) + " " + (Y + 75)
        + " L " + (X + 15) + " " + (Y + 75)
        + " L " + (X + 4) + " " + (Y + 91)
        + " M " + (X + 19) + " " + (Y + 74)
        + " L " + (X - 11) + " " + (Y + 74)
        + " L " + (X + 4) + " " + (Y + 96));
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new DraggablePathBDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_rb") { //M -61 64 L -67 70 L -12 120 L -7 115 M -17 128 L 5 130 L 1 110 M 10 134 L -21 129 L 2 106
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        "M " + X + " " + Y
        + " L " + (X - 6) + " " + (Y + 6)
        + " L " + (X + 49) + " " + (Y + 56)
        + " L " + (X + 54) + " " + (Y + 51)
        + " M " + (X + 44) + " " + (Y + 64)
        + " L " + (X + 66) + " " + (Y + 66)
        + " L " + (X + 62) + " " + (Y + 46)
        + " M " + (X + 71) + " " + (Y + 70)
        + " L " + (X + 40) + " " + (Y + 65)
        + " L " + (X + 63) + " " + (Y + 42));
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new DraggablePathRbDirective(pathElem);
      addDirective.ngOnInit();
    }

    if (type === "path_implements_r") { //M -172 420 L -172 440 L -150 440 L -150 420 M -138 420 L -138 440 L -116 440 L -116 420 M -104 420 L -104 440 L -82 440 L -82 420 M -70 420 L -70 440 L -48 440 L -48 420 M -36 420 L -36 440 L -14 440 L -14 420 M 0 400 L 0 460 L 36 430 M -2 466 L -2 394 L 46 430
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + X + "  " + (Y + 10)
        + " L " + (X + 11) + "  " + (Y + 10)
        + " L " + (X + 11) + "  " + Y
        + " M " + (X + 17) + "  " + Y
        + " L " + (X + 17) + "  " + (Y + 10)
        + " L " + (X + 28) + "  " + (Y + 10)
        + " L " + (X + 28) + "  " + Y
        + " M " + (X + 34) + "  " + Y
        + " L " + (X + 34) + "  " + (Y + 10)
        + " L " + (X + 45) + "  " + (Y + 10)
        + " L " + (X + 45) + "  " + Y
        + " M " + (X + 51) + "  " + Y
        + " L " + (X + 51) + "  " + (Y + 10)
        + " L " + (X + 62) + "  " + (Y + 10)
        + " L " + (X + 62) + "  " + Y
        + " M " + (X + 68) + "  " + Y
        + " L " + (X + 68) + "  " + (Y + 10)
        + " L " + (X + 79) + "  " + (Y + 10)
        + " L " + (X + 79) + "  " + Y
        + " M " + (X + 86) + "  " + (Y + -10)
        + " L " + (X + 86) + "  " + (Y + 20)
        + " L " + (X + 104) + "  " + (Y + 5)
        + " M " + (X + 85) + "  " + (Y + 23)
        + " L " + (X + 85) + "  " + (Y + -13)
        + " L " + (X + 109) + "  " + (Y + 5)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new ImplemetsRDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_implements_rt") { //M -66 70 L -59 76 L -50 67 L -57 61 M -53 57 L -46 63 L -38 55 L -45 49 M -41 45 L -34 51 L -26 43 L -33 37 M -29 33 L -22 39 L -14 31 L -21 25 M -17 21 L -10 27 L -2 19 L -9 13 M 7 23 L -13 3 L 12 -1 M -10 5 L 5 20 L 8 3
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 7) + "  " + (Y + 6)
        + " L " + (X + 16) + "  " + (Y + -3)
        + " L " + (X + 9) + "  " + (Y + -9)
        + " M " + (X + 13) + "  " + (Y + -13)
        + " L " + (X + 20) + "  " + (Y + -7)
        + " L " + (X + 28) + "  " + (Y + -15)
        + " L " + (X + 21) + "  " + (Y + -21)
        + " M " + (X + 25) + "  " + (Y + -25)
        + " L " + (X + 32) + "  " + (Y + -19)
        + " L " + (X + 40) + "  " + (Y + -27)
        + " L " + (X + 33) + "  " + (Y + -33)
        + " M " + (X + 37) + "  " + (Y + -37)
        + " L " + (X + 44) + "  " + (Y + -31)
        + " L " + (X + 52) + "  " + (Y + -39)
        + " L " + (X + 45) + "  " + (Y + -45)
        + " M " + (X + 49) + "  " + (Y + -49)
        + " L " + (X + 56) + "  " + (Y + -43)
        + " L " + (X + 64) + "  " + (Y + -51)
        + " L " + (X + 57) + "  " + (Y + -57)
        + " M " + (X + 73) + "  " + (Y + -47)
        + " L " + (X + 53) + "  " + (Y + -67)
        + " L " + (X + 78) + "  " + (Y + -71)
        + " M " + (X + 56) + "  " + (Y + -65)
        + " L " + (X + 71) + "  " + (Y + -50)
        + " L " + (X + 74) + "  " + (Y + -67)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new ImplemetsRtDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_implements_t") { //M -57 33 L -49 33 L -49 23 L -57 23 M -57 -24 L -49 -24 L -49 -33 L -57 -33 M -57 -10 L -49 -10 L -49 -19 L -57 -19 M -57 4 L -49 4 L -49 -5 L -57 -5 M -57 18 L -49 18 L -49 9 L -57 9 M -65 -39 L -41 -39 L -53 -51 M -38 -38 L -68 -38 L -53 -56
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 8) + "  " + Y
        + " L " + (X + 8) + "  " + (Y + -10)
        + " L " + X + "  " + (Y + -10)
        + " M " + X + "  " + (Y + -57)
        + " L " + (X + 8) + "  " + (Y + -57)
        + " L " + (X + 8) + "  " + (Y + -66)
        + " L " + X + "  " + (Y + -66)
        + " M " + X + "  " + (Y + -43)
        + " L " + (X + 8) + "  " + (Y + -43)
        + " L " + (X + 8) + "  " + (Y + -52)
        + " L " + X + "  " + (Y + -52)
        + " M " + X + "  " + (Y + -29)
        + " L " + (X + 8) + "  " + (Y + -29)
        + " L " + (X + 8) + "  " + (Y + -38)
        + " L " + X + "  " + (Y + -38)
        + " M " + X + "  " + (Y + -15)
        + " L " + (X + 8) + "  " + (Y + -15)
        + " L " + (X + 8) + "  " + (Y + -24)
        + " L " + X + "  " + (Y + -24)
        + " M " + (X + -8) + "  " + (Y + -72)
        + " L " + (X + 16) + "  " + (Y + -72)
        + " L " + (X + 4) + "  " + (Y + -84)
        + " M " + (X + 19) + "  " + (Y + -71)
        + " L " + (X + -11) + "  " + (Y + -71)
        + " L " + (X + 4) + "  " + (Y + -89)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new ImplemetsTDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_implements_lt") { //M -62 62 L -69 69 L -76 62 L -69 55 M -72 52 L -79 59 L -86 52 L -79 45 M -82 42 L -89 49 L -96 42 L -89 35 M -92 32 L -99 39 L -106 32 L -99 25 M -102 22 L -109 29 L -117 21 L -110 14 M -128 21 L -130 3 L -111 4 M -134 -1 L -130 24 L -108 2
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + -7) + "  " + (Y + 7)
        + " L " + (X + -14) + "  " + Y
        + " L " + (X + -7) + "  " + (Y + -7)
        + " M " + (X + -10) + "  " + (Y + -10)
        + " L " + (X + -17) + "  " + (Y + -3)
        + " L " + (X + -24) + "  " + (Y + -10)
        + " L " + (X + -17) + "  " + (Y + -17)
        + " M " + (X + -20) + "  " + (Y + -20)
        + " L " + (X + -27) + "  " + (Y + -13)
        + " L " + (X + -34) + "  " + (Y + -20)
        + " L " + (X + -27) + "  " + (Y + -27)
        + " M " + (X + -30) + "  " + (Y + -30)
        + " L " + (X + -37) + "  " + (Y + -23)
        + " L " + (X + -44) + "  " + (Y + -30)
        + " L " + (X + -37) + "  " + (Y + -37)
        + " M " + (X + -40) + "  " + (Y + -40)
        + " L " + (X + -47) + "  " + (Y + -33)
        + " L " + (X + -55) + "  " + (Y + -41)
        + " L " + (X + -48) + "  " + (Y + -48)
        + " M " + (X + -66) + "  " + (Y + -41)
        + " L " + (X + -68) + "  " + (Y + -59)
        + " L " + (X + -49) + "  " + (Y + -58)
        + " M " + (X + -72) + "  " + (Y + -63)
        + " L " + (X + -68) + "  " + (Y + -38)
        + " L " + (X + -46) + "  " + (Y + -60)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new ImplemetsLtDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_implements_l") { //M -77 -5 L -77 5 L -89 5 L -89 -5 M -94 -5 L -94 5 L -106 5 L -106 -5 M -111 -5 L -111 5 L -123 5 L -123 -5 M -128 -5 L -128 5 L -140 5 L -140 -5 M -145 -5 L -145 5 L -157 5 L -157 -5 M -164 -15 L -164 15 L -180 0 M -162 18 L -162 -18 L -185 0
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + X + "  " + (Y + 10)
        + " L " + (X + -12) + "  " + (Y + 10)
        + " L " + (X + -12) + "  " + Y
        + " M " + (X + -17) + "  " + Y
        + " L " + (X + -17) + "  " + (Y + 10)
        + " L " + (X + -29) + "  " + (Y + 10)
        + " L " + (X + -29) + "  " + Y
        + " M " + (X + -34) + "  " + Y
        + " L " + (X + -34) + "  " + (Y + 10)
        + " L " + (X + -46) + "  " + (Y + 10)
        + " L " + (X + -46) + "  " + Y
        + " M " + (X + -51) + "  " + Y
        + " L " + (X + -51) + "  " + (Y + 10)
        + " L " + (X + -63) + "  " + (Y + 10)
        + " L " + (X + -63) + "  " + Y
        + " M " + (X + -68) + "  " + Y
        + " L " + (X + -68) + "  " + (Y + 10)
        + " L " + (X + -80) + "  " + (Y + 10)
        + " L " + (X + -80) + "  " + Y
        + " M " + (X + -87) + "  " + (Y + -10)
        + " L " + (X + -87) + "  " + (Y + 20)
        + " L " + (X + -103) + "  " + (Y + 5)
        + " M " + (X + -85) + "  " + (Y + 23)
        + " L " + (X + -85) + "  " + (Y + -13)
        + " L " + (X + -108) + "  " + (Y + 5)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new ImplemetsLDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_implements_lb") { //M -58 59 L -52 65 L -58 71 L -64 65 M -94 95 L -88 101 L -94 107 L -100 101 M -85 86 L -79 92 L -85 98 L -91 92 M -76 77 L -70 83 L -76 89 L -82 83 M -67 68 L -61 74 L -67 80 L -73 74 M -90 118 L -112 96 L -116 120 M -110 99 L -93 116 L -111 115
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 6) + "  " + (Y + 6)
        + " L " + X + "  " + (Y + 12)
        + " L " + (X + -6) + "  " + (Y + 6)
        + " M " + (X + -36) + "  " + (Y + 36)
        + " L " + (X + -30) + "  " + (Y + 42)
        + " L " + (X + -36) + "  " + (Y + 48)
        + " L " + (X + -42) + "  " + (Y + 42)
        + " M " + (X + -27) + "  " + (Y + 27)
        + " L " + (X + -21) + "  " + (Y + 33)
        + " L " + (X + -27) + "  " + (Y + 39)
        + " L " + (X + -33) + "  " + (Y + 33)
        + " M " + (X + -18) + "  " + (Y + 18)
        + " L " + (X + -12) + "  " + (Y + 24)
        + " L " + (X + -18) + "  " + (Y + 30)
        + " L " + (X + -24) + "  " + (Y + 24)
        + " M " + (X + -9) + "  " + (Y + 9)
        + " L " + (X + -3) + "  " + (Y + 15)
        + " L " + (X + -9) + "  " + (Y + 21)
        + " L " + (X + -15) + "  " + (Y + 15)
        + " M " + (X + -32) + "  " + (Y + 59)
        + " L " + (X + -54) + "  " + (Y + 37)
        + " L " + (X + -58) + "  " + (Y + 61)
        + " M " + (X + -52) + "  " + (Y + 40)
        + " L " + (X + -35) + "  " + (Y + 57)
        + " L " + (X + -53) + "  " + (Y + 56)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new ImplemetsLbDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_implements_b") { //M -57 22 L -50 22 L -50 34 L -57 34 M -57 39 L -50 39 L -50 51 L -57 51 M -57 56 L -50 56 L -50 68 L -57 68 M -57 73 L -50 73 L -50 85 L -57 85 M -57 90 L -50 90 L -50 102 L -57 102 M -64 108 L -42 108 L -53 121 M -38 107 L -68 107 L -53 126
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 7) + "  " + Y
        + " L " + (X + 7) + "  " + (Y + 12)
        + " L " + X + "  " + (Y + 12)
        + " M " + X + "  " + (Y + 17)
        + " L " + (X + 7) + "  " + (Y + 17)
        + " L " + (X + 7) + "  " + (Y + 29)
        + " L " + X + "  " + (Y + 29)
        + " M " + X + "  " + (Y + 34)
        + " L " + (X + 7) + "  " + (Y + 34)
        + " L " + (X + 7) + "  " + (Y + 46)
        + " L " + X + "  " + (Y + 46)
        + " M " + X + "  " + (Y + 51)
        + " L " + (X + 7) + "  " + (Y + 51)
        + " L " + (X + 7) + "  " + (Y + 63)
        + " L " + X + "  " + (Y + 63)
        + " M " + X + "  " + (Y + 68)
        + " L " + (X + 7) + "  " + (Y + 68)
        + " L " + (X + 7) + "  " + (Y + 80)
        + " L " + X + "  " + (Y + 80)
        + " M " + (X + -7) + "  " + (Y + 86)
        + " L " + (X + 15) + "  " + (Y + 86)
        + " L " + (X + 4) + "  " + (Y + 99)
        + " M " + (X + 19) + "  " + (Y + 85)
        + " L " + (X + -11) + "  " + (Y + 85)
        + " L " + (X + 4) + "  " + (Y + 104)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new ImplemetsBDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_implements_rb") { //M -53 69 L -59 74 L -53 80 L -47 75 M -17 105 L -23 110 L -17 116 L -11 111 M -26 96 L -32 101 L -26 107 L -20 102 M -35 87 L -41 92 L -35 98 L -29 93 M -44 78 L -50 83 L -44 89 L -38 84 M -17 128 L 5 130 L 1 110 M 10 134 L -21 129 L 2 106
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + -6) + "  " + (Y + 5)
        + " L " + X + "  " + (Y + 11)
        + " L " + (X + 6) + "  " + (Y + 6)
        + " M " + (X + 36) + "  " + (Y + 36)
        + " L " + (X + 30) + "  " + (Y + 41)
        + " L " + (X + 36) + "  " + (Y + 47)
        + " L " + (X + 42) + "  " + (Y + 42)
        + " M " + (X + 27) + "  " + (Y + 27)
        + " L " + (X + 21) + "  " + (Y + 32)
        + " L " + (X + 27) + "  " + (Y + 38)
        + " L " + (X + 33) + "  " + (Y + 33)
        + " M " + (X + 18) + "  " + (Y + 18)
        + " L " + (X + 12) + "  " + (Y + 23)
        + " L " + (X + 18) + "  " + (Y + 29)
        + " L " + (X + 24) + "  " + (Y + 24)
        + " M " + (X + 9) + "  " + (Y + 9)
        + " L " + (X + 3) + "  " + (Y + 14)
        + " L " + (X + 9) + "  " + (Y + 20)
        + " L " + (X + 15) + "  " + (Y + 15)
        + " M " + (X + 36) + "  " + (Y + 59)
        + " L " + (X + 58) + "  " + (Y + 61)
        + " L " + (X + 54) + "  " + (Y + 41)
        + " M " + (X + 63) + "  " + (Y + 65)
        + " L " + (X + 32) + "  " + (Y + 60)
        + " L " + (X + 55) + "  " + (Y + 37)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new ImplemetsRbDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_dependency_r") { //M -172 420 L -172 440 L -150 440 L -150 420 M -138 420 L -138 440 L -116 440 L -116 420 M -104 420 L -104 440 L -82 440 L -82 420 M -70 420 L -70 440 L -48 440 L -48 420 M -36 420 L -36 440 L -14 440 L -14 420 M -2 394 L -2 466 L 36 430 M -2 466 L -2 394 L 46 430
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + X + "  " + (Y + 10)
        + " L " + (X + 11) + "  " + (Y + 10)
        + " L " + (X + 11) + "  " + Y
        + " M " + (X + 17) + "  " + Y
        + " L " + (X + 17) + "  " + (Y + 10)
        + " L " + (X + 28) + "  " + (Y + 10)
        + " L " + (X + 28) + "  " + Y
        + " M " + (X + 34) + "  " + Y
        + " L " + (X + 34) + "  " + (Y + 10)
        + " L " + (X + 45) + "  " + (Y + 10)
        + " L " + (X + 45) + "  " + Y
        + " M " + (X + 51) + "  " + Y
        + " L " + (X + 51) + "  " + (Y + 10)
        + " L " + (X + 62) + "  " + (Y + 10)
        + " L " + (X + 62) + "  " + Y
        + " M " + (X + 68) + "  " + Y
        + " L " + (X + 68) + "  " + (Y + 10)
        + " L " + (X + 79) + "  " + (Y + 10)
        + " L " + (X + 79) + "  " + Y
        + " M " + (X + 85) + "  " + (Y + -13)
        + " L " + (X + 85) + "  " + (Y + 23)
        + " L " + (X + 104) + "  " + (Y + 5)
        + " M " + (X + 85) + "  " + (Y + 23)
        + " L " + (X + 85) + "  " + (Y + -13)
        + " L " + (X + 109) + "  " + (Y + 5)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new ImplemetsRDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_dependency_rt") { //M -66 70 L -59 76 L -50 67 L -57 61 M -53 57 L -46 63 L -38 55 L -45 49 M -41 45 L -34 51 L -26 43 L -33 37 M -29 33 L -22 39 L -14 31 L -21 25 M -17 21 L -10 27 L -2 19 L -9 13 M 7 23 L -13 3 L 9 2 M -13 3 L 7 23 L 13 -2
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 7) + "  " + (Y + 6)
        + " L " + (X + 16) + "  " + (Y + -3)
        + " L " + (X + 9) + "  " + (Y + -9)
        + " M " + (X + 13) + "  " + (Y + -13)
        + " L " + (X + 20) + "  " + (Y + -7)
        + " L " + (X + 28) + "  " + (Y + -15)
        + " L " + (X + 21) + "  " + (Y + -21)
        + " M " + (X + 25) + "  " + (Y + -25)
        + " L " + (X + 32) + "  " + (Y + -19)
        + " L " + (X + 40) + "  " + (Y + -27)
        + " L " + (X + 33) + "  " + (Y + -33)
        + " M " + (X + 37) + "  " + (Y + -37)
        + " L " + (X + 44) + "  " + (Y + -31)
        + " L " + (X + 52) + "  " + (Y + -39)
        + " L " + (X + 45) + "  " + (Y + -45)
        + " M " + (X + 49) + "  " + (Y + -49)
        + " L " + (X + 56) + "  " + (Y + -43)
        + " L " + (X + 64) + "  " + (Y + -51)
        + " L " + (X + 57) + "  " + (Y + -57)
        + " M " + (X + 73) + "  " + (Y + -47)
        + " L " + (X + 53) + "  " + (Y + -67)
        + " L " + (X + 75) + "  " + (Y + -68)
        + " M " + (X + 53) + "  " + (Y + -67)
        + " L " + (X + 73) + "  " + (Y + -47)
        + " L " + (X + 79) + "  " + (Y + -72)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new ImplemetsRtDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_dependency_t") { //M -57 33 L -49 33 L -49 23 L -57 23 M -57 -24 L -49 -24 L -49 -33 L -57 -33 M -57 -10 L -49 -10 L -49 -19 L -57 -19 M -57 4 L -49 4 L -49 -5 L -57 -5 M -57 18 L -49 18 L -49 9 L -57 9 M -68 -38 L -38 -38 L -53 -51 M -38 -38 L -68 -38 L -53 -56
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 8) + "  " + Y
        + " L " + (X + 8) + "  " + (Y + -10)
        + " L " + X + "  " + (Y + -10)
        + " M " + X + "  " + (Y + -57)
        + " L " + (X + 8) + "  " + (Y + -57)
        + " L " + (X + 8) + "  " + (Y + -66)
        + " L " + X + "  " + (Y + -66)
        + " M " + X + "  " + (Y + -43)
        + " L " + (X + 8) + "  " + (Y + -43)
        + " L " + (X + 8) + "  " + (Y + -52)
        + " L " + X + "  " + (Y + -52)
        + " M " + X + "  " + (Y + -29)
        + " L " + (X + 8) + "  " + (Y + -29)
        + " L " + (X + 8) + "  " + (Y + -38)
        + " L " + X + "  " + (Y + -38)
        + " M " + X + "  " + (Y + -15)
        + " L " + (X + 8) + "  " + (Y + -15)
        + " L " + (X + 8) + "  " + (Y + -24)
        + " L " + X + "  " + (Y + -24)
        + " M " + (X + -11) + "  " + (Y + -71)
        + " L " + (X + 19) + "  " + (Y + -71)
        + " L " + (X + 4) + "  " + (Y + -84)
        + " M " + (X + 19) + "  " + (Y + -71)
        + " L " + (X + -11) + "  " + (Y + -71)
        + " L " + (X + 4) + "  " + (Y + -89)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new ImplemetsTDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_dependency_lt") { //M -62 62 L -69 69 L -76 62 L -69 55 M -72 52 L -79 59 L -86 52 L -79 45 M -82 42 L -89 49 L -96 42 L -89 35 M -92 32 L -99 39 L -106 32 L -99 25 M -102 22 L -109 29 L -117 21 L -110 14 M -130 24 L -130 3 L -108 2 M -134 -1 L -130 24 L -108 2
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + -7) + "  " + (Y + 7)
        + " L " + (X + -14) + "  " + Y
        + " L " + (X + -7) + "  " + (Y + -7)
        + " M " + (X + -10) + "  " + (Y + -10)
        + " L " + (X + -17) + "  " + (Y + -3)
        + " L " + (X + -24) + "  " + (Y + -10)
        + " L " + (X + -17) + "  " + (Y + -17)
        + " M " + (X + -20) + "  " + (Y + -20)
        + " L " + (X + -27) + "  " + (Y + -13)
        + " L " + (X + -34) + "  " + (Y + -20)
        + " L " + (X + -27) + "  " + (Y + -27)
        + " M " + (X + -30) + "  " + (Y + -30)
        + " L " + (X + -37) + "  " + (Y + -23)
        + " L " + (X + -44) + "  " + (Y + -30)
        + " L " + (X + -37) + "  " + (Y + -37)
        + " M " + (X + -40) + "  " + (Y + -40)
        + " L " + (X + -47) + "  " + (Y + -33)
        + " L " + (X + -55) + "  " + (Y + -41)
        + " L " + (X + -48) + "  " + (Y + -48)
        + " M " + (X + -68) + "  " + (Y + -38)
        + " L " + (X + -68) + "  " + (Y + -59)
        + " L " + (X + -46) + "  " + (Y + -60)
        + " M " + (X + -72) + "  " + (Y + -63)
        + " L " + (X + -68) + "  " + (Y + -38)
        + " L " + (X + -46) + "  " + (Y + -60)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new ImplemetsLtDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_dependency_l") { //M -77 -5 L -77 5 L -89 5 L -89 -5 M -94 -5 L -94 5 L -106 5 L -106 -5 M -111 -5 L -111 5 L -123 5 L -123 -5 M -128 -5 L -128 5 L -140 5 L -140 -5 M -145 -5 L -145 5 L -157 5 L -157 -5 M -162 -18 L -162 18 L -180 0 M -162 18 L -162 -18 L -185 0
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + X + "  " + (Y + 10)
        + " L " + (X + -12) + "  " + (Y + 10)
        + " L " + (X + -12) + "  " + Y
        + " M " + (X + -17) + "  " + Y
        + " L " + (X + -17) + "  " + (Y + 10)
        + " L " + (X + -29) + "  " + (Y + 10)
        + " L " + (X + -29) + "  " + Y
        + " M " + (X + -34) + "  " + Y
        + " L " + (X + -34) + "  " + (Y + 10)
        + " L " + (X + -46) + "  " + (Y + 10)
        + " L " + (X + -46) + "  " + Y
        + " M " + (X + -51) + "  " + Y
        + " L " + (X + -51) + "  " + (Y + 10)
        + " L " + (X + -63) + "  " + (Y + 10)
        + " L " + (X + -63) + "  " + Y
        + " M " + (X + -68) + "  " + Y
        + " L " + (X + -68) + "  " + (Y + 10)
        + " L " + (X + -80) + "  " + (Y + 10)
        + " L " + (X + -80) + "  " + Y
        + " M " + (X + -85) + "  " + (Y + -13)
        + " L " + (X + -85) + "  " + (Y + 23)
        + " L " + (X + -103) + "  " + (Y + 5)
        + " M " + (X + -85) + "  " + (Y + 23)
        + " L " + (X + -85) + "  " + (Y + -13)
        + " L " + (X + -108) + "  " + (Y + 5)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new ImplemetsLDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_dependency_lb") { //M -58 59 L -52 65 L -58 71 L -64 65 M -94 95 L -88 101 L -94 107 L -100 101 M -85 86 L -79 92 L -85 98 L -91 92 M -76 77 L -70 83 L -76 89 L -82 83 M -67 68 L -61 74 L -67 80 L -73 74 M -90 118 L -112 96 L -112 116 M -112 96 L -90 118 L -116 120
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 6) + "  " + (Y + 6)
        + " L " + X + "  " + (Y + 12)
        + " L " + (X + -6) + "  " + (Y + 6)
        + " M " + (X + -36) + "  " + (Y + 36)
        + " L " + (X + -30) + "  " + (Y + 42)
        + " L " + (X + -36) + "  " + (Y + 48)
        + " L " + (X + -42) + "  " + (Y + 42)
        + " M " + (X + -27) + "  " + (Y + 27)
        + " L " + (X + -21) + "  " + (Y + 33)
        + " L " + (X + -27) + "  " + (Y + 39)
        + " L " + (X + -33) + "  " + (Y + 33)
        + " M " + (X + -18) + "  " + (Y + 18)
        + " L " + (X + -12) + "  " + (Y + 24)
        + " L " + (X + -18) + "  " + (Y + 30)
        + " L " + (X + -24) + "  " + (Y + 24)
        + " M " + (X + -9) + "  " + (Y + 9)
        + " L " + (X + -3) + "  " + (Y + 15)
        + " L " + (X + -9) + "  " + (Y + 21)
        + " L " + (X + -15) + "  " + (Y + 15)
        + " M " + (X + -32) + "  " + (Y + 59)
        + " L " + (X + -54) + "  " + (Y + 37)
        + " L " + (X + -54) + "  " + (Y + 57)
        + " M " + (X + -54) + "  " + (Y + 37)
        + " L " + (X + -32) + "  " + (Y + 59)
        + " L " + (X + -58) + "  " + (Y + 61)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new ImplemetsLbDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_dependency_b") { //M -57 22 L -50 22 L -50 34 L -57 34 M -57 39 L -50 39 L -50 51 L -57 51 M -57 56 L -50 56 L -50 68 L -57 68 M -57 73 L -50 73 L -50 85 L -57 85 M -57 90 L -50 90 L -50 102 L -57 102 M -68 107 L -38 107 L -53 121 M -38 107 L -68 107 L -53 126
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 7) + "  " + Y
        + " L " + (X + 7) + "  " + (Y + 12)
        + " L " + X + "  " + (Y + 12)
        + " M " + X + "  " + (Y + 17)
        + " L " + (X + 7) + "  " + (Y + 17)
        + " L " + (X + 7) + "  " + (Y + 29)
        + " L " + X + "  " + (Y + 29)
        + " M " + X + "  " + (Y + 34)
        + " L " + (X + 7) + "  " + (Y + 34)
        + " L " + (X + 7) + "  " + (Y + 46)
        + " L " + X + "  " + (Y + 46)
        + " M " + X + "  " + (Y + 51)
        + " L " + (X + 7) + "  " + (Y + 51)
        + " L " + (X + 7) + "  " + (Y + 63)
        + " L " + X + "  " + (Y + 63)
        + " M " + X + "  " + (Y + 68)
        + " L " + (X + 7) + "  " + (Y + 68)
        + " L " + (X + 7) + "  " + (Y + 80)
        + " L " + X + "  " + (Y + 80)
        + " M " + (X + -11) + "  " + (Y + 85)
        + " L " + (X + 19) + "  " + (Y + 85)
        + " L " + (X + 4) + "  " + (Y + 99)
        + " M " + (X + 19) + "  " + (Y + 85)
        + " L " + (X + -11) + "  " + (Y + 85)
        + " L " + (X + 4) + "  " + (Y + 104)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new ImplemetsBDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_dependency_rb") { //M -53 69 L -59 74 L -53 80 L -47 75 M -17 105 L -23 110 L -17 116 L -11 111 M -26 96 L -32 101 L -26 107 L -20 102 M -35 87 L -41 92 L -35 98 L -29 93 M -44 78 L -50 83 L -44 89 L -38 84 M -21 129 L 5 130 L 2 106 M 10 134 L -21 129 L 2 106
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + -6) + "  " + (Y + 5)
        + " L " + X + "  " + (Y + 11)
        + " L " + (X + 6) + "  " + (Y + 6)
        + " M " + (X + 36) + "  " + (Y + 36)
        + " L " + (X + 30) + "  " + (Y + 41)
        + " L " + (X + 36) + "  " + (Y + 47)
        + " L " + (X + 42) + "  " + (Y + 42)
        + " M " + (X + 27) + "  " + (Y + 27)
        + " L " + (X + 21) + "  " + (Y + 32)
        + " L " + (X + 27) + "  " + (Y + 38)
        + " L " + (X + 33) + "  " + (Y + 33)
        + " M " + (X + 18) + "  " + (Y + 18)
        + " L " + (X + 12) + "  " + (Y + 23)
        + " L " + (X + 18) + "  " + (Y + 29)
        + " L " + (X + 24) + "  " + (Y + 24)
        + " M " + (X + 9) + "  " + (Y + 9)
        + " L " + (X + 3) + "  " + (Y + 14)
        + " L " + (X + 9) + "  " + (Y + 20)
        + " L " + (X + 15) + "  " + (Y + 15)
        + " M " + (X + 32) + "  " + (Y + 60)
        + " L " + (X + 58) + "  " + (Y + 61)
        + " L " + (X + 55) + "  " + (Y + 37)
        + " M " + (X + 63) + "  " + (Y + 65)
        + " L " + (X + 32) + "  " + (Y + 60)
        + " L " + (X + 55) + "  " + (Y + 37)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new ImplemetsRbDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_association_r") { //M -86 -5 L -86 5 L 4 5 L 4 -5 M 4 -18 L 4 18 L 22 0 M 4 18 L 4 -18 L 27 0
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + X + "  " + (Y + 10)
        + " L " + (X + 90) + "  " + (Y + 10)
        + " L " + (X + 90) + "  " + Y
        + " M " + (X + 90) + "  " + (Y + -13)
        + " L " + (X + 90) + "  " + (Y + 23)
        + " L " + (X + 108) + "  " + (Y + 5)
        + " M " + (X + 90) + "  " + (Y + 23)
        + " L " + (X + 90) + "  " + (Y + -13)
        + " L " + (X + 113) + "  " + (Y + 5)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new AssociationRDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_association_rt") { //M -61 64 L -55 70 L 0 16 L -6 10 M 7 23 L -13 3 L 8 3 M -13 3 L 7 23 L 12 -1
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 6) + "  " + (Y + 6)
        + " L " + (X + 61) + "  " + (Y + -48)
        + " L " + (X + 55) + "  " + (Y + -54)
        + " M " + (X + 68) + "  " + (Y + -41)
        + " L " + (X + 48) + "  " + (Y + -61)
        + " L " + (X + 69) + "  " + (Y + -61)
        + " M " + (X + 48) + "  " + (Y + -61)
        + " L " + (X + 68) + "  " + (Y + -41)
        + " L " + (X + 73) + "  " + (Y + -65)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new AssociationRtDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_association_t") { //M -57 33 L -49 33 L -49 -38 L -57 -38 M -68 -38 L -38 -38 L -53 -51 M -38 -38 L -68 -38 L -53 -56
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 8) + "  " + Y
        + " L " + (X + 8) + "  " + (Y + -71)
        + " L " + X + "  " + (Y + -71)
        + " M " + (X + -11) + "  " + (Y + -71)
        + " L " + (X + 19) + "  " + (Y + -71)
        + " L " + (X + 4) + "  " + (Y + -84)
        + " M " + (X + 19) + "  " + (Y + -71)
        + " L " + (X + -11) + "  " + (Y + -71)
        + " L " + (X + 4) + "  " + (Y + -89)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new AssociationTDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_association_lt") { //M -61 64 L -67 70 L -122 16 L -115 9 M -130 24 L -129 4 L -108 2 M -134 -1 L -130 24 L -108 2
      elem.nativeElement.children[0].setAttributeNS(null, "d",

        " M " + X + "  " + Y
        + " L " + (X + -6) + "  " + (Y + 6)
        + " L " + (X + -61) + "  " + (Y + -48)
        + " L " + (X + -54) + "  " + (Y + -55)
        + " M " + (X + -69) + "  " + (Y + -40)
        + " L " + (X + -68) + "  " + (Y + -60)
        + " L " + (X + -47) + "  " + (Y + -62)
        + " M " + (X + -73) + "  " + (Y + -65)
        + " L " + (X + -69) + "  " + (Y + -40)
        + " L " + (X + -47) + "  " + (Y + -62)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new AssociationLtDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_association_l") { //M -86 -5 L -86 5 L -162 5 L -162 -5 M -162 -18 L -162 18 L -180 0 M -162 18 L -162 -18 L -185 0
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + X + "  " + (Y + 10)
        + " L " + (X + -76) + "  " + (Y + 10)
        + " L " + (X + -76) + "  " + Y
        + " M " + (X + -76) + "  " + (Y + -13)
        + " L " + (X + -76) + "  " + (Y + 23)
        + " L " + (X + -94) + "  " + (Y + 5)
        + " M " + (X + -76) + "  " + (Y + 23)
        + " L " + (X + -76) + "  " + (Y + -13)
        + " L " + (X + -99) + "  " + (Y + 5)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new AssociationLDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_association_lb") { //M -61 64 L -55 70 L -98 110 L -104 104 M -90 118 L -112 96 L -111 115 M -112 96 L -90 118 L -116 120
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 6) + "  " + (Y + 6)
        + " L " + (X + -37) + "  " + (Y + 46)
        + " L " + (X + -43) + "  " + (Y + 40)
        + " M " + (X + -29) + "  " + (Y + 54)
        + " L " + (X + -51) + "  " + (Y + 32)
        + " L " + (X + -50) + "  " + (Y + 51)
        + " M " + (X + -51) + "  " + (Y + 32)
        + " L " + (X + -29) + "  " + (Y + 54)
        + " L " + (X + -55) + "  " + (Y + 56)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new AssociationLbDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_association_b") { //M -57 33 L -50 33 L -50 107 L -57 107 M -68 107 L -38 107 L -53 121 M -38 107 L -68 107 L -53 126
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 7) + "  " + Y
        + " L " + (X + 7) + "  " + (Y + 74)
        + " L " + X + "  " + (Y + 74)
        + " M " + (X + -11) + "  " + (Y + 74)
        + " L " + (X + 19) + "  " + (Y + 74)
        + " L " + (X + 4) + "  " + (Y + 88)
        + " M " + (X + 19) + "  " + (Y + 74)
        + " L " + (X + -11) + "  " + (Y + 74)
        + " L " + (X + 4) + "  " + (Y + 93)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new AssociationBDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_association_rb") { //M -61 64 L -67 70 L -12 120 L -7 115 M -21 129 L 2 106 L 3 129 M 2 106 L -21 129 L 7 133
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + -6) + "  " + (Y + 6)
        + " L " + (X + 49) + "  " + (Y + 56)
        + " L " + (X + 54) + "  " + (Y + 51)
        + " M " + (X + 40) + "  " + (Y + 65)
        + " L " + (X + 63) + "  " + (Y + 42)
        + " L " + (X + 64) + "  " + (Y + 65)
        + " M " + (X + 63) + "  " + (Y + 42)
        + " L " + (X + 40) + "  " + (Y + 65)
        + " L " + (X + 68) + "  " + (Y + 69)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new AssociationRbDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_aggregation_r") { //M -86 -5 L -86 5 L 4 5 L 4 -5 M 26 -12 L 7 0 L 26 13 L 45 0 M 26 16 L 4 0 L 26 -15 L 48 0
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + X + "  " + (Y + 10)
        + " L " + (X + 90) + "  " + (Y + 10)
        + " L " + (X + 90) + "  " + Y
        + " M " + (X + 112) + "  " + (Y + -7)
        + " L " + (X + 93) + "  " + (Y + 5)
        + " L " + (X + 112) + "  " + (Y + 18)
        + " L " + (X + 131) + "  " + (Y + 5)
        + " M " + (X + 112) + "  " + (Y + 21)
        + " L " + (X + 90) + "  " + (Y + 5)
        + " L " + (X + 112) + "  " + (Y + -10)
        + " L " + (X + 134) + "  " + (Y + 5)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new AggregationRDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_aggregation_rt") { //M -61 64 L -55 70 L 0 16 L -6 10 M 18 9 L 0 10 L 1 -8 L 22 -11 M -2 -11 L -3 13 L 21 12 L 25 -14
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 6) + "  " + (Y + 6)
        + " L " + (X + 61) + "  " + (Y + -48)
        + " L " + (X + 55) + "  " + (Y + -54)
        + " M " + (X + 79) + "  " + (Y + -55)
        + " L " + (X + 61) + "  " + (Y + -54)
        + " L " + (X + 62) + "  " + (Y + -72)
        + " L " + (X + 83) + "  " + (Y + -75)
        + " M " + (X + 59) + "  " + (Y + -75)
        + " L " + (X + 58) + "  " + (Y + -51)
        + " L " + (X + 82) + "  " + (Y + -52)
        + " L " + (X + 86) + "  " + (Y + -78)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new AggregationRtDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_aggregation_t") { //M -57 33 L -49 33 L -49 -38 L -57 -38 M -65 -56 L -53 -42 L -41 -56 L -53 -72 M -38 -56 L -53 -38 L -68 -56 L -53 -76
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 8) + "  " + Y
        + " L " + (X + 8) + "  " + (Y + -71)
        + " L " + X + "  " + (Y + -71)
        + " M " + (X + -8) + "  " + (Y + -89)
        + " L " + (X + 4) + "  " + (Y + -75)
        + " L " + (X + 16) + "  " + (Y + -89)
        + " L " + (X + 4) + "  " + (Y + -105)
        + " M " + (X + 19) + "  " + (Y + -89)
        + " L " + (X + 4) + "  " + (Y + -71)
        + " L " + (X + -11) + "  " + (Y + -89)
        + " L " + (X + 4) + "  " + (Y + -109)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new AggregationTDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_aggregation_lt") { //M -61 64 L -67 70 L -122 16 L -115 9 M -145 9 L -148 -16 L -124 -13 L -121 9 M -118 12 L -121 -16 L -152 -19 L -148 12
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + -6) + "  " + (Y + 6)
        + " L " + (X + -61) + "  " + (Y + -48)
        + " L " + (X + -54) + "  " + (Y + -55)
        + " M " + (X + -84) + "  " + (Y + -55)
        + " L " + (X + -87) + "  " + (Y + -80)
        + " L " + (X + -63) + "  " + (Y + -77)
        + " L " + (X + -60) + "  " + (Y + -55)
        + " M " + (X + -57) + "  " + (Y + -52)
        + " L " + (X + -60) + "  " + (Y + -80)
        + " L " + (X + -91) + "  " + (Y + -83)
        + " L " + (X + -87) + "  " + (Y + -52)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new AggregationLtDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_aggregation_l") { //M -86 -5 L -86 5 L -162 5 L -162 -5 M -183 -14 L -165 0 L -183 14 L -202 0 M -183 17 L -162 0 L -183 -17 L -205 0
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + X + "  " + (Y + 10)
        + " L " + (X + -76) + "  " + (Y + 10)
        + " L " + (X + -76) + "  " + Y
        + " M " + (X + -97) + "  " + (Y + -9)
        + " L " + (X + -79) + "  " + (Y + 5)
        + " L " + (X + -97) + "  " + (Y + 19)
        + " L " + (X + -116) + "  " + (Y + 5)
        + " M " + (X + -97) + "  " + (Y + 22)
        + " L " + (X + -76) + "  " + (Y + 5)
        + " L " + (X + -97) + "  " + (Y + -12)
        + " L " + (X + -119) + "  " + (Y + 5)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new AggregationLDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_aggregation_lb") { //M -61 64 L -55 70 L -98 110 L -104 104 M -104 137 L -101 107 L -132 110 L -135 140 M -129 113 L -104 110 L -107 134 L -132 137
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 6) + "  " + (Y + 6)
        + " L " + (X + -37) + "  " + (Y + 46)
        + " L " + (X + -43) + "  " + (Y + 40)
        + " M " + (X + -43) + "  " + (Y + 73)
        + " L " + (X + -40) + "  " + (Y + 43)
        + " L " + (X + -71) + "  " + (Y + 46)
        + " L " + (X + -74) + "  " + (Y + 76)
        + " M " + (X + -68) + "  " + (Y + 49)
        + " L " + (X + -43) + "  " + (Y + 46)
        + " L " + (X + -46) + "  " + (Y + 70)
        + " L " + (X + -71) + "  " + (Y + 73)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new AggregationLbDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_aggregation_b") { //M -56 33 L -50 33 L -50 107 L -56 107 M -64 125 L -53 110 L -41 125 L -53 143 M -38 125 L -53 107 L -67 125 L -53 146
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 6) + "  " + Y
        + " L " + (X + 6) + "  " + (Y + 74)
        + " L " + X + "  " + (Y + 74)
        + " M " + (X + -8) + "  " + (Y + 92)
        + " L " + (X + 3) + "  " + (Y + 77)
        + " L " + (X + 15) + "  " + (Y + 92)
        + " L " + (X + 3) + "  " + (Y + 110)
        + " M " + (X + 18) + "  " + (Y + 92)
        + " L " + (X + 3) + "  " + (Y + 74)
        + " L " + (X + -11) + "  " + (Y + 92)
        + " L " + (X + 3) + "  " + (Y + 113)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new AggregationBDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_aggregation_rb") { //M -61 64 L -67 70 L -12 120 L -7 115 M -2 139 L -6 121 L 13 120 L 17 140 M 15 118 L -9 118 L -4 141 L 20 143
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + -6) + "  " + (Y + 6)
        + " L " + (X + 49) + "  " + (Y + 56)
        + " L " + (X + 54) + "  " + (Y + 51)
        + " M " + (X + 59) + "  " + (Y + 75)
        + " L " + (X + 55) + "  " + (Y + 57)
        + " L " + (X + 74) + "  " + (Y + 56)
        + " L " + (X + 78) + "  " + (Y + 76)
        + " M " + (X + 76) + "  " + (Y + 54)
        + " L " + (X + 52) + "  " + (Y + 54)
        + " L " + (X + 57) + "  " + (Y + 77)
        + " L " + (X + 81) + "  " + (Y + 79)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new AggregationRbDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_composition_r") { //M -86 -5 L -86 5 L 4 5 L 4 -5 M 26 16 L 4 0 L 26 -15 L 48 0
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + X + "  " + (Y + 10)
        + " L " + (X + 90) + "  " + (Y + 10)
        + " L " + (X + 90) + "  " + Y
        + " M " + (X + 112) + "  " + (Y + 21)
        + " L " + (X + 90) + "  " + (Y + 5)
        + " L " + (X + 112) + "  " + (Y + -10)
        + " L " + (X + 134) + "  " + (Y + 5)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new CompositionRDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_composition_rt") { //M -61 64 L -55 70 L 0 16 L -6 10 M 22 12 L -2 13 L 0 -9 L 25 -13
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 6) + "  " + (Y + 6)
        + " L " + (X + 61) + "  " + (Y + -48)
        + " L " + (X + 55) + "  " + (Y + -54)
        + " M " + (X + 83) + "  " + (Y + -52)
        + " L " + (X + 59) + "  " + (Y + -51)
        + " L " + (X + 61) + "  " + (Y + -73)
        + " L " + (X + 86) + "  " + (Y + -77)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new CompositionRtDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_composition_t") { //M -57 33 L -49 33 L -49 -38 L -57 -38 M -38 -56 L -53 -38 L -68 -56 L -53 -76
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 8) + "  " + Y
        + " L " + (X + 8) + "  " + (Y + -71)
        + " L " + X + "  " + (Y + -71)
        + " M " + (X + 19) + "  " + (Y + -89)
        + " L " + (X + 4) + "  " + (Y + -71)
        + " L " + (X + -11) + "  " + (Y + -89)
        + " L " + (X + 4) + "  " + (Y + -109)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new CompositionTDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_composition_lt") { //M -61 64 L -67 70 L -122 16 L -115 9 M -118 12 L -121 -16 L -153 -20 L -148 12
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + -6) + "  " + (Y + 6)
        + " L " + (X + -61) + "  " + (Y + -48)
        + " L " + (X + -54) + "  " + (Y + -55)
        + " M " + (X + -57) + "  " + (Y + -52)
        + " L " + (X + -60) + "  " + (Y + -80)
        + " L " + (X + -92) + "  " + (Y + -84)
        + " L " + (X + -87) + "  " + (Y + -52)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new CompositionLtDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_composition_l") { //M -86 -5 L -86 5 L -162 5 L -162 -5 M -183 17 L -162 0 L -183 -17 L -205 0
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + X + "  " + (Y + 10)
        + " L " + (X + -76) + "  " + (Y + 10)
        + " L " + (X + -76) + "  " + Y
        + " M " + (X + -97) + "  " + (Y + 22)
        + " L " + (X + -76) + "  " + (Y + 5)
        + " L " + (X + -97) + "  " + (Y + -12)
        + " L " + (X + -119) + "  " + (Y + 5)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new CompositionLDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_composition_lb") { //M -61 64 L -55 70 L -98 110 L -104 104 M -104 137 L -101 107 L -132 110 L -135 140
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 6) + "  " + (Y + 6)
        + " L " + (X + -37) + "  " + (Y + 46)
        + " L " + (X + -43) + "  " + (Y + 40)
        + " M " + (X + -43) + "  " + (Y + 73)
        + " L " + (X + -40) + "  " + (Y + 43)
        + " L " + (X + -71) + "  " + (Y + 46)
        + " L " + (X + -74) + "  " + (Y + 76)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new CompositionLbDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_composition_b") { //M -56 33 L -50 33 L -50 107 L -56 107 M -38 125 L -53 107 L -67 125 L -53 146
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 6) + "  " + Y
        + " L " + (X + 6) + "  " + (Y + 74)
        + " L " + X + "  " + (Y + 74)
        + " M " + (X + 18) + "  " + (Y + 92)
        + " L " + (X + 3) + "  " + (Y + 74)
        + " L " + (X + -11) + "  " + (Y + 92)
        + " L " + (X + 3) + "  " + (Y + 113)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new CompositionBDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_composition_rb") { //M -61 64 L -67 70 L -12 120 L -7 115 M 15 118 L -9 118 L -4 141 L 20 143
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + -6) + "  " + (Y + 6)
        + " L " + (X + 49) + "  " + (Y + 56)
        + " L " + (X + 54) + "  " + (Y + 51)
        + " M " + (X + 76) + "  " + (Y + 54)
        + " L " + (X + 52) + "  " + (Y + 54)
        + " L " + (X + 57) + "  " + (Y + 77)
        + " L " + (X + 81) + "  " + (Y + 79)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new CompositionRbDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_line_r") { //M 0 0 L 0 -3 L 90 -3 L 90 0
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + X + "  " + (Y + -6)
        + " L " + (X + 90) + "  " + (Y + -6)
        + " L " + (X + 90) + "  " + Y
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new LineRDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_line_rt") { //M 2 0 L 0 -2 L 58 -63 L 60 -61
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + -5) + "  " + (Y + -4)
        + " L " + (X + 76) + "  " + (Y + -91)
        + " L " + (X + 80) + "  " + (Y + -87)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new LineRtDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_line_t") { //M 3 0 L 0 0 L 0 -90 L 3 -90
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + -6) + "  " + Y
        + " L " + (X + -6) + "  " + (Y + -90)
        + " L " + X + "  " + (Y + -90)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new LineTDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_line_lt") { //M -4 0 L 0 -4 L -75 -75 L -80 -70
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 4) + "  " + (Y + -4)
        + " L " + (X + -71) + "  " + (Y + -75)
        + " L " + (X + -76) + "  " + (Y + -70)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new LineRtDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_required_r") { //M 0 0 L 90 0 L 90 -6 L 0 -6 M -14 -17 C 85 -17 85 11 105 11 M 105 10 C 86 10 86 -16 105 -16
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 90) + "  " + Y
        + " L " + (X + 90) + "  " + (Y + -6)
        + " L " + X + "  " + (Y + -6)
        + " M " + (X + 105) + "  " + (Y + -17)
        + " C " + (X + 85) + " " + (Y - 17) + " " + (X + 85) + " " + (Y + 11) + " " + (X + 105) + " " + (Y + 11)
        + " M " + (X + 105) + " " + (Y + 10)
        + " C " + (X + 86) + " " + (Y + 10) + " " + (X + 86) + " " + (Y - 16) + " " + (X + 105) + " " + (Y - 16)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new RequiredRDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_required_rt") { //M 5 0 L 0 -5 L 61 -55 L 66 -50 M 83 -54 C 67 -42 53 -56 66 -71 M 67 -70 C 55 -56 68 -44 82 -55
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + -5) + "  " + (Y + -5)
        + " L " + (X + 56) + "  " + (Y + -55)
        + " L " + (X + 61) + "  " + (Y + -50)
        + " M " + (X + 78) + "  " + (Y + -54)
        + " C " + (X + 62) + " " + (Y + -42) + " " + (X + 48) + " " + (Y + -56) + " " + (X + 61) + " " + (Y + -71)
        + " M " + (X + 62) + "  " + (Y + -70)
        + " C " + (X + 50) + " " + (Y + -56) + " " + (X + 63) + " " + (Y + -44) + " " + (X + 77) + " " + (Y + -55)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new RequiredRtDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_required_t") { //M 0 0 L 5 0 L 5 -90 L 0 -90 M -12 -107 C -12 -85 17 -85 17 -107 M 16 -107 C 16 -86 -11 -86 -11 -107
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 5) + "  " + Y
        + " L " + (X + 5) + "  " + (Y + -90)
        + " L " + X + "  " + (Y + -90)
        + " M " + (X + -12) + "  " + (Y - 107)
        + " C " + (X - 12) + " " + (Y - 85) + " " + (X + 17) + " " + (Y - 85) + " " + (X + 17) + " " + (Y - 107)
        + " M " + (X + 16) + " " + (Y - 107)
        + " C " + (X + 16) + " " + (Y - 86) + " " + (X - 11) + " " + (Y - 86) + " " + (X - 11) + " " + (Y - 107)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new RequiredTDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_required_lt") { //M -5 0 L 0 -5 L -43 -58 L -49 -53 M -62 -57 C -51 -46 -37 -58 -48 -71 M -49 -70 C -38 -58 -51 -47 -61 -58
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 5) + "  " + (Y + -5)
        + " L " + (X + -38) + "  " + (Y + -58)
        + " L " + (X + -44) + "  " + (Y + -53)
        + " M " + (X + -57) + "  " + (Y + -57)
        + " C " + (X - 46) + " " + (Y - 46) + " " + (X - 32) + " " + (Y - 58) + " " + (X - 43) + " " + (Y - 71)
        + " M " + (X + -44) + "  " + (Y + -70)
        + " C " + (X - 33) + " " + (Y - 58) + " " + (X - 46) + " " + (Y - 47) + " " + (X - 56) + " " + (Y - 58)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new RequiredLtDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_required_l") { //M 0 0 L 90 0 L 90 -6 L 0 -6 M -14 -17 C 4 -17 4 11 -14 11 M -14 10 C 2 10 2 -16 -14 -16
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 90) + "  " + Y
        + " L " + (X + 90) + "  " + (Y + -6)
        + " L " + X + "  " + (Y + -6)
        + " M " + (X + -14) + "  " + (Y + -17)
        + " C " + (X + 4) + " " + (Y - 17) + " " + (X + 4) + " " + (Y + 11) + " " + (X - 14) + " " + (Y + 11)
        + " M " + (X - 14) + " " + (Y + 10)
        + " C " + (X + 2) + " " + (Y + 10) + " " + (X + 2) + " " + (Y - 16) + " " + (X - 14) + " " + (Y - 16)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new RequiredLDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_required_lb") { //M 0 4 L -4 0 L -42 38 L -38 42 M -40 56 C -29 46 -45 29 -57 39 M -56 40 C -45 30 -30 46 -41 55
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + -4) + "  " + (Y + -4)
        + " L " + (X + -42) + "  " + (Y + 34)
        + " L " + (X + -38) + "  " + (Y + 38)
        + " M " + (X + -40) + "  " + (Y + 52)
        + " C " + (X - 29) + " " + (Y + 42) + " " + (X - 45) + " " + (Y + 25) + " " + (X - 57) + " " + (Y + 35)
        + " M " + (X + -56) + "  " + (Y + 36)
        + " C " + (X - 45) + " " + (Y + 26) + " " + (X - 30) + " " + (Y + 42) + " " + (X - 41) + " " + (Y + 51)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new RequiredLbDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_required_b") { //M 0 0 L 5 0 L 5 90 L 0 90 M -13 107 C -13 85 18 84 18 107 M 17 107 C 17 85 -12 86 -12 107
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 5) + "  " + Y
        + " L " + (X + 5) + "  " + (Y + 90)
        + " L " + X + "  " + (Y + 90)
        + " M " + (X + -13) + "  " + (Y + 107)
        + " C " + (X - 13) + " " + (Y + 85) + " " + (X + 18) + " " + (Y + 84) + " " + (X + 18) + " " + (Y + 107)
        + " M " + (X + 17) + " " + (Y + 107)
        + " C " + (X + 17) + " " + (Y + 85) + " " + (X + -12) + " " + (Y + 86) + " " + (X - 12) + " " + (Y + 107)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new RequiredBDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "path_required_rb") { //M 0 5 L 5 0 L 66 62 L 61 67 M 64 84 C 49 69 73 52 85 63 M 84 64 C 73 53 50 69 65 83
      elem.nativeElement.children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 5) + "  " + (Y + -5)
        + " L " + (X + 66) + "  " + (Y + 57)
        + " L " + (X + 61) + "  " + (Y + 62)
        + " M " + (X + 64) + "  " + (Y + 79)
        + " C " + (X + 49) + " " + (Y + 64) + " " + (X + 73) + " " + (Y + 47) + " " + (X + 85) + " " + (Y + 58)
        + " M " + (X + 84) + "  " + (Y + 59)
        + " C " + (X + 73) + " " + (Y + 48) + " " + (X + 50) + " " + (Y + 64) + " " + (X + 65) + " " + (Y + 78)
      );
      const pathElem = new ElementRef(elem.nativeElement.children[0]);
      const addDirective = new RequiredRbDirective(pathElem);
      addDirective.ngOnInit();
    }
    if (type === "use_case") {
      elem.nativeElement.children[0].children[0].setAttributeNS(null, "cy", Y.toString());
      elem.nativeElement.children[0].children[0].setAttributeNS(null, "cx", X.toString());
      elem.nativeElement.children[1].children[0].setAttributeNS(null, "y", (Y - 5).toString());
      elem.nativeElement.children[1].children[0].setAttributeNS(null, "x", (X - 70).toString());

      let addDirectiveClass = new MoveableDraggableDirective(elem);
      addDirectiveClass.ngOnInit();

      const svgTextElem = new ElementRef(elem.nativeElement.children[1]);
      svgTextElem.nativeElement.addEventListener('dblclick', () => this.onTextEdit(svgTextElem), true);
    }
    if (type === "actor") { //M 3 0 L 0 0 L 0 -90 L 3 -90
      elem.nativeElement.children[0].children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 8) + "  " + (Y + -23)
        + " L " + (X + 9) + "  " + (Y + -22)
        + " L " + (X + 1) + "  " + Y
        + " M " + (X + 19) + "  " + Y
        + " L " + (X + 10) + "  " + (Y + -22)
        + " L " + (X + 11) + "  " + (Y + -23)
        + " L " + (X + 20) + "  " + Y
        + " M " + (X + 9) + "  " + (Y + -23)
        + " L " + (X + 10) + "  " + (Y + -23)
        + " L " + (X + 10) + "  " + (Y + -50)
        + " L " + (X + 9) + "  " + (Y + -50)
        + " M " + (X + 1) + "  " + (Y + -44)
        + " L " + (X + 1) + "  " + (Y + -43)
        + " L " + (X + 18) + "  " + (Y + -43)
        + " L " + (X + 18) + "  " + (Y + -44));

      elem.nativeElement.children[1].children[0].setAttributeNS(null, "cy", (Y - 55).toString());
      elem.nativeElement.children[1].children[0].setAttributeNS(null, "cx", (X + 9).toString());
      elem.nativeElement.children[2].children[0].setAttributeNS(null, "y", (Y + 20).toString());
      elem.nativeElement.children[2].children[0].setAttributeNS(null, "x", (X - 8).toString());

      let addDirectiveClass = new MoveableDraggableDirective(elem);
      addDirectiveClass.ngOnInit();

      const svgTextElem = new ElementRef(elem.nativeElement.children[2]);
      svgTextElem.nativeElement.addEventListener('dblclick', () => this.onTextEdit(svgTextElem), true);
    }
    if (type === "system") {
      //console.log(elem);
      elem.nativeElement.children[0].setAttributeNS(null, "y", Y.toString());
      elem.nativeElement.children[0].setAttributeNS(null, "x", X.toString());

      let addDirectiveClass = new ActivationDirective(elem);
      addDirectiveClass.ngOnInit();
    }
    if (type === "component") {
      elem.nativeElement.children[0].children[0].setAttributeNS(null, "y", Y.toString());
      elem.nativeElement.children[0].children[0].setAttributeNS(null, "x", X.toString());

      elem.nativeElement.children[0].children[1].setAttributeNS(null, "y", (Y + 10).toString());
      elem.nativeElement.children[0].children[1].setAttributeNS(null, "x", (X + 170).toString());

      elem.nativeElement.children[0].children[2].setAttributeNS(null, "y", (Y + 15).toString());
      elem.nativeElement.children[0].children[2].setAttributeNS(null, "x", (X + 165).toString());

      elem.nativeElement.children[0].children[3].setAttributeNS(null, "y", (Y + 30).toString());
      elem.nativeElement.children[0].children[3].setAttributeNS(null, "x", (X + 165).toString());

      elem.nativeElement.children[1].children[0].setAttributeNS(null, "y", (Y + 30).toString());
      elem.nativeElement.children[1].children[0].setAttributeNS(null, "x", (X + 5).toString());

      const svgTextElem = new ElementRef(elem.nativeElement.children[1]);
      svgTextElem.nativeElement.addEventListener('dblclick', () => this.onTextEdit(svgTextElem), true);

      const addDirective = new ComponentDirective(elem);
      addDirective.ngOnInit();
    }
    if (type === "port") {
      elem.nativeElement.children[0].children[0].setAttributeNS(null, "y", Y.toString());
      elem.nativeElement.children[0].children[0].setAttributeNS(null, "x", X.toString());

      let addDirectiveClass = new MoveableDraggableDirective(elem);
      addDirectiveClass.ngOnInit();
    }
    if (type === "provided_interface_r") {
      elem.nativeElement.children[0].children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + X + "  " + (Y + -5)
        + " L " + (X + 90) + "  " + (Y + -5)
        + " L " + (X + 90) + "  " + Y
      );
      elem.nativeElement.children[1].children[0].setAttributeNS(null, "cy", (Y - 3).toString());
      elem.nativeElement.children[1].children[0].setAttributeNS(null, "cx", (X + 90).toString());

      let addDirectiveClass = new InterfaceRDirective(elem);
      addDirectiveClass.ngOnInit();
    }
    if (type === "provided_interface_rt") {
      elem.nativeElement.children[0].children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + -3) + "  " + (Y + -3)
        + " L " + (X + 55) + "  " + (Y + -64)
        + " L " + (X + 58) + "  " + (Y + -61)
      );
      elem.nativeElement.children[1].children[0].setAttributeNS(null, "cy", (Y - 70).toString());
      elem.nativeElement.children[1].children[0].setAttributeNS(null, "cx", (X + 65).toString());

      let addDirectiveClass = new InterfaceRtDirective(elem);
      addDirectiveClass.ngOnInit();
    }
    if (type === "provided_interface_t") {
      console.log(elem);
      elem.nativeElement.children[0].children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + -5) + "  " + Y
        + " L " + (X + -5) + "  " + (Y + -90)
        + " L " + X + "  " + (Y + -90)
      );
      elem.nativeElement.children[1].children[0].setAttributeNS(null, "cy", (Y - 100).toString());
      elem.nativeElement.children[1].children[0].setAttributeNS(null, "cx", (X - 2).toString());

      let addDirectiveClass = new InterfaceTDirective(elem);
      addDirectiveClass.ngOnInit();
    }
    if (type === "provided_interface_lt") {
      console.log(elem);
      elem.nativeElement.children[0].children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 4) + "  " + (Y + -4)
        + " L " + (X + -71) + "  " + (Y + -75)
        + " L " + (X + -76) + "  " + (Y + -70)
      );
      elem.nativeElement.children[1].children[0].setAttributeNS(null, "cy", (Y - 80).toString());
      elem.nativeElement.children[1].children[0].setAttributeNS(null, "cx", (X - 80).toString());

      let addDirectiveClass = new InterfaceLtDirective(elem);
      addDirectiveClass.ngOnInit();
    }
    if (type === "provided_interface_l") {
      console.log(elem);
      elem.nativeElement.children[0].children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + X + "  " + (Y + -5)
        + " L " + (X + 90) + "  " + (Y + -5)
        + " L " + (X + 90) + "  " + Y
      );
      elem.nativeElement.children[1].children[0].setAttributeNS(null, "cy", (Y - 3).toString());
      elem.nativeElement.children[1].children[0].setAttributeNS(null, "cx", (X - 10).toString());

      let addDirectiveClass = new InterfaceLDirective(elem);
      addDirectiveClass.ngOnInit();
    }
    if (type === "provided_interface_lb") {
      console.log(elem);
      elem.nativeElement.children[0].children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + -3) + "  " + (Y + -3)
        + " L " + (X + 55) + "  " + (Y + -64)
        + " L " + (X + 58) + "  " + (Y + -61)
      );
      elem.nativeElement.children[1].children[0].setAttributeNS(null, "cy", (Y + 8).toString());
      elem.nativeElement.children[1].children[0].setAttributeNS(null, "cx", (X - 8).toString());

      let addDirectiveClass = new InterfaceLbDirective(elem);
      addDirectiveClass.ngOnInit();
    }
    if (type === "provided_interface_b") {
      console.log(elem);
      elem.nativeElement.children[0].children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + -5) + "  " + Y
        + " L " + (X + -5) + "  " + (Y + -90)
        + " L " + X + "  " + (Y + -90)
      );
      elem.nativeElement.children[1].children[0].setAttributeNS(null, "cy", (Y - 3).toString());
      elem.nativeElement.children[1].children[0].setAttributeNS(null, "cx", (X - 3).toString());

      let addDirectiveClass = new InterfaceBDirective(elem);
      addDirectiveClass.ngOnInit();
    }
    if (type === "provided_interface_rb") {
      console.log(elem);
      elem.nativeElement.children[0].children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 4) + "  " + (Y + -4)
        + " L " + (X + -71) + "  " + (Y + -75)
        + " L " + (X + -76) + "  " + (Y + -70)
      );
      elem.nativeElement.children[1].children[0].setAttributeNS(null, "cy", (Y + 4).toString());
      elem.nativeElement.children[1].children[0].setAttributeNS(null, "cx", (X + 8).toString());

      let addDirectiveClass = new InterfaceRbDirective(elem);
      addDirectiveClass.ngOnInit();
    }
    if (type === "constraint") {
      elem.nativeElement.children[0].children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + (X + 7) + "  " + Y
        + " L " + (X + 7) + "  " + (Y + 12)
        + " L " + X + "  " + (Y + 12)
        + " M " + X + "  " + (Y + 17)
        + " L " + (X + 7) + "  " + (Y + 17)
        + " L " + (X + 7) + "  " + (Y + 29)
        + " L " + X + "  " + (Y + 29)
      );

      elem.nativeElement.children[1].children[0].setAttributeNS(null, "y", (Y + 35).toString());
      elem.nativeElement.children[1].children[0].setAttributeNS(null, "x", (X - 75).toString());
      elem.nativeElement.children[2].children[0].setAttributeNS(null, "y", (Y + 60).toString());
      elem.nativeElement.children[2].children[0].setAttributeNS(null, "x", (X - 70).toString());

      const group = elem;
      let addDirectiveClass = new MoveableDraggableDirective(group);
      addDirectiveClass.ngOnInit();

      const svgTextElem = new ElementRef(elem.nativeElement.children[2]);
      svgTextElem.nativeElement.addEventListener('dblclick', () => this.onTextEdit(svgTextElem), true);
    }
    if (type === "node") {
      console.log(elem);

      elem.nativeElement.children[0].children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + X + "  " + (Y + -75)
        + " L " + (X + 150) + "  " + (Y + -75)
        + " L " + (X + 150) + "  " + Y
        + " L " + X + "  " + Y
      );
      elem.nativeElement.children[0].children[1].setAttributeNS(null, "d",
        " M " + (X + 161) + "  " + (Y + -7)
        + " L " + (X + 161) + "  " + (Y + -85)
        + " L " + (X + 150) + "  " + (Y + -75)
        + " L " + (X + 150) + "  " + Y
        + " L " + (X + 161) + "  " + (Y + -7)
      );
      elem.nativeElement.children[0].children[2].setAttributeNS(null, "d",
        " M " + X + "  " + (Y + -75)
        + " L " + (X + 11) + "  " + (Y + -85)
        + " L " + (X + 161) + "  " + (Y + -85)
        + " L " + (X + 150) + "  " + (Y + -75)
      );
      elem.nativeElement.children[1].children[0].setAttributeNS(null, "y", (Y - 50).toString());
      elem.nativeElement.children[1].children[0].setAttributeNS(null, "x", (X + 10).toString());

      let addDirectiveClass = new NodeDirective(elem);
      addDirectiveClass.ngOnInit();
      const svgTextElem = new ElementRef(elem.nativeElement.children[1]);
      svgTextElem.nativeElement.addEventListener('dblclick', () => this.onTextEdit(svgTextElem), true);
    }
    if (type === "artifact") {
      console.log(elem);
      elem.nativeElement.children[1].children[0].setAttributeNS(null, "d",
        " M " + X + "  " + Y
        + " L " + X + "  " + (Y + -20)
        + " L " + (X + 10) + "  " + (Y + -20)
        + " L " + (X + 15) + "  " + (Y + -15)
        + " L " + (X + 15) + "  " + Y
        + " L " + X + "  " + Y
        + " M " + (X + 10) + "  " + (Y + -20)
        + " L " + (X + 10) + "  " + (Y + -15)
        + " L " + (X + 15) + "  " + (Y + -15)
        + " L " + (X + 10) + "  " + (Y + -15)
      );
      elem.nativeElement.children[0].children[0].setAttributeNS(null, "y", (Y - 30).toString());
      elem.nativeElement.children[0].children[0].setAttributeNS(null, "x", (X - 125).toString());
      elem.nativeElement.children[2].children[0].setAttributeNS(null, "y", (Y + 5).toString());
      elem.nativeElement.children[2].children[0].setAttributeNS(null, "x", (X - 120).toString());

      let addDirectiveClass = new ArtifactDirective(elem);
      addDirectiveClass.ngOnInit();

      const svgTextElem = new ElementRef(elem.nativeElement.children[2]);
      svgTextElem.nativeElement.addEventListener('dblclick', () => this.onTextEdit(svgTextElem), true);
      console.log(svgTextElem);

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
