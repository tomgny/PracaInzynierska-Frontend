import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadedTableComponent } from './loaded-table.component';

describe('LoadedTableComponent', () => {
  let component: LoadedTableComponent;
  let fixture: ComponentFixture<LoadedTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadedTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
