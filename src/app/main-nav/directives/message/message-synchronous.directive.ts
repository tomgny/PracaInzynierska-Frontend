import { Directive, ElementRef, EventEmitter, HostListener, inject, Input, OnInit, Output } from '@angular/core';
import * as InteractJS from 'interactjs/dist/interact.js';

@Directive({
  selector: '[appMessageSynchronous]'
})
export class MessageSynchronousDirective {

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

            const target = event.target.children[0];
            console.log(event);
            //console.log(target.parentElement.children);

            const style = window.getComputedStyle(target);
            //console.log(target.getAttributeNS(null, 'd'));
            const arrayString = target.getAttributeNS(null, 'd').split('L').join(' ').split('M').join(' ').split('   ').join(' ').split('  ').join(' ');

            const arrayParams = arrayString.split(' ').map(x => +x);
            console.log(arrayParams);

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

            let resizeLeft = false;
            let resizeRight = false;

            let dataX = (parseFloat(event.target.getAttribute('data-x')) || 0);
            let dataY = (parseFloat(event.target.getAttribute('data-y')) || 0);
            let parentScrollLeft = event.currentTarget.parentElement.parentElement.scrollLeft;
            // console.log(parentScrollLeft);
            // console.log(event.client.x);
            console.log(target);

             console.log('dataX: ' + dataX);
            // console.log(arrowThirdX);

            console.log('przesuniecie: ' + (event.client.x + parentScrollLeft - dataX + 50));
            console.log('line third: ' + arrowThirdX);

            //console.log(event.client.x + parentScrollLeft - dataX + 50);
            console.log('lineFirst: ' + lineFirstX);






            if ((event.client.x + parentScrollLeft - dataX) + 50 > arrowThirdX && (event.client.x + parentScrollLeft - dataX) - 50 < arrowThirdX) {
              resizeRight = true;
              //console.log("RIGHT!");

            }
            if ((event.client.x + parentScrollLeft - dataX) + 50 > lineFirstX && (event.client.x + parentScrollLeft - dataX) - 50 < lineFirstX) {
              resizeLeft = true;
              //console.log("LEFT!");
            }
            let changeX = event.delta.x;

            if (resizeLeft) {
              target.setAttributeNS(null, "d",
                "M " + (lineFirstX + changeX) + " " + lineFirstY
                + " L " + (lineSecondX + changeX) + " " + lineSecondY
                + " L " + lineThirdX + " " + lineThirdY
                + " L " + lineFourthX + " " + lineFourthY
                + " M " + arrowFirstX + " " + arrowFirstY
                + " L " + arrowSecondX + " " + arrowSecondY
                + " L " + arrowThirdX + " " + arrowThirdY);
            }
            if (resizeRight) {
              target.setAttributeNS(null, "d",
                "M " + lineFirstX + " " + lineFirstY
                + " L " + lineSecondX + " " + lineSecondY
                + " L " + (lineThirdX + changeX) + " " + lineThirdY
                + " L " + (lineFourthX + changeX) + " " + lineFourthY
                + " M " + (arrowFirstX + changeX) + " " + arrowFirstY
                + " L " + (arrowSecondX + changeX) + " " + arrowSecondY
                + " L " + (arrowThirdX + changeX) + " " + arrowThirdY);
            }
          }
        },
        modifiers: [
          // minimum size
          InteractJS.modifiers.restrictSize({
            min: { width: 113, height: 36 }
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
