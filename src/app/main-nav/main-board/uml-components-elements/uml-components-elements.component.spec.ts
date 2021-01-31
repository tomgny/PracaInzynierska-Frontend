import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmlComponentsElementsComponent } from './uml-components-elements.component';

describe('UmlComponentsElementsComponent', () => {
  let component: UmlComponentsElementsComponent;
  let fixture: ComponentFixture<UmlComponentsElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmlComponentsElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmlComponentsElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
