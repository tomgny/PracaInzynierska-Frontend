import { Directive, ElementRef, EventEmitter, HostListener, inject, Input, OnInit, Output } from '@angular/core';
import * as InteractJS from 'interactjs/dist/interact.js';

@Directive({
  selector: '[appArtifact]'
})
export class ArtifactDirective {

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
            const artifactNote = event.target.children[1].children[0];
            const square = event.target.children[0].children[0];
            let changeY = 0;
            let changeX = 0;

            if (event.edges.right) {
              changeX = event.delta.x;
            }
            if (event.edges.bottom) {
              changeY = event.delta.y;
            }

            const arrayString = artifactNote.getAttributeNS(null, 'd').split('L').join(' ').split('M').join(' ').split('   ').join(' ').split('  ').join(' ');
            const arrayParams = arrayString.split(' ').map(x => +x);

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

            artifactNote.setAttributeNS(null, "d",
              "M " + (firstSquareLTx + changeX) + " " + firstSquareLTy
              + " L " + (firstSquareLBx + changeX) + " " + firstSquareLBy
              + " L " + (firstSquareRTx + changeX) + " " + firstSquareRTy
              + " L " + (firstSquareRBx + changeX) + " " + firstSquareRBy
              + " L " + (secondSquareLTx + changeX) + " " + secondSquareLTy
              + " L " + (secondSquareLBx + changeX) + " " + secondSquareLBy
              + " M " + (secondSquareRTx + changeX) + " " + secondSquareRTy
              + " L " + (secondSquareRBx + changeX) + " " + secondSquareRBy
              + " L " + (thirdSquareLTx + changeX) + " " + thirdSquareLTy
              + " L " + (thirdSquareLBx + changeX) + " " + thirdSquareLBy
            );
            console.log(square);

            let width: number = square.getAttribute('width');
            let height: number = square.getAttribute('height');
            console.log(width);

            square.setAttribute('width', (+width + changeX));
            square.setAttribute('height', (+height + changeY));
          }
        },
        modifiers: [
          // minimum size
          InteractJS.modifiers.restrictSize({
            min: { width: 150, height: 60 }
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



