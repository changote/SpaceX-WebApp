import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanzamientosComponent } from './lanzamientos.component';

describe('LanzamientosComponent', () => {
  let component: LanzamientosComponent;
  let fixture: ComponentFixture<LanzamientosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanzamientosComponent]
    });
    fixture = TestBed.createComponent(LanzamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
