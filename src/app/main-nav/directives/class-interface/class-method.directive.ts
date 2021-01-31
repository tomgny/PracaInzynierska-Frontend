import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
//import { interact } from '@interactjs/interact/interact';
import * as InteractJS from 'interactjs/dist/interact.js';
import { UmlComponentRect } from '../../../models/uml-component-rect.model';

@Directive({
  selector: '[appClassMethod]'
})
export class ClassMethodDirective {

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
            let transformed = false;

            let transformClass = (elemArray[1].style.transform).match(/-[[0-9]{1,}|[[0-9]{1,}/g);
            if (transformClass != null) {
              transformed = true;
            }

            if (transformed) {
              elemArray[1].setAttribute('height', event.rect.height + 'px');
              elemArray[2].setAttribute('y', (event.rect.bottom - offsetTop) - (+transformClass[1]));
            }
            else {
              elemArray[1].setAttribute('height', event.rect.height + 'px');
              elemArray[2].setAttribute('y', (event.rect.bottom - offsetTop));
            }

            for (let i = 0; i < elemTextArray[3].children.length; i++) {
              elemTextArray[3].children[i].setAttribute('y', +elemArray[2].getAttribute('y') + (15 + (15 * i)));
              elemTextArray[3].children[i].setAttribute('x', +elemArray[2].getAttribute('x') + 4);
              if (transformClass != null) {
                elemTextArray[3].children[i].style.transform = 'translate(' + transformClass[0] + 'px, ' + transformClass[1] + 'px)';
              }
            }
            for (let i = 0; i < elemArray.length; i++) {
              elemArray[i].style.width = event.rect.width + 'px';
            }

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
      {
        modifiers: [
          // keep the edges inside the parent
          InteractJS.modifiers.restrictRect({
            //restriction: 'parent.parent'
          })]
      },
      ))
      .on('dragmove', (event) => {//dodac to do kazdego elementu svg grupy Class i pozniej rozszerzanie na podstawie wielkosci tekstu SVG
        console.log(event);
        const elemArray = event.currentTarget.parentElement.children;
        const elemTextArray = event.currentTarget.parentElement.children.children;
        let transformRects = (event.currentTarget.parentElement.parentElement.children[0].children[0].style.transform).match(/-[[0-9]{1,}|[[0-9]{1,}/g);

        for (let i = 0; i < elemArray.length; i++) {
          //console.log(elemArray[i]);
          const target = elemArray[i];
          let leftMove = false;
          let topMove = false;
          const marginPixels = 100;
          const addPixels = 10;
          const startX = target.x.animVal.value;
          const startY = target.y.animVal.value;
          const x = (parseFloat(target.getAttribute('data-x')) || 0);
          const y = (parseFloat(target.getAttribute('data-y')) || 0);

          if ((startX + x + marginPixels + 150) >= target.parentElement.clientWidth) {//RESIZE RIGHT

            target.parentElement.style.width = target.parentElement.clientWidth + addPixels;
          }

          if ((startY + y + marginPixels + 100) >= target.parentElement.clientHeight) {//RESIZE BOTTOM
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
        for (let i = 0; i < event.target.parentNode.parentElement.children[1].children.length; i++) {

          const text = event.target.parentNode.parentElement.children[1].children[i];
          //console.log(elemArray[0]);

          //console.log(text);
          if (transformRects != null) {
            text.setAttribute('y', +elemArray[0].getAttribute('y') + (+transformRects[1]) + (15 + (15 * i)))
            text.setAttribute('x', +elemArray[0].getAttribute('x') + (+transformRects[0]) + 4);
          }
          else {
            text.setAttribute('y', +elemArray[0].getAttribute('y') + (15 + (15 * i)))
            text.setAttribute('x', +elemArray[0].getAttribute('x') + 4);
          }

        }
        for (let i = 0; i < event.target.parentNode.parentElement.children[2].children.length; i++) {
          const text = event.target.parentNode.parentElement.children[2].children[i];
          if (transformRects != null) {
            text.style.transform = 'translate(' + transformRects[0] + 'px, ' + transformRects[1] + 'px)';
          }
          text.setAttribute('y', +elemArray[1].getAttribute('y') + (15 + (15 * i)))
          text.setAttribute('x', +elemArray[1].getAttribute('x') + 4);
        }
        for (let i = 0; i < event.target.parentNode.parentElement.children[3].children.length; i++) {
          const text = event.target.parentNode.parentElement.children[3].children[i];
          if (transformRects != null) {
            text.style.transform = 'translate(' + transformRects[0] + 'px, ' + transformRects[1] + 'px)';
          }
          text.setAttribute('y', +elemArray[2].getAttribute('y') + (15 + (15 * i)))
          text.setAttribute('x', +elemArray[2].getAttribute('x') + 4);
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

