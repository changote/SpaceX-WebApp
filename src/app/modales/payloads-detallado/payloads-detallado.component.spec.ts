import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayloadsDetalladoComponent } from './payloads-detallado.component';

describe('PayloadsDetalladoComponent', () => {
  let component: PayloadsDetalladoComponent;
  let fixture: ComponentFixture<PayloadsDetalladoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayloadsDetalladoComponent]
    });
    fixture = TestBed.createComponent(PayloadsDetalladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
