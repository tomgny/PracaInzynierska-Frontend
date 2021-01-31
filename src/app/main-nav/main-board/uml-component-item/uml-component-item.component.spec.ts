import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmlComponentItemComponent } from './uml-component-item.component';

describe('UmlComponentItemComponent', () => {
  let component: UmlComponentItemComponent;
  let fixture: ComponentFixture<UmlComponentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmlComponentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmlComponentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
