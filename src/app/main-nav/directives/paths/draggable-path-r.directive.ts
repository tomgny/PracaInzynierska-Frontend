import { Inject } from '@angular/core';
import { Directive, ElementRef, EventEmitter, HostListener, inject, Input, OnInit, Output } from '@angular/core';
//import { interact } from '@interactjs/interact/interact';
import * as InteractJS from 'interactjs/dist/interact.js';
import { UmlComponentConnector } from '../../../models/uml-component-connector.model';

@Directive({
  selector: '[appDraggablePath]'
})
export class DraggablePathRDirective {

  @Input()
  model: any;

  @Input()
  options: any;

  @Output()
  draggableClick = new EventEmitter();

  private currentlyDragged = false;

  constructor(private element: ElementRef) { }

  @HostListener('click', ['$event'])
  public onClick(event: any): void {
    if (!this.currentlyDragged) {
      this.draggableClick.emit();
    }
  }


  ngOnInit(): void {
    //console.log(this.umlObject);
    InteractJS(this.element.nativeElement)

      .draggable(Object.assign({}, this.options || {}))

      .resizable({
        // resize from all edges and corners
        edges: { left: true, right: true, bottom: false, top: false },

        listeners: {
          move(event) {

            const target = event.target;
            //console.log(event);
            console.log(target.parentElement.children);

            const style = window.getComputedStyle(target);
            //console.log(target.getAttributeNS(null, 'd'));
            const arrayString = target.getAttributeNS(null, 'd').split('L').join(' ').split('M').join(' ').split('   ').join(' ');
            const arrayParams = arrayString.split(' ').map(x => +x);
            //console.log(arrayParams);

            const lineFirstX = arrayParams[2];
            const lineFirstY = arrayParams[3];

            const lineSecondX = arrayParams[4];
            const lineSecondY = arrayParams[5];

            const lineThirdX = arrayParams[6];
            const lineThirdY = arrayParams[7];

            const lineFourthX = arrayParams[8];
            const lineFourthY = arrayParams[9];

            const arrowFirstX = arrayParams[10];
            const arrowFirstY = arrayParams[11];

            const arrowSecondX = arrayParams[12];
            const arrowSecondY = arrayParams[13];

            const arrowThirdX = arrayParams[14];
            const arrowThirdY = arrayParams[15];

            const arrowFourthX = arrayParams[16];
            const arrowFourthY = arrayParams[17];

            const arrowFifthX = arrayParams[18];
            const arrowFifthY = arrayParams[19];

            const arrowSixthX = arrayParams[20];
            const arrowSixthY = arrayParams[21];

            let resizeLeft = false;
            let resizeRight = false;

            let dataX = (parseFloat(target.getAttribute('data-x')) || 0);
            let dataY = (parseFloat(target.getAttribute('data-y')) || 0);
            let parentScrollLeft = event.currentTarget.parentElement.parentElement.parentElement.scrollLeft;

            if ((event.client.x + parentScrollLeft - dataX) + 50 > arrowSixthX && (event.client.x + parentScrollLeft - dataX) - 50 < arrowSixthX) {
              resizeRight = true;
              console.log("RIGHT!");

            }
            if ((event.client.x + parentScrollLeft - dataX) + 50 > lineFirstX && (event.client.x + parentScrollLeft - dataX) - 50 < lineFirstX) {
              resizeLeft = true;
              console.log("LEFT!");
            }

            let changeX = event.delta.x;

            if (resizeLeft) {
              if (event.delta.x < 0) {
                target.setAttributeNS(null, "d",
                  "M " + (lineFirstX + changeX) + " " + lineFirstY
                  + " L " + (lineSecondX + changeX) + " " + lineSecondY
                  + " L " + lineThirdX + " " + lineThirdY
                  + " L " + lineFourthX + " " + lineFourthY
                  + " M " + arrowFirstX + " " + arrowFirstY
                  + " L " + arrowSecondX + " " + arrowSecondY
                  + " L " + arrowThirdX + " " + arrowThirdY
                  + " M " + arrowFourthX + " " + arrowFourthY
                  + " L " + arrowFifthX + " " + arrowFifthY
                  + " L " + arrowSixthX + " " + arrowSixthY);
              }
              if (event.delta.x > 0 && (lineFirstX + arrowSixthX) > 100) {
                target.setAttributeNS(null, "d",
                  "M " + (lineFirstX + changeX) + " " + lineFirstY
                  + " L " + (lineSecondX + changeX) + " " + lineSecondY
                  + " L " + lineThirdX + " " + lineThirdY
                  + " L " + lineFourthX + " " + lineFourthY
                  + " M " + arrowFirstX + " " + arrowFirstY
                  + " L " + arrowSecondX + " " + arrowSecondY
                  + " L " + arrowThirdX + " " + arrowThirdY
                  + " M " + arrowFourthX + " " + arrowFourthY
                  + " L " + arrowFifthX + " " + arrowFifthY
                  + " L " + arrowSixthX + " " + arrowSixthY);
              }
            }
            if (resizeRight) {
              if (event.delta.x < 0) {
                target.setAttributeNS(null, "d",
                  "M " + lineFirstX + " " + lineFirstY
                  + " L " + lineSecondX + " " + lineSecondY
                  + " L " + (lineThirdX + changeX) + " " + lineThirdY
                  + " L " + (lineFourthX + changeX) + " " + lineFourthY
                  + " M " + (arrowFirstX + changeX) + " " + arrowFirstY
                  + " L " + (arrowSecondX + changeX) + " " + arrowSecondY
                  + " L " + (arrowThirdX + changeX) + " " + arrowThirdY
                  + " M " + (arrowFourthX + changeX) + " " + arrowFourthY
                  + " L " + (arrowFifthX + changeX) + " " + arrowFifthY
                  + " L " + (arrowSixthX + changeX) + " " + arrowSixthY);
              }
              if (event.delta.x > 0 && (lineFirstX + arrowSixthX) > 100) {
                target.setAttributeNS(null, "d",
                  "M " + lineFirstX + " " + lineFirstY
                  + " L " + lineSecondX + " " + lineSecondY
                  + " L " + (lineThirdX + changeX) + " " + lineThirdY
                  + " L " + (lineFourthX + changeX) + " " + lineFourthY
                  + " M " + (arrowFirstX + changeX) + " " + arrowFirstY
                  + " L " + (arrowSecondX + changeX) + " " + arrowSecondY
                  + " L " + (arrowThirdX + changeX) + " " + arrowThirdY
                  + " M " + (arrowFourthX + changeX) + " " + arrowFourthY
                  + " L " + (arrowFifthX + changeX) + " " + arrowFifthY
                  + " L " + (arrowSixthX + changeX) + " " + arrowSixthY);
              }
            }
          }
        },
        modifiers: [
          // minimum size
          InteractJS.modifiers.restrictSize({
            min: { width: 100, height: 50 }
          })
        ],

        inertia: true
      })
      .on('resizeend', (event) => {
        const target = event.target;

        const arrayString = target.getAttributeNS(null, 'd').split('L').join(' ').split('M').join(' ').split('   ').join(' ');
        const arrayParams = arrayString.split(' ').map(x => +x);

        const lineFirstX = arrayParams[2];
        const lineFirstY = arrayParams[3];
        const arrowSixthX = arrayParams[20];
        const arrowSixthY = arrayParams[21];

        for (let elem of event.target.parentElement.children) {

          if (elem.tagName === 'rect') {
            const rectFirstX = parseInt(elem.getAttribute('x')) + parseInt(elem.getAttribute('data-x') || 0);
            const rectFirstY = parseInt(elem.getAttribute('y')) + parseInt(elem.getAttribute('data-y') || 0);

            const rectLastX = rectFirstX + parseInt(elem.getAttribute('width'));
            const rectLastY = rectFirstY + parseInt(elem.getAttribute('height'));

            let arrowX = arrowSixthX + parseInt(target.getAttribute('data-x') || 0);
            let arrowY = arrowSixthY + parseInt(target.getAttribute('data-y') || 0);

            let firstX = lineFirstX + parseInt(target.getAttribute('data-x') || 0);
            let firstY = lineFirstY + parseInt(target.getAttribute('data-y') || 0);

            if ((arrowX >= rectFirstX && arrowY >= rectFirstY) && (arrowX <= rectLastX && arrowY <= rectLastY)) {
              console.log('ARROW INSIDE ' + elem.tagName);
            }
            if ((firstX >= rectFirstX && firstY >= rectFirstY) && (firstX <= rectLastX && firstY <= rectLastY)) {
              console.log("START INSIDE " + elem.tagName);
            }
          }
        }

      })
      .on('dragmove', (event) => {
        const target = event.target;
        const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
        const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);

        target.classList.add('getting-dragged');
        this.currentlyDragged = true;
        (window as any).dragData = this.model;
      })
      .on('dragend', (event) => {
        // const target = event.target;

        // const arrayString = target.getAttributeNS(null, 'd').split('L').join(' ').split('M').join(' ').split('   ').join(' ');
        // const arrayParams = arrayString.split(' ').map(x => +x);

        // const lineFirstX = arrayParams[2];
        // const lineFirstY = arrayParams[3];
        // const arrowSixthX = arrayParams[20];
        // const arrowSixthY = arrayParams[21];

        // this.umlElement.connectFromId = -1;
        // this.umlElement.connectToId = -1;

        // for (let i = 0; i < target.parentElement.children.length; i++) {

        //   if (target.parentElement.children[i].tagName === 'rect') {
        //     const rectFirstX = parseInt(target.parentElement.children[i].getAttribute('x')) + parseInt(target.parentElement.children[i].getAttribute('data-x') || 0);
        //     const rectFirstY = parseInt(target.parentElement.children[i].getAttribute('y')) + parseInt(target.parentElement.children[i].getAttribute('data-y') || 0);

        //     const rectLastX = rectFirstX + parseInt(target.parentElement.children[i].getAttribute('width'));
        //     const rectLastY = rectFirstY + parseInt(target.parentElement.children[i].getAttribute('height'));

        //     let arrowX = arrowSixthX + parseInt(target.getAttribute('data-x') || 0);
        //     let arrowY = arrowSixthY + parseInt(target.getAttribute('data-y') || 0);

        //     let firstX = lineFirstX + parseInt(target.getAttribute('data-x') || 0);
        //     let firstY = lineFirstY + parseInt(target.getAttribute('data-y') || 0);

        //     if ((arrowX >= rectFirstX && arrowY >= rectFirstY) && (arrowX <= rectLastX && arrowY <= rectLastY)) {
        //       this.umlElement.connectFromId = i;
        //       //console.log('ARROW INSIDE ' + target.parentElement.children[i].tagName);
        //       //console.log('ID ' + i);
        //     }
        //     if ((firstX >= rectFirstX && firstY >= rectFirstY) && (firstX <= rectLastX && firstY <= rectLastY)) {
        //       this.umlElement.connectToId = i;
        //       //console.log("START INSIDE " + target.parentElement.children[i].tagName);
        //       //console.log('ID ' + i);
        //     }
        //     console.log(this.umlElement.connectFromId);
        //     console.log(this.umlElement.connectToId);

        //     if (this.umlElement.connectFromId >= 0 && this.umlElement.connectToId >= 0) {
        //       console.log('INHERIT FROM: ' + this.umlElement.connectFromId + ' INHERIT TO: ' + this.umlElement.connectToId);
        //       this.umlElement.svgGroup.style.fill = "red";
        //       //target.parentElement.children[this.umlElement.inheritFromId].style.backgroundImage = "url(assets/uml_class_diagram/test.svg)";
        //       //target.parentElement.children[this.umlElement.inheritToId].style.fill = "red";
        //     }
        //     else {
        //       this.umlElement.svgGroup.style.fill = "black";
        //     }
        //   }
        // }
        event.target.classList.remove('getting-dragged');
        setTimeout(() => {
          (window as any).dragData = null;
          this.currentlyDragged = false;
        });
      });
  }
}
