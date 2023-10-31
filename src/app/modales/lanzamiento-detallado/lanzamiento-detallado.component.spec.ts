import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanzamientoDetalladoComponent } from './lanzamiento-detallado.component';

describe('LanzamientoDetalladoComponent', () => {
  let component: LanzamientoDetalladoComponent;
  let fixture: ComponentFixture<LanzamientoDetalladoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanzamientoDetalladoComponent]
    });
    fixture = TestBed.createComponent(LanzamientoDetalladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
