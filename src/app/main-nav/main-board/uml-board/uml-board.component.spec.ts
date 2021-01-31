import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmlBoardComponent } from './uml-board.component';

describe('UmlBoardComponent', () => {
  let component: UmlBoardComponent;
  let fixture: ComponentFixture<UmlBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmlBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmlBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
