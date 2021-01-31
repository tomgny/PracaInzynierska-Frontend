import { Directive, ElementRef, EventEmitter, HostListener, inject, Input, OnInit, Output } from '@angular/core';
import * as InteractJS from 'interactjs/dist/interact.js';


@Directive({
  selector: '[appInterfaceLt]'
})
export class InterfaceLtDirective {

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

            const target = event.target.children[0].children[0];
            const circle = event.target.children[1].children[0];
            console.log(event);
            //console.log(target);

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

            const circleX = circle.getAttribute('cx');
            const circleY = circle.getAttribute('cy');

            //console.log('cX: ' + circleX);
            //console.log(circleY);

            let resizeLeft = false;
            let resizeRight = false;

            let dataX = (parseFloat(target.getAttribute('data-x')) || 0);
            let dataY = (parseFloat(target.getAttribute('data-y')) || 0);

            let parentScrollLeft = event.currentTarget.parentElement.parentElement.scrollLeft

            if ((event.client.x + parentScrollLeft - dataX) + 50 > lineFourthX && (event.client.x + parentScrollLeft - dataX) - 50 < lineFourthX) {
              resizeRight = true;
              //console.log("RIGHT!");

            }
            if ((event.client.x + parentScrollLeft - dataX) + 50 > lineFirstX && (event.client.x + parentScrollLeft - dataX) - 50 < lineFirstX) {
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
              );
            }
            if (resizeRight) {
              target.setAttributeNS(null, "d",
                "M " + lineFirstX + " " + lineFirstY
                + " L " + lineSecondX + " " + lineSecondY
                + " L " + (lineThirdX + changeX) + " " + (lineThirdY + changeY)
                + " L " + (lineFourthX + changeX) + " " + (lineFourthY + changeY)
              );
              circle.setAttribute('cx', (+circleX + changeX));
              circle.setAttribute('cy', (+circleY + changeY));
            }
          }
        },
        modifiers: [
          // minimum size
          InteractJS.modifiers.restrictSize({
            min: { width: 100, height: 100 }
          })
        ],

        inertia: true
      })
      .on('dragmove', (event) => {
        const childrens = event.currentTarget.children;
        for (let child of childrens) {
          console.log(child.children);
          for (let elem of child.children) {
            const target = elem;
            const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
            const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

            target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);

            target.classList.add('getting-dragged');
            this.currentlyDragged = true;
            (window as any).dragData = this.model;
          }
        }
      })
      .on('dragend', (event) => {
        const childrens = event.currentTarget.children;
        for (let child of childrens) {
          console.log(child.children);
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

