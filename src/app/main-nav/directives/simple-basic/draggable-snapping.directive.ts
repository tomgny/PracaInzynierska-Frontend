import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
//import { interact } from '@interactjs/interact/interact';
import * as InteractJS from 'interactjs/dist/interact.js';
import { UmlComponentRect } from '../../../models/uml-component-rect.model';
import { UmlComponent } from '../../../models/uml-component.model';


@Directive({
  selector: '[appDraggableSnapping]'
})
export class DraggableSnappingDirective implements OnInit {

  @Input()
  model: UmlComponentRect;

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
            const target = event.target
            const elemArray = event.currentTarget.parentElement.children;
            const elemTextArray = event.currentTarget.parentElement.parentElement.children;
            const offsetTop = event.currentTarget.parentElement.parentElement.parentElement.parentNode.offsetTop;
            let currentRectId = -1;
            let changeDimension;

            for (let i = 0; i < elemArray.length; i++) {
              if (elemArray[i] === target) {
                currentRectId = i;
              }
            }

            for (let i = 0; i < elemArray.length; i++) {
              if (event.deltaRect.height == 1 || event.deltaRect.height == -1) {
                if (i == currentRectId) {
                  elemArray[i].setAttribute('height', event.rect.height + 'px');
                  changeDimension = i;
                }
                if (i > currentRectId) {
                  //console.log(elemArray[i]);
                  //console.log(elemArray[i].getAttribute('y'));
                  for (let j = 1; j < elemTextArray.length; j++) {
                    if ((i + 1) == j) {
                      //console.log(elemTextArray[j].children);

                      for (let z = 0; z < elemTextArray[j].children.length; z++) {
                        //console.log(elemTextArray[j].children[z]);
                        console.log(i);

                        elemTextArray[j].children[z].setAttribute('y', (event.rect.bottom - offsetTop + (25 * i)));
                      }
                    }
                  }
                  //event.currentTarget.parentElement.parentElement.children[i+1].children[0].setAttribute('y', (event.rect.bottom - offsetTop) + 'px');
                  elemArray[i].setAttribute('y', (event.rect.bottom - offsetTop + (20 * (i - changeDimension))));
                }
              }
              if (event.deltaRect.width == 1 || event.deltaRect.width == -1) {
                elemArray[i].style.width = event.rect.width + 'px';
              }
            }


            // update the element's style
            //target.style.width = event.rect.width + 'px'
            //target.style.height = event.rect.height + 'px'
            //console.log(target);
            //console.log(target.style.height);



            // translate when resizing from top or left edges
            //x += event.deltaRect.left
            //y += event.deltaRect.top

            //target.style.webkitTransform = target.style.transform =
            //  'translate(' + x + 'px,' + y + 'px)'

            //target.setAttribute('data-x', x)
            //target.setAttribute('data-y', y)
            //target.setAttributeNS(null, 'fill', 'url(#rectImg)');
            //target.setAttributeNS(null, 'x', x);
            //target.setAttributeNS(null, 'y', y);
            //target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height)
          }
        },
        modifiers: [
          // minimum size
          InteractJS.modifiers.restrictSize({
            min: { width: 150, height: 20 }
          })
        ],

        inertia: true

      })
      .draggable(Object.assign({}, this.options ||
      /*
      {
      snap: {
        targets: [
          InteractJS.createSnapGrid({ x: 10, y: 10 })
        ],
        range: Infinity
      },
      interia: true,
      restrict: {
        restrict: {
          restriction: this.element.nativeElement.parentNode,
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
          endOnly: true
        }
      }
    },
    */
      {
        modifiers: [
          // keep the edges inside the parent
          InteractJS.modifiers.restrictRect({
            //restriction: 'parent.parent'
          })]
      },
      ))
      .on('dragmove', (event) => {//dodac to do kazdego elementu svg grupy Class i pozniej rozszerzanie na podstawie wielkosci tekstu SVG
        //console.log(event);
        for (let group of event.currentTarget.parentElement.parentElement.children) {
          for (let elem of group.children) {
            //console.log(elem);

            const target = elem;
            //const target = event.currentTarget.childNodes[0].children[0];
            //console.log('before top: ' + target.parentElement.style.height);+
            //console.log(event);
            let leftMove = false;
            let topMove = false;
            const marginPixels = 100;
            const addPixels = 10;
            const startX = target.x.animVal.value;
            const startY = target.y.animVal.value;
            const x = (parseFloat(target.getAttribute('data-x')) || 0);
            const y = (parseFloat(target.getAttribute('data-y')) || 0);
            const parentX = (parseFloat(target.parentElement.getAttribute('data-x')) || 0);
            const parentY = (parseFloat(target.parentElement.getAttribute('data-y')) || 0);

            /*
            if ((startX + x - marginPixels + (0.75 * marginPixels)) <= 0) {//RESIZE LEFT
              //console.log("RESIZE LEFT: " + target.parentElement.clientLeft);
              target.parentElement.style.transform = 'translate(' + parentX + 'px, ' + parentY + 'px)';
              target.parentElement.setAttribute('data-x', parentX - addPixels);
              target.parentElement.style.width = target.parentElement.clientWidth + addPixels;
              leftMove = true;
            }
            */
            if ((startX + x + marginPixels + 150) >= target.parentElement.clientWidth) {//RESIZE RIGHT
              //console.log("RESIZE RIGHT " + target.parentElement.clientWidth);
              target.parentElement.style.width = target.parentElement.clientWidth + addPixels;
            }
            /*
            if ((startY + y - marginPixels + (0.75 * marginPixels)) <= 0) {//RESIZE TOP
              //console.log("RESIZE UP " + target.parentElement.clientTop);
              target.parentElement.style.transform = 'translate(' + parentX + 'px, ' + parentY + 'px)';
              target.parentElement.setAttribute('data-y', parentY - addPixels);
              target.parentElement.style.height = target.parentElement.clientHeight + addPixels;
              topMove = true;
            }
            */
            if ((startY + y + marginPixels + 100) >= target.parentElement.clientHeight) {//RESIZE BOTTOM
              //console.log("RESIZE DOWN " + target.parentElement.bottom);
              target.parentElement.style.height = target.parentElement.clientHeight + addPixels;
            }

            const xMove = x + event.dx;
            const yMove = y + event.dy;


            if (!leftMove && !topMove) {
              target.style.transform = 'translate(' + xMove + 'px, ' + yMove + 'px)';
              target.setAttribute('data-x', xMove);
              target.setAttribute('data-y', yMove);
            }
            if (leftMove) {
              target.style.transform = 'translate(' + (xMove + addPixels) + 'px, ' + yMove + 'px)';
              //target.style.height = xMove;
              //target.style.width = yMove;
              target.setAttribute('data-x', (xMove + addPixels));
              target.setAttribute('data-y', yMove);
              leftMove = false;
            }
            if (topMove) {
              target.style.transform = 'translate(' + xMove + 'px, ' + (yMove + addPixels) + 'px)';
              target.setAttribute('data-x', xMove);
              target.setAttribute('data-y', (yMove + addPixels));
              topMove = false;
            }




            target.classList.add('getting-dragged');
            this.currentlyDragged = true;
            (window as any).dragData = this.model;
          }
        }



      })
      .on('dragend', (event) => {
        for (let group of event.currentTarget.parentElement.parentElement.children) {
          for (let elem of group.children) {
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
