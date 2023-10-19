import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePistaComponent } from './detalle-pista.component';

describe('DetallePistaComponent', () => {
  let component: DetallePistaComponent;
  let fixture: ComponentFixture<DetallePistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallePistaComponent]
    });
    fixture = TestBed.createComponent(DetallePistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
