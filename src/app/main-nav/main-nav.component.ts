import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HtmlElementService } from '../services/html-element.service';
import { MatToolbar } from '@angular/material/toolbar';
import { DiagramMenuService } from '../services/diagram-menu.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent implements OnInit, AfterViewInit, AfterContentInit {

  showSubscription: Subscription;
  showSaveSubscription: Subscription;
  showLoadSubscription: Subscription;
  @ViewChild('toolbar', { static: false }) toolbar: MatToolbar;

  constructor(private htmlElementService: HtmlElementService, private diagramMenuService: DiagramMenuService) { }

  show = false;
  showSaveAlert = false;
  showLoadAlert = false;


  ngOnInit() {

  }

  ngAfterViewInit() {
    this.htmlElementService.add('toolbar', this.toolbar._elementRef.nativeElement);

  }

  ngAfterContentInit() {
    this.showSubscription = this.diagramMenuService.showMenu
      .subscribe((isVisible) => {
        this.show = isVisible;
      });
    this.showSaveSubscription = this.diagramMenuService.showSaveSubject
      .subscribe((showSaveMenu) => {
        this.showSaveAlert = showSaveMenu;
      });
    this.showSaveSubscription = this.diagramMenuService.showLoadSubject
      .subscribe(showLoadMenu => {
        this.showLoadAlert = showLoadMenu;
      })
  }

}
