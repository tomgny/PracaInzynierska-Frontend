import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HtmlElementService {

  protected elements: any;

  constructor() {
    this.elements = {};
  }

  public add(key: string, value: HTMLElement): BehaviorSubject<HTMLElement>{
    if(this.has(key)){
      this.elements[key].next(value);
    }
    else{
      this.elements[key] = new BehaviorSubject(value);
    }
    return this.elements[key];
  }

  public get(key: string): BehaviorSubject<HTMLElement>{
    if(!this.has(key)){
      this.elements[key] = new BehaviorSubject(null);
    }
    return this.elements[key];
  }

  public delete(key: string){
    if (this.has(key)){
      this.elements[key].next(null);
      delete this.elements[key];
    }
  }

  public clear(){
    for(const key in Object.keys(this.elements)){
      if(this.elements.hasOwnProperty(key)){
        this.elements[key].next(null);
        delete this.elements[key];
      }
    }
  }

  public has(key: string){
    return (this.elements[key] instanceof BehaviorSubject);
  }
}
