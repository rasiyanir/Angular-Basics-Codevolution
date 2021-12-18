import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDerectiveComponent } from './structural-derective.component';

describe('StructuralDerectiveComponent', () => {
  let component: StructuralDerectiveComponent;
  let fixture: ComponentFixture<StructuralDerectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuralDerectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralDerectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
