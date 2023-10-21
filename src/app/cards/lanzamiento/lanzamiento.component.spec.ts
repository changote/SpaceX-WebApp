import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanzamientoComponent } from './lanzamiento.component';

describe('LanzamientoComponent', () => {
  let component: LanzamientoComponent;
  let fixture: ComponentFixture<LanzamientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanzamientoComponent]
    });
    fixture = TestBed.createComponent(LanzamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
