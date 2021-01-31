import { Directive, ElementRef, EventEmitter, HostListener, inject, Input, OnInit, Output } from '@angular/core';
import * as InteractJS from 'interactjs/dist/interact.js';

@Directive({
  selector: '[appAggregationB]'
})
export class AggregationBDirective {

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

      .draggable(Object.assign({}, this.options || {}))

      .resizable({
        // resize from all edges and corners
        edges: { left: false, right: false, bottom: true, top: true },

        listeners: {
          move(event) {

            const target = event.target;
            const style = window.getComputedStyle(target);
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

            const arrowFirstX = arrayParams[9];
            const arrowFirstY = arrayParams[10];

            const arrowSecondX = arrayParams[11];
            const arrowSecondY = arrayParams[12];

            const arrowThirdX = arrayParams[13];
            const arrowThirdY = arrayParams[14];

            const arrowFourthX = arrayParams[15];
            const arrowFourthY = arrayParams[16];

            const arrowFifthX = arrayParams[17];
            const arrowFifthY = arrayParams[18];

            const arrowSixthX = arrayParams[19];
            const arrowSixthY = arrayParams[20];

            const arrowSeventhX = arrayParams[21];
            const arrowSeventhY = arrayParams[22];

            const arrowEigthX = arrayParams[23];
            const arrowEigthY = arrayParams[24];

            let resizeBottom = false;
            let resizeTop = false;

            let dataX = (parseFloat(target.getAttribute('data-x')) || 0);
            let dataY = (parseFloat(target.getAttribute('data-y')) || 0);
            //console.log("OFFSET: " + target.parentElement.parentElement.parentElement.offsetTop);

            //console.log('dataY: ' + dataY);
            //console.log('clientY: ' + event.client.y);
            //console.log('arrowSix: ' + arrowSixthY);
            //console.log('secondY: ' + lineSecondY);

            //console.log("data+ " + (+ dataY + parseFloat(target.parentElement.parentElement.parentElement.offsetTop || 0)));
            //console.log("event.clienty  " + event.client.y);


            let parentScrollTop = event.currentTarget.parentElement.parentElement.parentElement.scrollTop;
            if (event.client.y + (parentScrollTop) - (dataY + parseInt(target.parentElement.parentElement.parentElement.offsetTop) || 0) + 50 > lineFirstY && (event.client.y + (parentScrollTop) - (dataY + parseInt(target.parentElement.parentElement.parentElement.offsetTop) || 0)) - 50 < lineFirstY) {
              resizeBottom = true;
              console.log("btm!");

            }
            if (event.client.y + (parentScrollTop) - (dataY + parseInt(target.parentElement.parentElement.parentElement.offsetTop) || 0) + 50 > arrowEigthY && (event.client.y - (dataY + (parentScrollTop) + parseInt(target.parentElement.parentElement.parentElement.offsetTop) || 0)) - 50 < arrowEigthY) {
              resizeTop = true;
              console.log("top!");
            }

            //console.log('SUM: ' + (arrowSixthY - lineFirstY));

            let changeY = event.delta.y;

            if (resizeBottom) {
              target.setAttributeNS(null, "d",
                "M " + lineFirstX + " " + (lineFirstY + changeY)
                + " L " + lineSecondX + " " + (lineSecondY + changeY)
                + " L " + lineThirdX + " " + lineThirdY
                + " L " + lineFourthX + " " + lineFourthY
                + " M " + arrowFirstX + " " + arrowFirstY
                + " L " + arrowSecondX + " " + arrowSecondY
                + " L " + arrowThirdX + " " + arrowThirdY
                + " L " + arrowFourthX + " " + arrowFourthY
                + " M " + arrowFifthX + " " + arrowFifthY
                + " L " + arrowSixthX + " " + arrowSixthY
                + " L " + arrowSeventhX + " " + arrowSeventhY
                + " L " + arrowEigthX + " " + arrowEigthY
              );
            }
            if (resizeTop) {
              target.setAttributeNS(null, "d",
                "M " + lineFirstX + " " + lineFirstY
                + " L " + lineSecondX + " " + lineSecondY
                + " L " + lineThirdX + " " + (lineThirdY + changeY)
                + " L " + lineFourthX + " " + (lineFourthY + changeY)
                + " M " + arrowFirstX + " " + (arrowFirstY + changeY)
                + " L " + arrowSecondX + " " + (arrowSecondY + changeY)
                + " L " + arrowThirdX + " " + (arrowThirdY + changeY)
                + " L " + arrowFourthX + " " + (arrowFourthY + changeY)
                + " M " + arrowFifthX + " " + (arrowFifthY + changeY)
                + " L " + arrowSixthX + " " + (arrowSixthY + changeY)
                + " L " + arrowSeventhX + " " + (arrowSeventhY + changeY)
                + " L " + arrowEigthX + " " + (arrowEigthY + changeY)
              );
            }
          }
        },
        modifiers: [

          // minimum size
          InteractJS.modifiers.restrictSize({
            min: { width: 29, height: 113 }
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
        event.target.classList.remove('getting-dragged');
        setTimeout(() => {
          (window as any).dragData = null;
          this.currentlyDragged = false;
        });
      });
  }
}
