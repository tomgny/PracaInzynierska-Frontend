import { Directive, ElementRef, EventEmitter, HostListener, inject, Input, OnInit, Output } from '@angular/core';
import * as InteractJS from 'interactjs/dist/interact.js';

@Directive({
  selector: '[appFragment]'
})
export class FragmentDirective {

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
            console.log(event);

            const target = event.target.children[1].children[0];
            //console.log(target);

            let x = (parseFloat(target.getAttribute('data-x')) || 0);
            let y = (parseFloat(target.getAttribute('data-y')) || 0);

            // update the element's style
            //target.style.width = event.rect.width + 'px';
            //target.style.height = event.rect.height + 'px';
            target.setAttribute('width', event.rect.width + 'px');
            target.setAttribute('height', event.rect.height + 'px');

            // translate when resizing from top or left edges
            //x += event.deltaRect.left;
            //y += event.deltaRect.top;

            //target.style.webkitTransform = target.style.transform =
            //  'translate(' + x + 'px,' + y + 'px)';

            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
          }
        },
        modifiers: [
          // minimum size
          InteractJS.modifiers.restrictSize({
            min: { width: 300, height: 150 }
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

