import { keyframes } from '@angular/animations';
import { Directive, ElementRef, Host, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEditableText]'
})
export class EditableTextDirective implements OnInit {

  private test: ElementRef<HTMLElement>;
  private focused = false;
  constructor(private elem: ElementRef, private renderer2: Renderer2) {

  }
  ngOnInit(): void {

  }

  @HostListener('dblclick') onMouseOver() {
    //this.test.nativeElement.innerHTML
    //this.test.nativeElement.style.minWidth
    //console.log(this.elem.nativeElement.parentElement.parentElement.hasAttribute('contenteditable'));
    /*
    this.elem.nativeElement.parentElement.parentElement.setAttributeNS(null, 'contenteditable', 'true');
    setTimeout(() => this.elem.nativeElement.focus(), 0);
    this.focused = true;
    */
    console.log('dsadsas');

    console.log(this.elem.nativeElement.x);
    console.log(this.elem.nativeElement.y);
    const x = (this.elem.nativeElement.x.animVal[0].value);
    const y = (this.elem.nativeElement.y.animVal[0].value);
    let myforeign = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject')
    let textdiv = document.createElement("div");
    let textnode = document.createTextNode(this.elem.nativeElement.textContent);
    console.log(this.elem);
    this.elem.nativeElement.setAttributeNS(null, 'visibility', 'hidden');

    textdiv.appendChild(textnode);
    textdiv.setAttribute("contentEditable", "true");
    textdiv.setAttribute("width", "auto");
    myforeign.setAttribute("width", "100%");
    myforeign.setAttribute("height", "100%");
    myforeign.classList.add("foreign"); //to make div fit text
    textdiv.classList.add("insideforeign"); //to make div fit text
    myforeign.setAttributeNS(null, "transform", "translate(" + x + ", " + (y - 13) + ")");

    textdiv.addEventListener('focusout', (e: KeyboardEvent) => {
      let innerHTMLArray = textdiv.innerHTML.split(/<div>|<\/div>/);
      console.log(innerHTMLArray);

      for (let i = 0; i < innerHTMLArray.length; i++) {
        if (innerHTMLArray[i] === '') {
          innerHTMLArray.splice(i, 1);
        }
      }
      //console.log(innerHTMLArray);
      console.log(x);
      console.log(y);

      for (let i = 0; i < innerHTMLArray.length; i++) {
        if (innerHTMLArray[i] === '<br>') {
          let newText = this.renderer2.createElement('text', this.elem.nativeElement.parentElement.namespaceURI);
          newText.textContent = ' ';
          newText.setAttributeNS(null, 'x', x);
          newText.setAttributeNS(null, 'y', y + i * 16);
          //let addDirective = new EditableTextDirective(newText, this.renderer2);
          //addDirective.onMouseOver();
          this.elem.nativeElement.parentElement.appendChild(newText);
        }
        else {
          let newText = this.renderer2.createElement('text', this.elem.nativeElement.parentElement.namespaceURI);
          newText.textContent = innerHTMLArray[i];
          newText.setAttributeNS(null, 'x', x);
          newText.setAttributeNS(null, 'y', y + i * 16);
          //let addDirective = new EditableTextDirective(newText, this.renderer2);
          //addDirective.onMouseOver();
          this.elem.nativeElement.parentElement.appendChild(newText);
        }
      }
      this.elem.nativeElement.textContent = textdiv.innerHTML;
      this.elem.nativeElement.setAttributeNS(null, 'visibility', 'hidden');
      myforeign.remove();
    }, false);

    this.elem.nativeElement.parentElement.appendChild(myforeign);
    myforeign.appendChild(textdiv);
    textdiv.focus();
  }
}
