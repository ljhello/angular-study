import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveRegisteComponent } from './reactive-registe.component';

describe('ReactiveRegisteComponent', () => {
  let component: ReactiveRegisteComponent;
  let fixture: ComponentFixture<ReactiveRegisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveRegisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveRegisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
