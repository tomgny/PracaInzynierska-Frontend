import { Directive, ElementRef, EventEmitter, HostListener, inject, Input, OnInit, Output } from '@angular/core';
import * as InteractJS from 'interactjs/dist/interact.js';

@Directive({
  selector: '[appMessageInternalT]'
})
export class MessageInternalTDirective {

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
        edges: { left: false, right: false, bottom: false, top: true },

        listeners: {
          move(event) {

            const target = event.target.children[0];
            //console.log(event);
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


            let changeY = event.delta.y;

            target.setAttributeNS(null, "d",
              "M " + firstSquareLTx + " " + firstSquareLTy
              + " L " + firstSquareLBx + " " + firstSquareLBy
              + " L " + firstSquareRTx + " " + firstSquareRTy
              + " L " + firstSquareRBx + " " + firstSquareRBy
              + " M " + secondSquareLTx + " " + secondSquareLTy
              + " L " + secondSquareLBx + " " + secondSquareLBy
              + " L " + secondSquareRTx + " " + (secondSquareRTy + changeY)
              + " L " + secondSquareRBx + " " + (secondSquareRBy + changeY)
              + " M " + thirdSquareLTx + " " + (thirdSquareLTy + changeY)
              + " L " + thirdSquareLBx + " " + (thirdSquareLBy + changeY)
              + " L " + thirdSquareRTx + " " + (thirdSquareRTy + changeY)
              + " L " + thirdSquareRBx + " " + (thirdSquareRBy + changeY)
              + " M " + fourthSquareLTx + " " + (fourthSquareLTy + changeY)
              + " L " + fourthSquareLBx + " " + (fourthSquareLBy + changeY)
              + " L " + fourthSquareRTx + " " + (fourthSquareRTy + changeY)
            );
          }
        },
        modifiers: [

          // minimum size
          InteractJS.modifiers.restrictSize({
            min: { width: 27, height: 38 }
          })
        ],

        inertia: true
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
