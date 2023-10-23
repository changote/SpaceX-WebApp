import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleLanzamientoComponent } from './detalle-lanzamiento.component';

describe('DetalleLanzamientoComponent', () => {
  let component: DetalleLanzamientoComponent;
  let fixture: ComponentFixture<DetalleLanzamientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleLanzamientoComponent]
    });
    fixture = TestBed.createComponent(DetalleLanzamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
