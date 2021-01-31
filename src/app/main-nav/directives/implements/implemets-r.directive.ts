import { Directive, ElementRef, EventEmitter, HostListener, inject, Input, OnInit, Output } from '@angular/core';
import * as InteractJS from 'interactjs/dist/interact.js';

@Directive({
  selector: '[appImplemetsR]'
})
export class ImplemetsRDirective {

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
            //console.log(target.parentElement.children);

            const style = window.getComputedStyle(target);
            //console.log(target.getAttributeNS(null, 'd'));
            const arrayString = target.getAttributeNS(null, 'd').split('L').join(' ').split('M').join(' ').split('   ').join(' ').split('  ').join(' ');
            //console.log(arrayString);

            const arrayParams = arrayString.split(' ').map(x => +x);
            //console.log(arrayParams);

            const firstSquareLTx = arrayParams[1];
            const firstSquareLTy = arrayParams[2];

            const firstSquareLBx = arrayParams[3];
            const firstSquareLBy = arrayParams[4];

            const firstSquareRTx = arrayParams[5];
            const firstSquareRTy = arrayParams[6];

            const firstSquareRBx = arrayParams[7];
            const firstSquareRBy = arrayParams[8];

            const secondSquareLTx = arrayParams[9];
            const secondSquareLTy = arrayParams[10];

            const secondSquareLBx = arrayParams[11];
            const secondSquareLBy = arrayParams[12];

            const secondSquareRTx = arrayParams[13];
            const secondSquareRTy = arrayParams[14];

            const secondSquareRBx = arrayParams[15];
            const secondSquareRBy = arrayParams[16];

            const thirdSquareLTx = arrayParams[17];
            const thirdSquareLTy = arrayParams[18];

            const thirdSquareLBx = arrayParams[19];
            const thirdSquareLBy = arrayParams[20];

            const thirdSquareRTx = arrayParams[21];
            const thirdSquareRTy = arrayParams[22];

            const thirdSquareRBx = arrayParams[23];
            const thirdSquareRBy = arrayParams[24];

            const fourthSquareLTx = arrayParams[25];
            const fourthSquareLTy = arrayParams[26];

            const fourthSquareLBx = arrayParams[27];
            const fourthSquareLBy = arrayParams[28];

            const fourthSquareRTx = arrayParams[29];
            const fourthSquareRTy = arrayParams[30];

            const fourthSquareRBx = arrayParams[31];
            const fourthSquareRBy = arrayParams[32];

            const fifthSquareLTx = arrayParams[33];
            const fifthSquareLTy = arrayParams[34];

            const fifthSquareLBx = arrayParams[35];
            const fifthSquareLBy = arrayParams[36];

            const fifthSquareRTx = arrayParams[37];
            const fifthSquareRTy = arrayParams[38];

            const fifthSquareRBx = arrayParams[39];
            const fifthSquareRBy = arrayParams[40];

            const firstInsideArrowX = arrayParams[41];
            const firstInsideArrowY = arrayParams[42];
            const secondInsideArrowX = arrayParams[43];
            const secondInsideArrowY = arrayParams[44];
            const thirdInsideArrowX = arrayParams[45];
            const thirdInsideArrowY = arrayParams[46];

            const firstOutsideArrowX = arrayParams[47];
            const firstOutsideArrowY = arrayParams[48];
            const secondOutsideArrowX = arrayParams[49];
            const secondOutsideArrowY = arrayParams[50];
            const thirdOutsideArrowX = arrayParams[51];
            const thirdOutsideArrowY = arrayParams[52];


            let resizeLeft = false;
            let resizeRight = false;

            let dataX = (parseFloat(target.getAttribute('data-x')) || 0);
            let dataY = (parseFloat(target.getAttribute('data-y')) || 0);
            let parentScrollLeft = event.currentTarget.parentElement.parentElement.parentElement.scrollLeft;
            if ((event.client.x + parentScrollLeft - dataX) + 50 > thirdOutsideArrowX && (event.client.x + parentScrollLeft - dataX) - 50 < thirdOutsideArrowX) {
              resizeRight = true;
              console.log("RIGHT!");

            }
            if ((event.client.x + parentScrollLeft - dataX) + 50 > firstSquareLTx && (event.client.x + parentScrollLeft - dataX) - 50 < firstSquareLTx) {
              resizeLeft = true;
              console.log("LEFT!");
            }

            let changeX = event.delta.x;
            //console.log(firstSquareLTx);
            //console.log(firstSquareLTy);
            //console.log(event.delta.x);



            if (resizeLeft) {
              target.setAttributeNS(null, "d",
                "M " + (firstSquareLTx + changeX) + " " + firstSquareLTy
                + " L " + (firstSquareLBx + changeX) + " " + firstSquareLBy
                + " L " + firstSquareRTx + " " + firstSquareRTy
                + " L " + firstSquareRBx + " " + firstSquareRBy
                + " M " + secondSquareLTx + " " + secondSquareLTy
                + " L " + secondSquareLBx + " " + secondSquareLBy
                + " L " + secondSquareRTx + " " + secondSquareRTy
                + " L " + secondSquareRBx + " " + secondSquareRBy
                + " M " + thirdSquareLTx + " " + thirdSquareLTy
                + " L " + thirdSquareLBx + " " + thirdSquareLBy
                + " L " + thirdSquareRTx + " " + thirdSquareRTy
                + " L " + thirdSquareRBx + " " + thirdSquareRBy
                + " M " + fourthSquareLTx + " " + fourthSquareLTy
                + " L " + fourthSquareLBx + " " + fourthSquareLBy
                + " L " + fourthSquareRTx + " " + fourthSquareRTy
                + " L " + fourthSquareRBx + " " + fourthSquareRBy
                + " M " + fifthSquareLTx + " " + fifthSquareLTy
                + " L " + fifthSquareLBx + " " + fifthSquareLBy
                + " L " + fifthSquareRTx + " " + fifthSquareRTy
                + " L " + fifthSquareRBx + " " + fifthSquareRBy
                + " M " + firstInsideArrowX + " " + firstInsideArrowY
                + " L " + secondInsideArrowX + " " + secondInsideArrowY
                + " L " + thirdInsideArrowX + " " + thirdInsideArrowY
                + " M " + firstOutsideArrowX + " " + firstOutsideArrowY
                + " L " + secondOutsideArrowX + " " + secondOutsideArrowY
                + " L " + thirdOutsideArrowX + " " + thirdOutsideArrowY
              );
            }
            if (resizeRight) {
              target.setAttributeNS(null, "d",
                "M " + firstSquareLTx + " " + firstSquareLTy
                + " L " + firstSquareLBx + " " + firstSquareLBy
                + " L " + firstSquareRTx + " " + firstSquareRTy
                + " L " + firstSquareRBx + " " + firstSquareRBy
                + " M " + secondSquareLTx + " " + secondSquareLTy
                + " L " + secondSquareLBx + " " + secondSquareLBy
                + " L " + secondSquareRTx + " " + secondSquareRTy
                + " L " + secondSquareRBx + " " + secondSquareRBy
                + " M " + thirdSquareLTx + " " + thirdSquareLTy
                + " L " + thirdSquareLBx + " " + thirdSquareLBy
                + " L " + thirdSquareRTx + " " + thirdSquareRTy
                + " L " + thirdSquareRBx + " " + thirdSquareRBy
                + " M " + fourthSquareLTx + " " + fourthSquareLTy
                + " L " + fourthSquareLBx + " " + fourthSquareLBy
                + " L " + fourthSquareRTx + " " + fourthSquareRTy
                + " L " + fourthSquareRBx + " " + fourthSquareRBy
                + " M " + fifthSquareLTx + " " + fifthSquareLTy
                + " L " + fifthSquareLBx + " " + fifthSquareLBy
                + " L " + (fifthSquareRTx + changeX) + " " + fifthSquareRTy
                + " L " + (fifthSquareRBx + changeX) + " " + fifthSquareRBy
                + " M " + (firstInsideArrowX + changeX) + " " + firstInsideArrowY
                + " L " + (secondInsideArrowX + changeX) + " " + secondInsideArrowY
                + " L " + (thirdInsideArrowX + changeX) + " " + thirdInsideArrowY
                + " M " + (firstOutsideArrowX + changeX) + " " + firstOutsideArrowY
                + " L " + (secondOutsideArrowX + changeX) + " " + secondOutsideArrowY
                + " L " + (thirdOutsideArrowX + changeX) + " " + thirdOutsideArrowY
              );
            }

          }
        },
        modifiers: [
          // minimum size
          InteractJS.modifiers.restrictSize({
            min: { width: 109, height: 36 }
          })
        ],

        inertia: true
      })
      .on('resizeend', (event) => {
        /*
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
        */
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

        event.target.classList.remove('getting-dragged');
        setTimeout(() => {
          (window as any).dragData = null;
          this.currentlyDragged = false;
        });
      });
  }
}
