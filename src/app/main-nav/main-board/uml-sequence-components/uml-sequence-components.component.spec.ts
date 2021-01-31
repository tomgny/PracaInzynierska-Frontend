import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmlSequenceComponentsComponent } from './uml-sequence-components.component';

describe('UmlSequenceComponentsComponent', () => {
  let component: UmlSequenceComponentsComponent;
  let fixture: ComponentFixture<UmlSequenceComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmlSequenceComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmlSequenceComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
