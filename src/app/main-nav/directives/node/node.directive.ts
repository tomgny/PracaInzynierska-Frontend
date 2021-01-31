import { Directive, ElementRef, EventEmitter, HostListener, inject, Input, OnInit, Output } from '@angular/core';
import * as InteractJS from 'interactjs/dist/interact.js';

@Directive({
  selector: '[appNode]'
})
export class NodeDirective {

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
        edges: { left: false, right: true, bottom: true, top: false },

        listeners: {
          move(event) {
            //console.log(event);
            const centerSquare = event.target.children[0].children[0];
            const rightSquare = event.target.children[0].children[1];
            const topSquare = event.target.children[0].children[2];

            let changeY = 0;
            let changeX = 0;

            if (event.edges.right) {
              changeX = event.delta.x;
            }
            if (event.edges.bottom) {
              changeY = event.delta.y;
            }

            let arrayString = centerSquare.getAttributeNS(null, 'd').split('L').join(' ').split('M').join(' ').split('   ').join(' ').split('  ').join(' ');
            let arrayParams = arrayString.split(' ').map(x => +x);

            let firstSquareLTx = arrayParams[1];
            let firstSquareLTy = arrayParams[2];

            let firstSquareLBx = arrayParams[3];
            let firstSquareLBy = arrayParams[4];

            let firstSquareRTx = arrayParams[5];
            let firstSquareRTy = arrayParams[6];

            let firstSquareRBx = arrayParams[7];
            let firstSquareRBy = arrayParams[8];

            let secondSquareLTx = arrayParams[9];
            let secondSquareLTy = arrayParams[10];
            centerSquare.setAttributeNS(null, "d",
              "M " + firstSquareLTx + " " + (firstSquareLTy + changeY)
              + " L " + firstSquareLBx + " " + firstSquareLBy
              + " L " + (firstSquareRTx + changeX) + " " + firstSquareRTy
              + " L " + (firstSquareRBx + changeX) + " " + (firstSquareRBy + changeY)
              + " L " + secondSquareLTx + " " + (secondSquareLTy + changeY)
            );

            arrayString = rightSquare.getAttributeNS(null, 'd').split('L').join(' ').split('M').join(' ').split('   ').join(' ').split('  ').join(' ');
            arrayParams = arrayString.split(' ').map(x => +x);

            firstSquareLTx = arrayParams[1];
            firstSquareLTy = arrayParams[2];

            firstSquareLBx = arrayParams[3];
            firstSquareLBy = arrayParams[4];

            firstSquareRTx = arrayParams[5];
            firstSquareRTy = arrayParams[6];

            firstSquareRBx = arrayParams[7];
            firstSquareRBy = arrayParams[8];

            secondSquareLTx = arrayParams[9];
            secondSquareLTy = arrayParams[10];

            rightSquare.setAttributeNS(null, "d",
              "M " + (firstSquareLTx + changeX) + " " + (firstSquareLTy + changeY)
              + " L " + (firstSquareLBx + changeX) + " " + firstSquareLBy
              + " L " + (firstSquareRTx + changeX) + " " + firstSquareRTy
              + " L " + (firstSquareRBx + changeX) + " " + (firstSquareRBy + changeY)
              + " L " + (secondSquareLTx + changeX) + " " + (secondSquareLTy + changeY)
            );

            arrayString = topSquare.getAttributeNS(null, 'd').split('L').join(' ').split('M').join(' ').split('   ').join(' ').split('  ').join(' ');
            arrayParams = arrayString.split(' ').map(x => +x);

            firstSquareLTx = arrayParams[1];
            firstSquareLTy = arrayParams[2];

            firstSquareLBx = arrayParams[3];
            firstSquareLBy = arrayParams[4];

            firstSquareRTx = arrayParams[5];
            firstSquareRTy = arrayParams[6];

            firstSquareRBx = arrayParams[7];
            firstSquareRBy = arrayParams[8];

            topSquare.setAttributeNS(null, "d",
              "M " + firstSquareLTx + " " + firstSquareLTy
              + " L " + firstSquareLBx + " " + firstSquareLBy
              + " L " + (firstSquareRTx + changeX) + " " + firstSquareRTy
              + " L " + (firstSquareRBx + changeX) + " " + firstSquareRBy
            );

          }
        },
        modifiers: [
          // minimum size
          InteractJS.modifiers.restrictSize({
            min: { width: 161, height: 85 }
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


