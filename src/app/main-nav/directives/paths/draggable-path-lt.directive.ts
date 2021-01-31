import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
//import { interact } from '@interactjs/interact/interact';
import * as InteractJS from 'interactjs/dist/interact.js';
@Directive({
  selector: '[appDraggablePathLt]'
})
export class DraggablePathLtDirective {

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
            console.log(event);
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
            //console.log("client.x " + event.client.x);
            //console.log("dataX " + dataX);
            let parentScrollLeft = event.currentTarget.parentElement.parentElement.parentElement.scrollLeft;

            if ((event.client.x + parentScrollLeft - dataX) + 50 > arrowFourthX && (event.client.x + parentScrollLeft - dataX) - 50 < arrowFourthX) {
              resizeRight = true;
              //console.log("RIGHT!");

            }
            if ((event.client.x + parentScrollLeft - dataX) + 50 > lineFirstX && (event.client.x + parentScrollLeft - dataX) - 50 < lineFirstX) {
              resizeLeft = true;
              //console.log("LEFT!");
            }

            let changeX = event.delta.x;
            let changeY = event.delta.y;

            if (resizeRight) {
              if (event.delta.y < 0 || event.delta.x < 0) {
                //changeX -= 1;
                //changeY -= 1;
                target.setAttributeNS(null, "d",
                  "M " + lineFirstX + " " + lineFirstY
                  + " L " + lineSecondX + " " + lineSecondY
                  + " L " + (lineThirdX + changeX) + " " + (lineThirdY + changeY)
                  + " L " + (lineFourthX + changeX) + " " + (lineFourthY + changeY)
                  + " M " + (arrowFirstX + changeX) + " " + (arrowFirstY + changeY)
                  + " L " + (arrowSecondX + changeX) + " " + (arrowSecondY + changeY)
                  + " L " + (arrowThirdX + changeX) + " " + (arrowThirdY + changeY)
                  + " M " + (arrowFourthX + changeX) + " " + (arrowFourthY + changeY)
                  + " L " + (arrowFifthX + changeX) + " " + (arrowFifthY + changeY)
                  + " L " + (arrowSixthX + changeX) + " " + (arrowSixthY + changeY));
              }
              if (event.delta.y > 0 || event.delta.x > 0 && (lineFirstX + arrowSixthX) > 100) {
                //changeX += 1;
                //changeY += 1;
                target.setAttributeNS(null, "d",
                  "M " + lineFirstX + " " + lineFirstY
                  + " L " + lineSecondX + " " + lineSecondY
                  + " L " + (lineThirdX + changeX) + " " + (lineThirdY + changeY)
                  + " L " + (lineFourthX + changeX) + " " + (lineFourthY + changeY)
                  + " M " + (arrowFirstX + changeX) + " " + (arrowFirstY + changeY)
                  + " L " + (arrowSecondX + changeX) + " " + (arrowSecondY + changeY)
                  + " L " + (arrowThirdX + changeX) + " " + (arrowThirdY + changeY)
                  + " M " + (arrowFourthX + changeX) + " " + (arrowFourthY + changeY)
                  + " L " + (arrowFifthX + changeX) + " " + (arrowFifthY + changeY)
                  + " L " + (arrowSixthX + changeX) + " " + (arrowSixthY + changeY));
              }
            }
            if (resizeLeft) {
              if (event.delta.y < 0 || event.delta.x < 0) {
                //changeX -= 1;
                //changeY -= 1;
                target.setAttributeNS(null, "d",
                  "M " + (lineFirstX + changeX) + " " + (lineFirstY + changeY)
                  + " L " + (lineSecondX + changeX) + " " + (lineSecondY + changeY)
                  + " L " + lineThirdX + " " + lineThirdY
                  + " L " + lineFourthX + " " + lineFourthY
                  + " M " + arrowFirstX + " " + arrowFirstY
                  + " L " + arrowSecondX + " " + arrowSecondY
                  + " L " + arrowThirdX + " " + arrowThirdY
                  + " M " + arrowFourthX + " " + arrowFourthY
                  + " L " + arrowFifthX + " " + arrowFifthY
                  + " L " + arrowSixthX + " " + arrowSixthY);
              }
              if (event.delta.y > 0 || event.delta.x > 0 && (lineFirstX + arrowSixthX) > 100) {
                //changeX += 1;
                //changeY += 1;
                target.setAttributeNS(null, "d",
                  "M " + (lineFirstX + changeX) + " " + (lineFirstY + changeY)
                  + " L " + (lineSecondX + changeX) + " " + (lineSecondY + changeY)
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
          }
        },
        modifiers: [

          // minimum size
          InteractJS.modifiers.restrictSize({
            min: { width: 60, height: 60 }
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
