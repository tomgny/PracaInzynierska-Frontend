import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramChoiceComponent } from './diagram-choice.component';

describe('DiagramChoiceComponent', () => {
  let component: DiagramChoiceComponent;
  let fixture: ComponentFixture<DiagramChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagramChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagramChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
