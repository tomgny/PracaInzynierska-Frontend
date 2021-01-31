import { Directive, ElementRef, EventEmitter, HostListener, inject, Input, OnInit, Output } from '@angular/core';
import * as InteractJS from 'interactjs/dist/interact.js';


@Directive({
  selector: '[appRequiredB]'
})
export class RequiredBDirective {

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
        edges: { left: false, right: false, bottom: true, top: true },

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

            let resizeBottom = false;
            let resizeTop = false;

            let dataX = (parseFloat(target.getAttribute('data-x')) || 0);
            let dataY = (parseFloat(target.getAttribute('data-y')) || 0);

            let parentScrollTop = event.currentTarget.parentElement.parentElement.parentElement.scrollTop;
            if (event.client.y + parentScrollTop - (dataY + parseInt(target.parentElement.parentElement.parentElement.offsetTop) || 0) + 50 > lineSecondY && (event.client.y + parentScrollTop - (dataY + parseInt(target.parentElement.parentElement.parentElement.offsetTop) || 0)) - 50 < lineSecondY) {
              resizeBottom = true;
              //console.log("btm!");

            }
            if (event.client.y + parentScrollTop - (dataY + parseInt(target.parentElement.parentElement.parentElement.offsetTop) || 0) + 50 > arrowFifthY && (event.client.y + parentScrollTop - (dataY + parseInt(target.parentElement.parentElement.parentElement.offsetTop) || 0)) - 50 < arrowFifthY) {
              resizeTop = true;
              //console.log("top!");
            }

            let changeX = event.delta.x;
            let changeY = event.delta.y;

            if (resizeTop) {
              target.setAttributeNS(null, "d",
                "M " + lineFirstX + " " + lineFirstY
                + " L " + lineSecondX + " " + lineSecondY
                + " L " + lineThirdX + " " + (lineThirdY + changeY)
                + " L " + lineFourthX + " " + (lineFourthY + changeY)
                + " M " + arrowFirstX + " " + (arrowFirstY + changeY)
                + " C " + curveFirstX + " " + (curveFirstY + changeY) + " " + curveSecondX + " " + (curveSecondY + changeY) + " " + curveThirdX + " " + (curveThirdY + changeY)
                + " M " + arrowFifthX + " " + (arrowFifthY + changeY)
                + " C " + curveFourthX + " " + (curveFourthY + changeY) + " " + curveFifthX + " " + (curveFifthY + changeY) + " " + curveSixthX + " " + (curveSixthY + changeY)
              );
            }
            if (resizeBottom) {
              target.setAttributeNS(null, "d",
                "M " + lineFirstX + " " + (lineFirstY + changeY)
                + " L " + lineSecondX + " " + (lineSecondY + changeY)
                + " L " + lineThirdX + " " + lineThirdY
                + " L " + lineFourthX + " " + lineFourthY
                + " M " + arrowFirstX + " " + arrowFirstY
                + " C " + curveFirstX + " " + curveFirstY + " " + curveSecondX + " " + curveSecondY + " " + curveThirdX + " " + curveThirdY
                + " M " + arrowFifthX + " " + arrowFifthY
                + " C " + curveFourthX + " " + curveFourthY + " " + curveFifthX + " " + curveFifthY + " " + curveSixthX + " " + curveSixthY
              );
            }
          }
        },
        modifiers: [
          // minimum size
          InteractJS.modifiers.restrictSize({
            min: { width: 31, height: 107 }
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
