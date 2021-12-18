import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingClassesComponent } from './binding-classes.component';

describe('BindingClassesComponent', () => {
  let component: BindingClassesComponent;
  let fixture: ComponentFixture<BindingClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingClassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
