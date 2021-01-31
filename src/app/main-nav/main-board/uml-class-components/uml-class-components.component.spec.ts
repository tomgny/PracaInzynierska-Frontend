import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmlComponentsComponent } from './uml-components.component';

describe('UmlComponentsComponent', () => {
  let component: UmlComponentsComponent;
  let fixture: ComponentFixture<UmlComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmlComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmlComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
