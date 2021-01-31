import { Directive, ElementRef, EventEmitter, HostListener, inject, Input, OnInit, Output } from '@angular/core';
import * as InteractJS from 'interactjs/dist/interact.js';

@Directive({
  selector: '[appLineR]'
})
export class LineRDirective {

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
        edges: { left: true, right: true, bottom: false, top: false },

        listeners: {
          move(event) {
            const target = event.target;
            //console.log(event);
            //console.log(target.parentElement.children);

            const style = window.getComputedStyle(target);
            //console.log(target.getAttributeNS(null, 'd'));
            const arrayString = target.getAttributeNS(null, 'd').split('L').join(' ').split('M').join(' ').split('   ').join(' ').split('  ').join(' ');

            const arrayParams = arrayString.split(' ').map(x => +x);

            const lineFirstX = arrayParams[1];
            const lineFirstY = arrayParams[2];

            const lineSecondX = arrayParams[3];
            const lineSecondY = arrayParams[4];

            const lineThirdX = arrayParams[5];
            const lineThirdY = arrayParams[6];

            const lineFourthX = arrayParams[7];
            const lineFourthY = arrayParams[8];

            let resizeLeft = false;
            let resizeRight = false;

            let dataX = (parseFloat(target.getAttribute('data-x')) || 0);
            let dataY = (parseFloat(target.getAttribute('data-y')) || 0);

            let parentScrollLeft = event.currentTarget.parentElement.parentElement.parentElement.scrollLeft;

            if ((event.client.x + parentScrollLeft - dataX) + 50 > lineFourthX && (event.client.x + parentScrollLeft - dataX) - 50 < lineFourthX) {
              resizeRight = true;
              console.log("RIGHT!");

            }
            if ((event.client.x + parentScrollLeft - dataX) + 50 > lineFirstX && (event.client.x + parentScrollLeft - dataX) - 50 < lineFirstX) {
              resizeLeft = true;
              console.log("LEFT!");
            }

            let changeX = event.delta.x;

            if (resizeLeft) {
              target.setAttributeNS(null, "d",
                "M " + (lineFirstX + changeX) + " " + lineFirstY
                + " L " + (lineSecondX + changeX) + " " + lineSecondY
                + " L " + lineThirdX + " " + lineThirdY
                + " L " + lineFourthX + " " + lineFourthY);
            }
            if (resizeRight) {
              target.setAttributeNS(null, "d",
                "M " + lineFirstX + " " + lineFirstY
                + " L " + lineSecondX + " " + lineSecondY
                + " L " + (lineThirdX + changeX) + " " + lineThirdY
                + " L " + (lineFourthX + changeX) + " " + lineFourthY);
            }
          }
        },
        modifiers: [
          // minimum size
          InteractJS.modifiers.restrictSize({
            min: { width: 60, height: 3 }
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
        const target = event.target;
        const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
        const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);

        target.classList.add('getting-dragged');
        this.currentlyDragged = true;
      })
      .on('dragend', (event) => {
        const elem = event.currentTarget;
        elem.classList.remove('getting-dragged');
        setTimeout(() => {
          (window as any).dragData = null;
          this.currentlyDragged = false;
        });
      });
  }
}


