import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmlDeploymentElementsComponent } from './uml-deployment-elements.component';

describe('UmlDeploymentElementsComponent', () => {
  let component: UmlDeploymentElementsComponent;
  let fixture: ComponentFixture<UmlDeploymentElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmlDeploymentElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmlDeploymentElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
