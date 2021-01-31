import { Directive, ElementRef, EventEmitter, HostListener, inject, Input, OnInit, Output } from '@angular/core';
import * as InteractJS from 'interactjs/dist/interact.js';

@Directive({
  selector: '[appLifeline]'
})
export class LifelineDirective {

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
    InteractJS(this.element.nativeElement)

      .resizable({
        // resize from all edges and corners
        edges: { left: false, right: false, bottom: true, top: false },

        listeners: {
          move(event) {
            const target = event.target.children[0].children[0]

            const arrayString = target.getAttributeNS(null, 'd').split('L').join(' ').split('M').join(' ').split('   ').join(' ').split('  ').join(' ');
            const arrayParams = arrayString.split(' ').map(x => +x);
            //console.log(arrayParams.length);
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

            let changeY = event.delta.y;

            if (arrayParams.length == 73) {//actor
              target.setAttributeNS(null, "d",
                "M " + firstSquareLTx + " " + firstSquareLTy
                + " L " + firstSquareLBx + " " + firstSquareLBy
                + " L " + firstSquareRTx + " " + firstSquareRTy
                + " L " + firstSquareRBx + " " + firstSquareRBy
                + " M " + secondSquareLTx + " " + (secondSquareLTy + changeY)
                + " L " + secondSquareLBx + " " + (secondSquareLBy + changeY)
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
                + " M " + arrayParams[41] + "  " + arrayParams[42]
                + " L " + arrayParams[43] + "  " + arrayParams[44]
                + " L " + arrayParams[45] + "  " + arrayParams[46]
                + " L " + arrayParams[47] + "  " + arrayParams[48]
                + " M " + arrayParams[49] + "  " + arrayParams[50]
                + " L " + arrayParams[51] + "  " + arrayParams[52]
                + " L " + arrayParams[53] + "  " + arrayParams[54]
                + " L " + arrayParams[55] + "  " + arrayParams[56]
                + " M " + arrayParams[57] + "  " + arrayParams[58]
                + " L " + arrayParams[59] + "  " + arrayParams[60]
                + " L " + arrayParams[61] + "  " + arrayParams[62]
                + " L " + arrayParams[63] + "  " + arrayParams[64]
                + " M " + arrayParams[65] + "  " + arrayParams[66]
                + " L " + arrayParams[67] + "  " + arrayParams[68]
                + " L " + arrayParams[69] + "  " + arrayParams[70]
                + " L " + arrayParams[71] + "  " + arrayParams[72]
              );
            }

            else if (arrayParams.length == 57) {//boundary
              target.setAttributeNS(null, "d",
                "M " + firstSquareLTx + " " + firstSquareLTy
                + " L " + firstSquareLBx + " " + firstSquareLBy
                + " L " + firstSquareRTx + " " + firstSquareRTy
                + " L " + firstSquareRBx + " " + firstSquareRBy
                + " M " + secondSquareLTx + " " + (secondSquareLTy + changeY)
                + " L " + secondSquareLBx + " " + (secondSquareLBy + changeY)
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
                + " M " + arrayParams[41] + "  " + arrayParams[42]
                + " L " + arrayParams[43] + "  " + arrayParams[44]
                + " L " + arrayParams[45] + "  " + arrayParams[46]
                + " L " + arrayParams[47] + "  " + arrayParams[48]
                + " M " + arrayParams[49] + "  " + arrayParams[50]
                + " L " + arrayParams[51] + "  " + arrayParams[52]
                + " L " + arrayParams[53] + "  " + arrayParams[54]
                + " L " + arrayParams[55] + "  " + arrayParams[56]
              );
            }

            else if (arrayParams.length == 59) {//control
              target.setAttributeNS(null, "d",
                "M " + firstSquareLTx + " " + firstSquareLTy
                + " L " + firstSquareLBx + " " + firstSquareLBy
                + " L " + firstSquareRTx + " " + firstSquareRTy
                + " L " + firstSquareRBx + " " + firstSquareRBy
                + " M " + secondSquareLTx + " " + (secondSquareLTy + changeY)
                + " L " + secondSquareLBx + " " + (secondSquareLBy + changeY)
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
                + " M " + arrayParams[41] + "  " + arrayParams[42]
                + " L " + arrayParams[43] + "  " + arrayParams[44]
                + " L " + arrayParams[45] + "  " + arrayParams[46]
                + " L " + arrayParams[47] + "  " + arrayParams[48]
                + " M " + arrayParams[49] + "  " + arrayParams[50]
                + " L " + arrayParams[51] + "  " + arrayParams[52]
                + " L " + arrayParams[53] + "  " + arrayParams[54]
                + " L " + arrayParams[55] + "  " + arrayParams[56]
                + " M " + arrayParams[57] + "  " + arrayParams[58]
              );
            }

            else if (arrayParams.length == 49) {//entity
              target.setAttributeNS(null, "d",
                "M " + firstSquareLTx + " " + firstSquareLTy
                + " L " + firstSquareLBx + " " + firstSquareLBy
                + " L " + firstSquareRTx + " " + firstSquareRTy
                + " L " + firstSquareRBx + " " + firstSquareRBy
                + " M " + secondSquareLTx + " " + (secondSquareLTy + changeY)
                + " L " + secondSquareLBx + " " + (secondSquareLBy + changeY)
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
                + " M " + arrayParams[41] + "  " + arrayParams[42]
                + " L " + arrayParams[43] + "  " + arrayParams[44]
                + " L " + arrayParams[45] + "  " + arrayParams[46]
                + " L " + arrayParams[47] + "  " + arrayParams[48]
              );
            }
            else {//object
              target.setAttributeNS(null, "d",
                "M " + firstSquareLTx + " " + firstSquareLTy
                + " L " + firstSquareLBx + " " + firstSquareLBy
                + " L " + firstSquareRTx + " " + firstSquareRTy
                + " L " + firstSquareRBx + " " + firstSquareRBy
                + " M " + secondSquareLTx + " " + (secondSquareLTy + changeY)
                + " L " + secondSquareLBx + " " + (secondSquareLBy + changeY)
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
              );
            }
          }
        },
        modifiers: [
          // minimum size
          InteractJS.modifiers.restrictSize({
            min: { width: 150, height: 310 }
          })
        ],

        inertia: true

      })
      .draggable(Object.assign({}, this.options ||
      {
        modifiers: [
          // keep the edges inside the parent
          InteractJS.modifiers.restrictRect({
            //restriction: 'parent.parent'
          })]
      },
      ))
      .on('dragmove', (event) => {
        //console.log(event);
        const childrens = event.currentTarget.children;
        for (let child of childrens) {
          //console.log(child.children);
          for (let elem of child.children) {
            const target = elem;
            const marginPixels = 100;
            const addPixels = 10;
            const startX = target.getBoundingClientRect().x;
            const startY = target.getBoundingClientRect().y;
            const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
            const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

            if ((startX + x + marginPixels) >= target.parentElement.parentElement.parentElement.clientWidth) {//RESIZE RIGHT

              target.parentElement.parentElement.parentElement.style.width = target.parentElement.parentElement.parentElement.clientWidth + addPixels;
            }

            if ((startY + y + marginPixels) >= target.parentElement.parentElement.parentElement.clientHeight) {//RESIZE BOTTOM
              target.parentElement.parentElement.parentElement.style.height = target.parentElement.parentElement.parentElement.clientHeight + addPixels;
            }

            target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);

            target.classList.add('getting-dragged');
            this.currentlyDragged = true;

          }

        }
      })
      .on('dragend', (event) => {
        const childrens = event.currentTarget.children;
        for (let child of childrens) {
          for (let elem of child.children) {
            elem.classList.remove('getting-dragged');
            setTimeout(() => {
              (window as any).dragData = null;
              this.currentlyDragged = false;
            });
          }
        }
      });
  }
}

