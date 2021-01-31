import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLoadComponent } from './auth-load.component';

describe('AuthLoadComponent', () => {
  let component: AuthLoadComponent;
  let fixture: ComponentFixture<AuthLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
