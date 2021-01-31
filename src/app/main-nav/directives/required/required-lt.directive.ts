import { Directive, ElementRef, EventEmitter, HostListener, inject, Input, OnInit, Output } from '@angular/core';
import * as InteractJS from 'interactjs/dist/interact.js';

@Directive({
  selector: '[appRequiredLt]'
})
export class RequiredLtDirective {

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
        edges: { left: true, right: true, bottom: true, top: true },

        listeners: {
          move(event) {

            const target = event.target;
            //console.log(event);
            //console.log(target.parentElement.children);

            const style = window.getComputedStyle(target);
            //console.log(target.getAttributeNS(null, 'd'));
            const arrayString = target.getAttributeNS(null, 'd').split('L').join(' ').split('M').join(' ').split('   ').join(' ').split('  ').join(' ').split('C').join(' ').split('   ').join(' ');
            console.log(arrayString);

            const arrayParams = arrayString.split(' ').map(x => +x);
            console.log(arrayParams.length);

            const lineFirstX = arrayParams[1];
            const lineFirstY = arrayParams[2];

            const lineSecondX = arrayParams[3];
            const lineSecondY = arrayParams[4];

            const lineThirdX = arrayParams[5];
            const lineThirdY = arrayParams[6];

            const lineFourthX = arrayParams[7];
            const lineFourthY = arrayParams[8];

            const arrowFirstX = arrayParams[9];
            const arrowFirstY = arrayParams[10];

            const curveFirstX = arrayParams[11];
            const curveFirstY = arrayParams[12];

            const curveSecondX = arrayParams[13];
            const curveSecondY = arrayParams[14];

            const curveThirdX = arrayParams[15];
            const curveThirdY = arrayParams[16];

            const arrowFifthX = arrayParams[17];
            const arrowFifthY = arrayParams[18];

            const curveFourthX = arrayParams[19];
            const curveFourthY = arrayParams[20];

            const curveFifthX = arrayParams[21];
            const curveFifthY = arrayParams[22];

            const curveSixthX = arrayParams[23];
            const curveSixthY = arrayParams[24];

            let resizeLeft = false;
            let resizeRight = false;

            let dataX = (parseFloat(target.getAttribute('data-x')) || 0);
            let dataY = (parseFloat(target.getAttribute('data-y')) || 0);

            let parentScrollLeft = event.currentTarget.parentElement.parentElement.parentElement.scrollLeft;

            if ((event.client.x + parentScrollLeft - dataX) + 25 > arrowFifthX && (event.client.x + parentScrollLeft - dataX) - 25 < arrowFifthX) {
              resizeRight = true;
              //console.log("RIGHT!");

            }
            if ((event.client.x + parentScrollLeft - dataX) + 25 > lineFirstX && (event.client.x + parentScrollLeft - dataX) - 25 < lineFirstX) {
              resizeLeft = true;
              //console.log("LEFT!");
            }

            let changeX = event.delta.x;
            let changeY = event.delta.y;

            if (resizeLeft) {
              target.setAttributeNS(null, "d",
                "M " + (lineFirstX + changeX) + " " + (lineFirstY + changeY)
                + " L " + (lineSecondX + changeX) + " " + (lineSecondY + changeY)
                + " L " + lineThirdX + " " + lineThirdY
                + " L " + lineFourthX + " " + lineFourthY
                + " M " + arrowFirstX + " " + arrowFirstY
                + " C " + curveFirstX + " " + curveFirstY + " " + curveSecondX + " " + curveSecondY + " " + curveThirdX + " " + curveThirdY
                + " M " + arrowFifthX + " " + arrowFifthY
                + " C " + curveFourthX + " " + curveFourthY + " " + curveFifthX + " " + curveFifthY + " " + curveSixthX + " " + curveSixthY
              );
            }
            if (resizeRight) {
              target.setAttributeNS(null, "d",
                "M " + lineFirstX + " " + lineFirstY
                + " L " + lineSecondX + " " + lineSecondY
                + " L " + (lineThirdX + changeX) + " " + (lineThirdY + changeY)
                + " L " + (lineFourthX + changeX) + " " + (lineFourthY + changeY)
                + " M " + (arrowFirstX + changeX) + " " + (arrowFirstY + changeY)
                + " C " + (curveFirstX + changeX) + " " + (curveFirstY + changeY) + " " + (curveSecondX + changeX) + " " + (curveSecondY + changeY) + " " + (curveThirdX + changeX) + " " + (curveThirdY + changeY)
                + " M " + (arrowFifthX + changeX) + " " + (arrowFifthY + changeY)
                + " C " + (curveFourthX + changeX) + " " + (curveFourthY + changeY) + " " + (curveFifthX + changeX) + " " + (curveFifthY + changeY) + " " + (curveSixthX + changeX) + " " + (curveSixthY + changeY)
              );
            }
          }
        },
        modifiers: [
          // minimum size
          InteractJS.modifiers.restrictSize({
            min: { width: 62, height: 71 }
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
