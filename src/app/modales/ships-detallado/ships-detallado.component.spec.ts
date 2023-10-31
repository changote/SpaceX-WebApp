import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipsDetalladoComponent } from './ships-detallado.component';

describe('ShipsDetalladoComponent', () => {
  let component: ShipsDetalladoComponent;
  let fixture: ComponentFixture<ShipsDetalladoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShipsDetalladoComponent]
    });
    fixture = TestBed.createComponent(ShipsDetalladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
