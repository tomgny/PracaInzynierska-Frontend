import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmlUseCasesComponentsComponent } from './uml-use-cases-components.component';

describe('UmlUseCasesComponentsComponent', () => {
  let component: UmlUseCasesComponentsComponent;
  let fixture: ComponentFixture<UmlUseCasesComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmlUseCasesComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmlUseCasesComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
